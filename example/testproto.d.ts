import * as $protobuf from "protobufjs";

/** Namespace main. */
export namespace main {

    /** Properties of a SearchRequest. */
    interface ISearchRequest {

        /** SearchRequest query */
        query?: string;

        /** SearchRequest pageNumber */
        pageNumber?: number;

        /** SearchRequest resultPerPage */
        resultPerPage?: number;
    }

    /** Represents a SearchRequest. */
    class SearchRequest {

        /**
         * Constructs a new SearchRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.ISearchRequest);

        /** SearchRequest query. */
        public query: string;

        /** SearchRequest pageNumber. */
        public pageNumber: number;

        /** SearchRequest resultPerPage. */
        public resultPerPage: number;

        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchRequest instance
         */
        public static create(properties?: main.ISearchRequest): main.SearchRequest;

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link main.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link main.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.SearchRequest;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.SearchRequest;

        /**
         * Verifies a SearchRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchRequest
         */
        public static fromObject(object: { [k: string]: any }): main.SearchRequest;

        /**
         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
         * @param message SearchRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchResponse. */
    interface ISearchResponse {

        /** SearchResponse result */
        result?: main.IResult[];
    }

    /** Represents a SearchResponse. */
    class SearchResponse {

        /**
         * Constructs a new SearchResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.ISearchResponse);

        /** SearchResponse result. */
        public result: main.IResult[];

        /**
         * Creates a new SearchResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchResponse instance
         */
        public static create(properties?: main.ISearchResponse): main.SearchResponse;

        /**
         * Encodes the specified SearchResponse message. Does not implicitly {@link main.SearchResponse.verify|verify} messages.
         * @param message SearchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link main.SearchResponse.verify|verify} messages.
         * @param message SearchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.SearchResponse;

        /**
         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.SearchResponse;

        /**
         * Verifies a SearchResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchResponse
         */
        public static fromObject(object: { [k: string]: any }): main.SearchResponse;

        /**
         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
         * @param message SearchResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Result. */
    interface IResult {

        /** Result url */
        url?: string;

        /** Result title */
        title?: string;

        /** Result snippets */
        snippets?: string;
    }

    /** Represents a Result. */
    class Result {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IResult);

        /** Result url. */
        public url: string;

        /** Result title. */
        public title: string;

        /** Result snippets. */
        public snippets: string;

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: main.IResult): main.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link main.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link main.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.Result;

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.Result;

        /**
         * Verifies a Result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Result
         */
        public static fromObject(object: { [k: string]: any }): main.Result;

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @param message Result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a SearchService */
    class SearchService extends $protobuf.rpc.Service {

        /**
         * Constructs a new SearchService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new SearchService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SearchService;

        /**
         * Calls Search.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public search(request: main.ISearchRequest, callback: main.SearchService.SearchCallback): void;

        /**
         * Calls Search.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public search(request: main.ISearchRequest): Promise<main.SearchResponse>;

        /**
         * Calls SearchAlt.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public searchAlt(request: main.ISearchRequest, callback: main.SearchService.SearchAltCallback): void;

        /**
         * Calls SearchAlt.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public searchAlt(request: main.ISearchRequest): Promise<main.SearchResponse>;
    }

    namespace SearchService {

        /**
         * Callback as used by {@link main.SearchService#search}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchCallback = (error: (Error|null), response?: main.SearchResponse) => void;

        /**
         * Callback as used by {@link main.SearchService#searchAlt}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchAltCallback = (error: (Error|null), response?: main.SearchResponse) => void;
    }

    /** Properties of an AccountInfo. */
    interface IAccountInfo {

        /** AccountInfo name */
        name?: string;
    }

    /** Represents an AccountInfo. */
    class AccountInfo {

        /**
         * Constructs a new AccountInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IAccountInfo);

        /** AccountInfo name. */
        public name: string;

        /**
         * Creates a new AccountInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountInfo instance
         */
        public static create(properties?: main.IAccountInfo): main.AccountInfo;

        /**
         * Encodes the specified AccountInfo message. Does not implicitly {@link main.AccountInfo.verify|verify} messages.
         * @param message AccountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountInfo message, length delimited. Does not implicitly {@link main.AccountInfo.verify|verify} messages.
         * @param message AccountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.AccountInfo;

        /**
         * Decodes an AccountInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.AccountInfo;

        /**
         * Verifies an AccountInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountInfo
         */
        public static fromObject(object: { [k: string]: any }): main.AccountInfo;

        /**
         * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
         * @param message AccountInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.AccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountInfoParams. */
    interface IGetAccountInfoParams {

        /** GetAccountInfoParams id */
        id?: string;
    }

    /** Represents a GetAccountInfoParams. */
    class GetAccountInfoParams {

        /**
         * Constructs a new GetAccountInfoParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IGetAccountInfoParams);

        /** GetAccountInfoParams id. */
        public id: string;

        /**
         * Creates a new GetAccountInfoParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAccountInfoParams instance
         */
        public static create(properties?: main.IGetAccountInfoParams): main.GetAccountInfoParams;

        /**
         * Encodes the specified GetAccountInfoParams message. Does not implicitly {@link main.GetAccountInfoParams.verify|verify} messages.
         * @param message GetAccountInfoParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IGetAccountInfoParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAccountInfoParams message, length delimited. Does not implicitly {@link main.GetAccountInfoParams.verify|verify} messages.
         * @param message GetAccountInfoParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IGetAccountInfoParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAccountInfoParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAccountInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.GetAccountInfoParams;

        /**
         * Decodes a GetAccountInfoParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAccountInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.GetAccountInfoParams;

        /**
         * Verifies a GetAccountInfoParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAccountInfoParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountInfoParams
         */
        public static fromObject(object: { [k: string]: any }): main.GetAccountInfoParams;

        /**
         * Creates a plain object from a GetAccountInfoParams message. Also converts values to other types if specified.
         * @param message GetAccountInfoParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.GetAccountInfoParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountInfoParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an AccountService */
    class AccountService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AccountService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AccountService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AccountService;

        /**
         * Calls GetAccountInfo.
         * @param request GetAccountInfoParams message or plain object
         * @param callback Node-style callback called with the error, if any, and AccountInfo
         */
        public getAccountInfo(request: main.IGetAccountInfoParams, callback: main.AccountService.GetAccountInfoCallback): void;

        /**
         * Calls GetAccountInfo.
         * @param request GetAccountInfoParams message or plain object
         * @returns Promise
         */
        public getAccountInfo(request: main.IGetAccountInfoParams): Promise<main.AccountInfo>;

        /**
         * Calls Search.
         * @param request GetAccountInfoParams message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public search(request: main.IGetAccountInfoParams, callback: main.AccountService.SearchCallback): void;

        /**
         * Calls Search.
         * @param request GetAccountInfoParams message or plain object
         * @returns Promise
         */
        public search(request: main.IGetAccountInfoParams): Promise<main.SearchResponse>;
    }

    namespace AccountService {

        /**
         * Callback as used by {@link main.AccountService#getAccountInfo}.
         * @param error Error, if any
         * @param [response] AccountInfo
         */
        type GetAccountInfoCallback = (error: (Error|null), response?: main.AccountInfo) => void;

        /**
         * Callback as used by {@link main.AccountService#search}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchCallback = (error: (Error|null), response?: main.SearchResponse) => void;
    }
}
