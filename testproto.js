/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const main = $root.main = (() => {

    /**
     * Namespace main.
     * @exports main
     * @namespace
     */
    const main = {};

    main.SearchRequest = (function() {

        /**
         * Properties of a SearchRequest.
         * @memberof main
         * @interface ISearchRequest
         * @property {string} [query] SearchRequest query
         * @property {number} [pageNumber] SearchRequest pageNumber
         * @property {number} [resultPerPage] SearchRequest resultPerPage
         */

        /**
         * Constructs a new SearchRequest.
         * @memberof main
         * @classdesc Represents a SearchRequest.
         * @constructor
         * @param {main.ISearchRequest=} [properties] Properties to set
         */
        function SearchRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchRequest query.
         * @member {string}query
         * @memberof main.SearchRequest
         * @instance
         */
        SearchRequest.prototype.query = "";

        /**
         * SearchRequest pageNumber.
         * @member {number}pageNumber
         * @memberof main.SearchRequest
         * @instance
         */
        SearchRequest.prototype.pageNumber = 0;

        /**
         * SearchRequest resultPerPage.
         * @member {number}resultPerPage
         * @memberof main.SearchRequest
         * @instance
         */
        SearchRequest.prototype.resultPerPage = 0;

        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @function create
         * @memberof main.SearchRequest
         * @static
         * @param {main.ISearchRequest=} [properties] Properties to set
         * @returns {main.SearchRequest} SearchRequest instance
         */
        SearchRequest.create = function create(properties) {
            return new SearchRequest(properties);
        };

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link main.SearchRequest.verify|verify} messages.
         * @function encode
         * @memberof main.SearchRequest
         * @static
         * @param {main.ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.query != null && message.hasOwnProperty("query"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageNumber);
            if (message.resultPerPage != null && message.hasOwnProperty("resultPerPage"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.resultPerPage);
            return writer;
        };

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link main.SearchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.SearchRequest
         * @static
         * @param {main.ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof main.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.SearchRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.query = reader.string();
                    break;
                case 2:
                    message.pageNumber = reader.int32();
                    break;
                case 3:
                    message.resultPerPage = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchRequest message.
         * @function verify
         * @memberof main.SearchRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.query != null && message.hasOwnProperty("query"))
                if (!$util.isString(message.query))
                    return "query: string expected";
            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                if (!$util.isInteger(message.pageNumber))
                    return "pageNumber: integer expected";
            if (message.resultPerPage != null && message.hasOwnProperty("resultPerPage"))
                if (!$util.isInteger(message.resultPerPage))
                    return "resultPerPage: integer expected";
            return null;
        };

        /**
         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.SearchRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.SearchRequest} SearchRequest
         */
        SearchRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.main.SearchRequest)
                return object;
            let message = new $root.main.SearchRequest();
            if (object.query != null)
                message.query = String(object.query);
            if (object.pageNumber != null)
                message.pageNumber = object.pageNumber | 0;
            if (object.resultPerPage != null)
                message.resultPerPage = object.resultPerPage | 0;
            return message;
        };

        /**
         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.SearchRequest
         * @static
         * @param {main.SearchRequest} message SearchRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.query = "";
                object.pageNumber = 0;
                object.resultPerPage = 0;
            }
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = message.query;
            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                object.pageNumber = message.pageNumber;
            if (message.resultPerPage != null && message.hasOwnProperty("resultPerPage"))
                object.resultPerPage = message.resultPerPage;
            return object;
        };

        /**
         * Converts this SearchRequest to JSON.
         * @function toJSON
         * @memberof main.SearchRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchRequest;
    })();

    main.SearchResponse = (function() {

        /**
         * Properties of a SearchResponse.
         * @memberof main
         * @interface ISearchResponse
         * @property {Array.<main.IResult>} [result] SearchResponse result
         */

        /**
         * Constructs a new SearchResponse.
         * @memberof main
         * @classdesc Represents a SearchResponse.
         * @constructor
         * @param {main.ISearchResponse=} [properties] Properties to set
         */
        function SearchResponse(properties) {
            this.result = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchResponse result.
         * @member {Array.<main.IResult>}result
         * @memberof main.SearchResponse
         * @instance
         */
        SearchResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new SearchResponse instance using the specified properties.
         * @function create
         * @memberof main.SearchResponse
         * @static
         * @param {main.ISearchResponse=} [properties] Properties to set
         * @returns {main.SearchResponse} SearchResponse instance
         */
        SearchResponse.create = function create(properties) {
            return new SearchResponse(properties);
        };

        /**
         * Encodes the specified SearchResponse message. Does not implicitly {@link main.SearchResponse.verify|verify} messages.
         * @function encode
         * @memberof main.SearchResponse
         * @static
         * @param {main.ISearchResponse} message SearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.result.length)
                for (let i = 0; i < message.result.length; ++i)
                    $root.main.Result.encode(message.result[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link main.SearchResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.SearchResponse
         * @static
         * @param {main.ISearchResponse} message SearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchResponse message from the specified reader or buffer.
         * @function decode
         * @memberof main.SearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.SearchResponse} SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.SearchResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.main.Result.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.SearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.SearchResponse} SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchResponse message.
         * @function verify
         * @memberof main.SearchResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (let i = 0; i < message.result.length; ++i) {
                    let error = $root.main.Result.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.SearchResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.SearchResponse} SearchResponse
         */
        SearchResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.main.SearchResponse)
                return object;
            let message = new $root.main.SearchResponse();
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".main.SearchResponse.result: array expected");
                message.result = [];
                for (let i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".main.SearchResponse.result: object expected");
                    message.result[i] = $root.main.Result.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.SearchResponse
         * @static
         * @param {main.SearchResponse} message SearchResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (message.result && message.result.length) {
                object.result = [];
                for (let j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.main.Result.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this SearchResponse to JSON.
         * @function toJSON
         * @memberof main.SearchResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchResponse;
    })();

    main.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof main
         * @interface IResult
         * @property {string} [url] Result url
         * @property {string} [title] Result title
         * @property {string} [snippets] Result snippets
         */

        /**
         * Constructs a new Result.
         * @memberof main
         * @classdesc Represents a Result.
         * @constructor
         * @param {main.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result url.
         * @member {string}url
         * @memberof main.Result
         * @instance
         */
        Result.prototype.url = "";

        /**
         * Result title.
         * @member {string}title
         * @memberof main.Result
         * @instance
         */
        Result.prototype.title = "";

        /**
         * Result snippets.
         * @member {string}snippets
         * @memberof main.Result
         * @instance
         */
        Result.prototype.snippets = "";

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof main.Result
         * @static
         * @param {main.IResult=} [properties] Properties to set
         * @returns {main.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link main.Result.verify|verify} messages.
         * @function encode
         * @memberof main.Result
         * @static
         * @param {main.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && message.hasOwnProperty("url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.snippets != null && message.hasOwnProperty("snippets"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.snippets);
            return writer;
        };

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link main.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.Result
         * @static
         * @param {main.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof main.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Result();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.snippets = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Result message.
         * @function verify
         * @memberof main.Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.snippets != null && message.hasOwnProperty("snippets"))
                if (!$util.isString(message.snippets))
                    return "snippets: string expected";
            return null;
        };

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.main.Result)
                return object;
            let message = new $root.main.Result();
            if (object.url != null)
                message.url = String(object.url);
            if (object.title != null)
                message.title = String(object.title);
            if (object.snippets != null)
                message.snippets = String(object.snippets);
            return message;
        };

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.Result
         * @static
         * @param {main.Result} message Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.url = "";
                object.title = "";
                object.snippets = "";
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.snippets != null && message.hasOwnProperty("snippets"))
                object.snippets = message.snippets;
            return object;
        };

        /**
         * Converts this Result to JSON.
         * @function toJSON
         * @memberof main.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Result;
    })();

    main.SearchService = (function() {

        /**
         * Constructs a new SearchService service.
         * @memberof main
         * @classdesc Represents a SearchService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SearchService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SearchService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SearchService;

        /**
         * Creates new SearchService service using the specified rpc implementation.
         * @function create
         * @memberof main.SearchService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SearchService} RPC service. Useful where requests and/or responses are streamed.
         */
        SearchService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link main.SearchService#search}.
         * @memberof main.SearchService
         * @typedef SearchCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {main.SearchResponse} [response] SearchResponse
         */

        /**
         * Calls Search.
         * @function .search
         * @memberof main.SearchService
         * @instance
         * @param {main.ISearchRequest} request SearchRequest message or plain object
         * @param {main.SearchService.SearchCallback} callback Node-style callback called with the error, if any, and SearchResponse
         * @returns {undefined}
         * @variation 1
         */
        SearchService.prototype.search = function search(request, callback) {
            return this.rpcCall(search, $root.main.SearchRequest, $root.main.SearchResponse, request, callback);
        };

        /**
         * Calls Search.
         * @function search
         * @memberof main.SearchService
         * @instance
         * @param {main.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<main.SearchResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link main.SearchService#searchAlt}.
         * @memberof main.SearchService
         * @typedef SearchAltCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {main.SearchResponse} [response] SearchResponse
         */

        /**
         * Calls SearchAlt.
         * @function .searchAlt
         * @memberof main.SearchService
         * @instance
         * @param {main.ISearchRequest} request SearchRequest message or plain object
         * @param {main.SearchService.SearchAltCallback} callback Node-style callback called with the error, if any, and SearchResponse
         * @returns {undefined}
         * @variation 1
         */
        SearchService.prototype.searchAlt = function searchAlt(request, callback) {
            return this.rpcCall(searchAlt, $root.main.SearchRequest, $root.main.SearchResponse, request, callback);
        };

        /**
         * Calls SearchAlt.
         * @function searchAlt
         * @memberof main.SearchService
         * @instance
         * @param {main.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<main.SearchResponse>} Promise
         * @variation 2
         */

        return SearchService;
    })();

    return main;
})();

export { $root as default };
