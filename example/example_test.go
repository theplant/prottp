package example_test

import (
	"bytes"
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"reflect"
	"testing"

	proto "github.com/golang/protobuf/proto"
	"github.com/theplant/appkit/log"
	"github.com/theplant/appkit/server"
	"github.com/theplant/testingutils"

	"github.com/theplant/prottp/example"
)

var cases = []struct {
	Name                        string
	URL                         string
	JSONReqBody                 string
	ExpectedJSONResBody         string
	PBReqBody                   proto.Message
	ExpectedPBResBody           proto.Message
	ExpectedStatusCode          int
	ExpectedExpectedContentType string
}{
	{
		Name: "test json 1",
		URL:  "/example.SearchService/Search",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedJSONResBody: `
{
	"result": [
		{
			"url": "query string",
			"some_snaked_name": 2
		}
	]
}`,
		ExpectedExpectedContentType: "application/json",
	},

	{
		Name: "test protobuf 1",
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
	},

	{
		Name: "test json error 1",
		URL:  "/example.SearchService/SearchReturnError",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedStatusCode: 500,
		ExpectedJSONResBody: `
{
	"field": "field123",
	"error_count": 100
}`,
	},
	{
		Name: "test json error invalid",
		URL:  "/example.SearchService/SearchReturnError",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10]
		}`,
		ExpectedStatusCode:  400,
		ExpectedJSONResBody: ``,
	},
	{
		Name: "test response nil",
		URL:  "/example.SearchService/SearchReturnNil",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedStatusCode:  204,
		ExpectedJSONResBody: ``,
	},

	{
		Name: "test protobuf error 1",
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
		Name: "test unexpected error",
		URL:  "/example.SearchService/SearchWithUnexpectedError",
		JSONReqBody: `{
			"query": "query string",
			"page_number": 1,
			"result_per_page": 10
		}`,
		ExpectedStatusCode:  500,
		ExpectedJSONResBody: ``,
	},
}

func TestPassThrough(t *testing.T) {
	ts := tserver()
	defer ts.Close()

	for _, c := range cases {
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

		res, err := http.Post(ts.URL+c.URL, contentType, req)
		if err != nil {
			panic(err)
		}
		resB, err := ioutil.ReadAll(res.Body)
		if err != nil {
			panic(err)
		}
		if c.ExpectedStatusCode != 0 {
			if c.ExpectedStatusCode != res.StatusCode {
				t.Errorf("expected status code %d, but was %d", c.ExpectedStatusCode, res.StatusCode)
			}
		}
		if len(c.ExpectedExpectedContentType) > 0 {
			if c.ExpectedExpectedContentType != res.Header.Get("Content-Type") {
				t.Errorf("expected content type %s, but was %s", c.ExpectedExpectedContentType, res.Header.Get("Content-Type"))
			}
		}

		var expected interface{}
		var actual interface{}
		if c.PBReqBody == nil {
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

func tserver() *httptest.Server {
	mux := http.NewServeMux()
	example.Mount(mux)
	return httptest.NewServer(server.DefaultMiddleware(log.Default())(mux))
}
