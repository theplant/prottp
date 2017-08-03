import * as proto from "./testproto"

const resp = new proto.SearchResponse({ result: [{ url: "url", title: "title", snippets: "snippets" }]})

const mapping = {
        searchAlt: "/altSearch",
        search: "/search"
}

const impl = (mapping: any) => (method: any, requestData: any, callback: any) => {
    console.log("GET", mapping[method.name]);
    console.log("200 OK", proto.SearchRequest.decode(requestData).toJSON())
    callback(null, proto.SearchResponse.encode(resp).finish())
}

const service = new proto.SearchService(impl(mapping))

const request = new proto.SearchRequest({ query: "hello", pageNumber: 1, resultPerPage: 10 })

service.search(request).then(res => console.log("result", res))
service.searchAlt(request).then(res => console.log("result", res))
