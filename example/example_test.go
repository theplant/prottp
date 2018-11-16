package example_test

import (
	"bytes"
	fmt "fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"net/http/httputil"
	"reflect"
	"strings"
	"testing"

	proto "github.com/golang/protobuf/proto"
	"github.com/theplant/appkit/log"
	"github.com/theplant/appkit/server"
	"github.com/theplant/prottp/example"
	"github.com/theplant/testingutils"
)

var emptyJSON = `{

}`

var cases = []struct {
	Name                string
	URL                 string
	Accept              string
	JSONReqBody         string
	ExpectedJSONResBody string
	PBReqBody           proto.Message
	ExpectedPBResBody   proto.Message
	ExpectedStatusCode  int
	ExpectedHeadersDump string
}{
	{
		Name: "test json normal",
		URL:  "/example.SearchService/Search",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedJSONResBody: `{
	"result": [
		{
			"url": "query string",
			"some_snaked_name": 2
		}
	]
}`,
		ExpectedHeadersDump: `HTTP/1.1 200 OK
Content-Length: 78
Content-Type: application/json;type=example.SearchResponse

`,
	},

	{
		Name: "test protobuf normal",
		URL:  "/example.SearchService/Search",
		PBReqBody: &example.SearchRequest{
			Query:         "query string protobuf",
			PageNumber:    2,
			ResultPerPage: 10,
		},
		ExpectedPBResBody: &example.SearchResponse{
			Result: []*example.Result{
				{Url: "query string protobuf", SomeSnakedName: 2},
			},
		},
		ExpectedHeadersDump: `HTTP/1.1 200 OK
Content-Length: 27
Content-Type: application/x.prottp;type=example.SearchResponse

`,
	},

	{
		Name:   "test request json, response x.prottp normal",
		URL:    "/example.SearchService/Search",
		Accept: "application/x.prottp, application/json;q=0.9, */*;q=0.8",
		JSONReqBody: `{
			"query": "query string protobuf",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedPBResBody: &example.SearchResponse{
			Result: []*example.Result{
				{Url: "query string protobuf", SomeSnakedName: 2},
			},
		},
		ExpectedHeadersDump: `HTTP/1.1 200 OK
Content-Length: 27
Content-Type: application/x.prottp;type=example.SearchResponse

`,
	},

	{
		Name:   "test request x.prottp, response json normal",
		URL:    "/example.SearchService/Search",
		Accept: "application/json;q=0.9, */*;q=0.8",
		PBReqBody: &example.SearchRequest{
			Query:         "query string protobuf",
			PageNumber:    2,
			ResultPerPage: 10,
		},
		ExpectedJSONResBody: `{
	"result": [
		{
			"url": "query string protobuf",
			"some_snaked_name": 2
		}
	]
}`,
		ExpectedHeadersDump: `HTTP/1.1 200 OK
Content-Length: 87
Content-Type: application/json;type=example.SearchResponse

`,
	},

	{
		Name: "test json error in response body",
		URL:  "/example.SearchService/SearchReturnError",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedStatusCode: 500,
		ExpectedJSONResBody: `{
	"field": "field123",
	"error_count": 100
}`,
	},
	{
		Name: "test validator error in response body",
		URL:  "/example.SearchService/SearchValidateError",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedStatusCode: 422,
		ExpectedJSONResBody: `{
	"code": "Hello",
	"msg": "Some fields are error"
}`,
	},
	{
		Name: "test json broken request body should not panic",
		URL:  "/example.SearchService/SearchReturnError",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10]
		}`,
		ExpectedStatusCode:  400,
		ExpectedJSONResBody: emptyJSON,
	},
	{
		Name: "test response nil should panic",
		URL:  "/example.SearchService/SearchReturnNil",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedStatusCode:  500,
		ExpectedJSONResBody: ``,
	},

	{
		Name: "test protobuf error in response body",
		URL:  "/example.SearchService/SearchReturnError",
		PBReqBody: &example.SearchRequest{
			Query:         "query string protobuf",
			PageNumber:    2,
			ResultPerPage: 10,
		},
		ExpectedStatusCode: 500,
		ExpectedPBResBody: &example.SearchError{
			Field:      "field123",
			ErrorCount: 100,
		},
	},

	{
		Name: "test unexpected error should panic",
		URL:  "/example.SearchService/SearchWithUnexpectedError",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedStatusCode:  500,
		ExpectedJSONResBody: ``,
	},
	{
		Name: "test service wrapped with middleware",
		URL:  "/example.AccountService/GetAccountInfo",
		JSONReqBody: `{
			"id": "user id"
		}`,
		ExpectedStatusCode:  403,
		ExpectedJSONResBody: ``,
	},
	{
		Name: "test service that change headers",
		URL:  "/example.AuthService/Login",
		JSONReqBody: `{
			"username": "felix",
			"password": "p"
		}`,
		ExpectedJSONResBody: emptyJSON,
		ExpectedStatusCode:  200,
		ExpectedHeadersDump: `HTTP/1.1 200 OK
Content-Length: 4
Content-Type: application/json;type=example.LoginResult
Set-Cookie: cookie

`,
	},
}

