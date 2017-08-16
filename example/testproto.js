/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const example = $root.example = (() => {

    /**
     * Namespace example.
     * @exports example
     * @namespace
     */
    const example = {};

    example.SearchRequest = (function() {

        /**
         * Properties of a SearchRequest.
         * @memberof example
         * @interface ISearchRequest
         * @property {string} [query] SearchRequest query
         * @property {number} [pageNumber] SearchRequest pageNumber
         * @property {number} [resultPerPage] SearchRequest resultPerPage
         */

        /**
         * Constructs a new SearchRequest.
         * @memberof example
         * @classdesc Represents a SearchRequest.
         * @constructor
         * @param {example.ISearchRequest=} [properties] Properties to set
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
         * @memberof example.SearchRequest
         * @instance
         */
        SearchRequest.prototype.query = "";

        /**
         * SearchRequest pageNumber.
         * @member {number}pageNumber
         * @memberof example.SearchRequest
         * @instance
         */
        SearchRequest.prototype.pageNumber = 0;

        /**
         * SearchRequest resultPerPage.
         * @member {number}resultPerPage
         * @memberof example.SearchRequest
         * @instance
         */
        SearchRequest.prototype.resultPerPage = 0;

        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @function create
         * @memberof example.SearchRequest
         * @static
         * @param {example.ISearchRequest=} [properties] Properties to set
         * @returns {example.SearchRequest} SearchRequest instance
         */
        SearchRequest.create = function create(properties) {
            return new SearchRequest(properties);
        };

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link example.SearchRequest.verify|verify} messages.
         * @function encode
         * @memberof example.SearchRequest
         * @static
         * @param {example.ISearchRequest} message SearchRequest message or plain object to encode
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
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link example.SearchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.SearchRequest
         * @static
         * @param {example.ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof example.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.SearchRequest();
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
         * @memberof example.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.SearchRequest} SearchRequest
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
         * @memberof example.SearchRequest
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
         * @memberof example.SearchRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.SearchRequest} SearchRequest
         */
        SearchRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.example.SearchRequest)
                return object;
            let message = new $root.example.SearchRequest();
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
         * @memberof example.SearchRequest
         * @static
         * @param {example.SearchRequest} message SearchRequest
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
         * @memberof example.SearchRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchRequest;
    })();

    example.SearchResponse = (function() {

        /**
         * Properties of a SearchResponse.
         * @memberof example
         * @interface ISearchResponse
         * @property {Array.<example.IResult>} [result] SearchResponse result
         */

        /**
         * Constructs a new SearchResponse.
         * @memberof example
         * @classdesc Represents a SearchResponse.
         * @constructor
         * @param {example.ISearchResponse=} [properties] Properties to set
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
         * @member {Array.<example.IResult>}result
         * @memberof example.SearchResponse
         * @instance
         */
        SearchResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new SearchResponse instance using the specified properties.
         * @function create
         * @memberof example.SearchResponse
         * @static
         * @param {example.ISearchResponse=} [properties] Properties to set
         * @returns {example.SearchResponse} SearchResponse instance
         */
        SearchResponse.create = function create(properties) {
            return new SearchResponse(properties);
        };

        /**
         * Encodes the specified SearchResponse message. Does not implicitly {@link example.SearchResponse.verify|verify} messages.
         * @function encode
         * @memberof example.SearchResponse
         * @static
         * @param {example.ISearchResponse} message SearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.result.length)
                for (let i = 0; i < message.result.length; ++i)
                    $root.example.Result.encode(message.result[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link example.SearchResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.SearchResponse
         * @static
         * @param {example.ISearchResponse} message SearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchResponse message from the specified reader or buffer.
         * @function decode
         * @memberof example.SearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.SearchResponse} SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.SearchResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.example.Result.decode(reader, reader.uint32()));
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
         * @memberof example.SearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.SearchResponse} SearchResponse
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
         * @memberof example.SearchResponse
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
                    let error = $root.example.Result.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.SearchResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.SearchResponse} SearchResponse
         */
        SearchResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.example.SearchResponse)
                return object;
            let message = new $root.example.SearchResponse();
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".example.SearchResponse.result: array expected");
                message.result = [];
                for (let i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".example.SearchResponse.result: object expected");
                    message.result[i] = $root.example.Result.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.SearchResponse
         * @static
         * @param {example.SearchResponse} message SearchResponse
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
                    object.result[j] = $root.example.Result.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this SearchResponse to JSON.
         * @function toJSON
         * @memberof example.SearchResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchResponse;
    })();

    example.SearchError = (function() {

        /**
         * Properties of a SearchError.
         * @memberof example
         * @interface ISearchError
         * @property {string} [field] SearchError field
         * @property {number} [errorCount] SearchError errorCount
         */

        /**
         * Constructs a new SearchError.
         * @memberof example
         * @classdesc Represents a SearchError.
         * @constructor
         * @param {example.ISearchError=} [properties] Properties to set
         */
        function SearchError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchError field.
         * @member {string}field
         * @memberof example.SearchError
         * @instance
         */
        SearchError.prototype.field = "";

        /**
         * SearchError errorCount.
         * @member {number}errorCount
         * @memberof example.SearchError
         * @instance
         */
        SearchError.prototype.errorCount = 0;

        /**
         * Creates a new SearchError instance using the specified properties.
         * @function create
         * @memberof example.SearchError
         * @static
         * @param {example.ISearchError=} [properties] Properties to set
         * @returns {example.SearchError} SearchError instance
         */
        SearchError.create = function create(properties) {
            return new SearchError(properties);
        };

        /**
         * Encodes the specified SearchError message. Does not implicitly {@link example.SearchError.verify|verify} messages.
         * @function encode
         * @memberof example.SearchError
         * @static
         * @param {example.ISearchError} message SearchError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field != null && message.hasOwnProperty("field"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.field);
            if (message.errorCount != null && message.hasOwnProperty("errorCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCount);
            return writer;
        };

        /**
         * Encodes the specified SearchError message, length delimited. Does not implicitly {@link example.SearchError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.SearchError
         * @static
         * @param {example.ISearchError} message SearchError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchError message from the specified reader or buffer.
         * @function decode
         * @memberof example.SearchError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.SearchError} SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.SearchError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.field = reader.string();
                    break;
                case 2:
                    message.errorCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.SearchError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.SearchError} SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchError message.
         * @function verify
         * @memberof example.SearchError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field != null && message.hasOwnProperty("field"))
                if (!$util.isString(message.field))
                    return "field: string expected";
            if (message.errorCount != null && message.hasOwnProperty("errorCount"))
                if (!$util.isInteger(message.errorCount))
                    return "errorCount: integer expected";
            return null;
        };

        /**
         * Creates a SearchError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.SearchError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.SearchError} SearchError
         */
        SearchError.fromObject = function fromObject(object) {
            if (object instanceof $root.example.SearchError)
                return object;
            let message = new $root.example.SearchError();
            if (object.field != null)
                message.field = String(object.field);
            if (object.errorCount != null)
                message.errorCount = object.errorCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a SearchError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.SearchError
         * @static
         * @param {example.SearchError} message SearchError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.field = "";
                object.errorCount = 0;
            }
            if (message.field != null && message.hasOwnProperty("field"))
                object.field = message.field;
            if (message.errorCount != null && message.hasOwnProperty("errorCount"))
                object.errorCount = message.errorCount;
            return object;
        };

        /**
         * Converts this SearchError to JSON.
         * @function toJSON
         * @memberof example.SearchError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchError;
    })();

    example.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof example
         * @interface IResult
         * @property {string} [url] Result url
         * @property {string} [title] Result title
         * @property {string} [snippets] Result snippets
         */

        /**
         * Constructs a new Result.
         * @memberof example
         * @classdesc Represents a Result.
         * @constructor
         * @param {example.IResult=} [properties] Properties to set
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
         * @memberof example.Result
         * @instance
         */
        Result.prototype.url = "";

        /**
         * Result title.
         * @member {string}title
         * @memberof example.Result
         * @instance
         */
        Result.prototype.title = "";

        /**
         * Result snippets.
         * @member {string}snippets
         * @memberof example.Result
         * @instance
         */
        Result.prototype.snippets = "";

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof example.Result
         * @static
         * @param {example.IResult=} [properties] Properties to set
         * @returns {example.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link example.Result.verify|verify} messages.
         * @function encode
         * @memberof example.Result
         * @static
         * @param {example.IResult} message Result message or plain object to encode
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
         * Encodes the specified Result message, length delimited. Does not implicitly {@link example.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.Result
         * @static
         * @param {example.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof example.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.Result();
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
         * @memberof example.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.Result} Result
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
         * @memberof example.Result
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
         * @memberof example.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.example.Result)
                return object;
            let message = new $root.example.Result();
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
         * @memberof example.Result
         * @static
         * @param {example.Result} message Result
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
         * @memberof example.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Result;
    })();

    example.SearchService = (function() {

        /**
         * Constructs a new SearchService service.
         * @memberof example
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
         * @memberof example.SearchService
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
         * Callback as used by {@link example.SearchService#search}.
         * @memberof example.SearchService
         * @typedef SearchCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {example.SearchResponse} [response] SearchResponse
         */

        /**
         * Calls Search.
         * @function .search
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @param {example.SearchService.SearchCallback} callback Node-style callback called with the error, if any, and SearchResponse
         * @returns {undefined}
         * @variation 1
         */
        SearchService.prototype.search = function search(request, callback) {
            return this.rpcCall(search, $root.example.SearchRequest, $root.example.SearchResponse, request, callback);
        };

        /**
         * Calls Search.
         * @function search
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<example.SearchResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link example.SearchService#searchAlt}.
         * @memberof example.SearchService
         * @typedef SearchAltCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {example.SearchResponse} [response] SearchResponse
         */

        /**
         * Calls SearchAlt.
         * @function .searchAlt
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @param {example.SearchService.SearchAltCallback} callback Node-style callback called with the error, if any, and SearchResponse
         * @returns {undefined}
         * @variation 1
         */
        SearchService.prototype.searchAlt = function searchAlt(request, callback) {
            return this.rpcCall(searchAlt, $root.example.SearchRequest, $root.example.SearchResponse, request, callback);
        };

        /**
         * Calls SearchAlt.
         * @function searchAlt
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<example.SearchResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link example.SearchService#searchReturnError}.
         * @memberof example.SearchService
         * @typedef SearchReturnErrorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {example.SearchResponse} [response] SearchResponse
         */

        /**
         * Calls SearchReturnError.
         * @function .searchReturnError
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @param {example.SearchService.SearchReturnErrorCallback} callback Node-style callback called with the error, if any, and SearchResponse
         * @returns {undefined}
         * @variation 1
         */
        SearchService.prototype.searchReturnError = function searchReturnError(request, callback) {
            return this.rpcCall(searchReturnError, $root.example.SearchRequest, $root.example.SearchResponse, request, callback);
        };

        /**
         * Calls SearchReturnError.
         * @function searchReturnError
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<example.SearchResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link example.SearchService#searchWithUnexpectedError}.
         * @memberof example.SearchService
         * @typedef SearchWithUnexpectedErrorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {example.SearchResponse} [response] SearchResponse
         */

        /**
         * Calls SearchWithUnexpectedError.
         * @function .searchWithUnexpectedError
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @param {example.SearchService.SearchWithUnexpectedErrorCallback} callback Node-style callback called with the error, if any, and SearchResponse
         * @returns {undefined}
         * @variation 1
         */
        SearchService.prototype.searchWithUnexpectedError = function searchWithUnexpectedError(request, callback) {
            return this.rpcCall(searchWithUnexpectedError, $root.example.SearchRequest, $root.example.SearchResponse, request, callback);
        };

        /**
         * Calls SearchWithUnexpectedError.
         * @function searchWithUnexpectedError
         * @memberof example.SearchService
         * @instance
         * @param {example.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<example.SearchResponse>} Promise
         * @variation 2
         */

        return SearchService;
    })();

    example.AccountInfo = (function() {

        /**
         * Properties of an AccountInfo.
         * @memberof example
         * @interface IAccountInfo
         * @property {string} [name] AccountInfo name
         */

        /**
         * Constructs a new AccountInfo.
         * @memberof example
         * @classdesc Represents an AccountInfo.
         * @constructor
         * @param {example.IAccountInfo=} [properties] Properties to set
         */
        function AccountInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountInfo name.
         * @member {string}name
         * @memberof example.AccountInfo
         * @instance
         */
        AccountInfo.prototype.name = "";

        /**
         * Creates a new AccountInfo instance using the specified properties.
         * @function create
         * @memberof example.AccountInfo
         * @static
         * @param {example.IAccountInfo=} [properties] Properties to set
         * @returns {example.AccountInfo} AccountInfo instance
         */
        AccountInfo.create = function create(properties) {
            return new AccountInfo(properties);
        };

        /**
         * Encodes the specified AccountInfo message. Does not implicitly {@link example.AccountInfo.verify|verify} messages.
         * @function encode
         * @memberof example.AccountInfo
         * @static
         * @param {example.IAccountInfo} message AccountInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified AccountInfo message, length delimited. Does not implicitly {@link example.AccountInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.AccountInfo
         * @static
         * @param {example.IAccountInfo} message AccountInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountInfo message from the specified reader or buffer.
         * @function decode
         * @memberof example.AccountInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.AccountInfo} AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.AccountInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.AccountInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.AccountInfo} AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountInfo message.
         * @function verify
         * @memberof example.AccountInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.AccountInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.AccountInfo} AccountInfo
         */
        AccountInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.example.AccountInfo)
                return object;
            let message = new $root.example.AccountInfo();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.AccountInfo
         * @static
         * @param {example.AccountInfo} message AccountInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this AccountInfo to JSON.
         * @function toJSON
         * @memberof example.AccountInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountInfo;
    })();

    example.GetAccountInfoParams = (function() {

        /**
         * Properties of a GetAccountInfoParams.
         * @memberof example
         * @interface IGetAccountInfoParams
         * @property {string} [id] GetAccountInfoParams id
         */

        /**
         * Constructs a new GetAccountInfoParams.
         * @memberof example
         * @classdesc Represents a GetAccountInfoParams.
         * @constructor
         * @param {example.IGetAccountInfoParams=} [properties] Properties to set
         */
        function GetAccountInfoParams(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountInfoParams id.
         * @member {string}id
         * @memberof example.GetAccountInfoParams
         * @instance
         */
        GetAccountInfoParams.prototype.id = "";

        /**
         * Creates a new GetAccountInfoParams instance using the specified properties.
         * @function create
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {example.IGetAccountInfoParams=} [properties] Properties to set
         * @returns {example.GetAccountInfoParams} GetAccountInfoParams instance
         */
        GetAccountInfoParams.create = function create(properties) {
            return new GetAccountInfoParams(properties);
        };

        /**
         * Encodes the specified GetAccountInfoParams message. Does not implicitly {@link example.GetAccountInfoParams.verify|verify} messages.
         * @function encode
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {example.IGetAccountInfoParams} message GetAccountInfoParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountInfoParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified GetAccountInfoParams message, length delimited. Does not implicitly {@link example.GetAccountInfoParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {example.IGetAccountInfoParams} message GetAccountInfoParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountInfoParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAccountInfoParams message from the specified reader or buffer.
         * @function decode
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.GetAccountInfoParams} GetAccountInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountInfoParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.GetAccountInfoParams();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAccountInfoParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.GetAccountInfoParams} GetAccountInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountInfoParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAccountInfoParams message.
         * @function verify
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAccountInfoParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a GetAccountInfoParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.GetAccountInfoParams} GetAccountInfoParams
         */
        GetAccountInfoParams.fromObject = function fromObject(object) {
            if (object instanceof $root.example.GetAccountInfoParams)
                return object;
            let message = new $root.example.GetAccountInfoParams();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetAccountInfoParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.GetAccountInfoParams
         * @static
         * @param {example.GetAccountInfoParams} message GetAccountInfoParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountInfoParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetAccountInfoParams to JSON.
         * @function toJSON
         * @memberof example.GetAccountInfoParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountInfoParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountInfoParams;
    })();

    example.AccountService = (function() {

        /**
         * Constructs a new AccountService service.
         * @memberof example
         * @classdesc Represents an AccountService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AccountService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AccountService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccountService;

        /**
         * Creates new AccountService service using the specified rpc implementation.
         * @function create
         * @memberof example.AccountService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AccountService} RPC service. Useful where requests and/or responses are streamed.
         */
        AccountService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link example.AccountService#getAccountInfo}.
         * @memberof example.AccountService
         * @typedef GetAccountInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {example.AccountInfo} [response] AccountInfo
         */

        /**
         * Calls GetAccountInfo.
         * @function .getAccountInfo
         * @memberof example.AccountService
         * @instance
         * @param {example.IGetAccountInfoParams} request GetAccountInfoParams message or plain object
         * @param {example.AccountService.GetAccountInfoCallback} callback Node-style callback called with the error, if any, and AccountInfo
         * @returns {undefined}
         * @variation 1
         */
        AccountService.prototype.getAccountInfo = function getAccountInfo(request, callback) {
            return this.rpcCall(getAccountInfo, $root.example.GetAccountInfoParams, $root.example.AccountInfo, request, callback);
        };

        /**
         * Calls GetAccountInfo.
         * @function getAccountInfo
         * @memberof example.AccountService
         * @instance
         * @param {example.IGetAccountInfoParams} request GetAccountInfoParams message or plain object
         * @returns {Promise<example.AccountInfo>} Promise
         * @variation 2
         */

        return AccountService;
    })();

    return example;
})();

export { $root as default };
