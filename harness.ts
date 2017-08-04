import { main } from "./testproto";
import fetch from "node-fetch";

const mapping = {
  searchAlt: "/main.SearchService/SearchAlt",
  search: "/main.SearchService/Search"
};

const impl = (mapping: any) => (
  method: any,
  requestData: any,
  callback: any
) => {
  fetch(`http://localhost:8080${mapping[method.name]}`, {
    method: "POST",
    body: requestData
  })
    .then(response => response.buffer())
    .then(text => callback(null, text))
    .catch(err => callback(err, null));
};

const service = new main.SearchService(impl(mapping));

const request = new main.SearchRequest({
  query: "123",
  pageNumber: 1,
  resultPerPage: 10
});

service
  .search(request)
  .then(res => console.log("/Search result", res))
  .catch(err => console.log("ERROR", err));

service
  .searchAlt(request)
  .then(res => console.log("/SearchAlt result", res))
  .catch(err => console.log("ERROR", err));
