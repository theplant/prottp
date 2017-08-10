const ignoreMethods = ["constructor", "on", "off", "rpcCall", "end", "emit"];

export default class UrlMapper {
  cache: {};
  namespaceObject: any;
  namespace: string;

  constructor(namespaceObject: any, namespace: string) {
    this.namespaceObject = namespaceObject;
    this.namespace = namespace;
    this.refreshCache(namespaceObject, namespace);
  }

  refreshCache(namespaceObject: any, namespace: string) {
    var ns = namespaceObject;

    var newcache = {};

    for (let service in ns) {
      if (ns[service].prototype.toJSON) {
        continue;
      }

      var sproto = ns[service].prototype;
      for (let method in sproto) {
        if (ignoreMethods.indexOf(method) >= 0) {
          continue;
        }
        var methodObject = sproto[method].toString();
        var theUrl =
          "/" +
          namespace +
          "." +
          service +
          "/" +
          method.substring(0, 1).toUpperCase() +
          method.substring(1);
        if ((<any>newcache)[methodObject]) {
          throw new Error(
            "duplicated key for url: " + theUrl + ", key = " + methodObject
          );
        }
        (<any>newcache)[methodObject] = theUrl;
      }
    }

    for (let k in newcache) {
      console.log("UrlMapper mapped: ", (<any>newcache)[k]);
    }

    this.cache = newcache;
  }

  urlOf(methodObject: any): string {
    return (<any>this.cache)[methodObject.toString()] as string;
  }
}