func TestPassThrough(t *testing.T) {
	ts := tserver()
	defer ts.Close()

	client := http.Client{
		CheckRedirect: func(*http.Request, []*http.Request) error {
			return http.ErrUseLastResponse
		},
	}

	for _, c := range cases {
		fmt.Println("\n\n\n===", c.Name)
		var req io.Reader
		var contentType = "application/json"

		if c.PBReqBody == nil {
			req = bytes.NewBuffer([]byte(c.JSONReqBody))
		} else {
			contentType = ""
			b, err := proto.Marshal(c.PBReqBody)
			if err != nil {
				panic(err)
			}
			req = bytes.NewBuffer(b)
		}

		hreq, err := http.NewRequest("POST", ts.URL+c.URL, req)
		if err != nil {
			panic(err)
		}
		hreq.Header.Set("Content-Type", contentType)
		if len(c.Accept) > 0 {
			hreq.Header.Set("Accept", c.Accept)
		}

		res, err := client.Do(hreq)
		if err != nil {
			panic(err)
		}
		resB, err := ioutil.ReadAll(res.Body)
		if err != nil {
			panic(err)
		}
		if c.ExpectedStatusCode != 0 {
			if c.ExpectedStatusCode != res.StatusCode {
				t.Fatalf("expected status code %d, but was %d", c.ExpectedStatusCode, res.StatusCode)
			}
		}
		if len(c.ExpectedHeadersDump) > 0 {
			hdiff := testingutils.PrettyJsonDiff(c.ExpectedHeadersDump, dumpCleanResponseHeaders(res))
			if len(hdiff) > 0 {
				t.Error(c.Name, hdiff)
			}
		}

		var expected interface{}
		var actual interface{}
		if c.ExpectedPBResBody == nil {
			expected = c.ExpectedJSONResBody
			actual = string(resB)
		} else {
			expected = c.ExpectedPBResBody
			actual = reflect.New(reflect.TypeOf(c.ExpectedPBResBody).Elem()).Interface()
			err = proto.Unmarshal(resB, actual.(proto.Message))
			if err != nil {
				panic(err)
			}
		}

		diff := testingutils.PrettyJsonDiff(expected, actual)
		if len(diff) > 0 {
			t.Error(c.Name, diff)
		}
	}
}

func dumpCleanResponseHeaders(res *http.Response) (r string) {
	res.Header.Del("Date")
	dump, err := httputil.DumpResponse(res, false)
	// fmt.Printf("%#+v", string(dump))
	if err != nil {
		panic(err)
	}
	r = strings.Replace(string(dump), "\r", "", -1)
	return
}

func tserver() *httptest.Server {
	mux := http.NewServeMux()
	l := log.Default()
	example.Mount(mux, l)
	return httptest.NewServer(server.DefaultMiddleware(l)(mux))
}
