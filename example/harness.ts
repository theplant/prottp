import { main } from "./testproto";
import fetch from "node-fetch";
import UrlMapper from "./urlmapper";

var mapping = new UrlMapper(main, "main");

const impl = (mapping: UrlMapper) => (
  method: any,
  requestData: any,
  callback: any
) => {
  console.log("calling url: ", mapping.urlOf(method));

  fetch(`http://localhost:8080${mapping.urlOf(method)}`, {
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
  .searchAlt(request)
  .then(res => console.log("/main.SearchService/SearchAlt result", res))
  .catch(err => console.log("ERROR", err));

service
  .search(request)
  .then(res => console.log("/main.SearchService/Search result", res))
  .catch(err => console.log("ERROR", err));

const account = new main.AccountService(impl(mapping));

const accountParams = new main.GetAccountInfoParams();

account
  .search(accountParams)
  .then(res => console.log("/main.AccountService/Search result", res))
  .catch(err => console.log("ERROR", err));
