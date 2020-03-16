import * as $protobuf from "protobufjs";
/** Namespace example. */
export namespace example {

    /** Properties of a SearchRequest. */
    interface ISearchRequest {

        /** SearchRequest query */
        query?: (string|null);

        /** SearchRequest pageNumber */
        pageNumber?: (number|null);

        /** SearchRequest resultPerPage */
        resultPerPage?: (number|null);
    }

    /** Represents a SearchRequest. */
    class SearchRequest implements ISearchRequest {

        /**
         * Constructs a new SearchRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.ISearchRequest);

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
        public static create(properties?: example.ISearchRequest): example.SearchRequest;

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link example.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link example.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.SearchRequest;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.SearchRequest;

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
        public static fromObject(object: { [k: string]: any }): example.SearchRequest;

        /**
         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
         * @param message SearchRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchResponse. */
    interface ISearchResponse {

        /** SearchResponse result */
        result?: (example.IResult[]|null);
    }

    /** Represents a SearchResponse. */
    class SearchResponse implements ISearchResponse {

        /**
         * Constructs a new SearchResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.ISearchResponse);

        /** SearchResponse result. */
        public result: example.IResult[];

        /**
         * Creates a new SearchResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchResponse instance
         */
        public static create(properties?: example.ISearchResponse): example.SearchResponse;

        /**
         * Encodes the specified SearchResponse message. Does not implicitly {@link example.SearchResponse.verify|verify} messages.
         * @param message SearchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link example.SearchResponse.verify|verify} messages.
         * @param message SearchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.SearchResponse;

        /**
         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.SearchResponse;

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
        public static fromObject(object: { [k: string]: any }): example.SearchResponse;

        /**
         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
         * @param message SearchResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchError. */
    interface ISearchError {

        /** SearchError field */
        field?: (string|null);

        /** SearchError errorCount */
        errorCount?: (number|null);
    }

    /** Represents a SearchError. */
    class SearchError implements ISearchError {

        /**
         * Constructs a new SearchError.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.ISearchError);

        /** SearchError field. */
        public field: string;

        /** SearchError errorCount. */
        public errorCount: number;

        /**
         * Creates a new SearchError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchError instance
         */
        public static create(properties?: example.ISearchError): example.SearchError;

        /**
         * Encodes the specified SearchError message. Does not implicitly {@link example.SearchError.verify|verify} messages.
         * @param message SearchError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.ISearchError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchError message, length delimited. Does not implicitly {@link example.SearchError.verify|verify} messages.
         * @param message SearchError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.ISearchError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.SearchError;

        /**
         * Decodes a SearchError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.SearchError;

        /**
         * Verifies a SearchError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchError
         */
        public static fromObject(object: { [k: string]: any }): example.SearchError;

        /**
         * Creates a plain object from a SearchError message. Also converts values to other types if specified.
         * @param message SearchError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.SearchError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Result. */
    interface IResult {

        /** Result url */
        url?: (string|null);

        /** Result title */
        title?: (string|null);

        /** Result snippets */
        snippets?: (string|null);

        /** Result someSnakedName */
        someSnakedName?: (number|null);
    }

    /** Represents a Result. */
    class Result implements IResult {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.IResult);

        /** Result url. */
        public url: string;

        /** Result title. */
        public title: string;

        /** Result snippets. */
        public snippets: string;

        /** Result someSnakedName. */
        public someSnakedName: number;

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: example.IResult): example.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link example.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link example.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.Result;

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.Result;

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
        public static fromObject(object: { [k: string]: any }): example.Result;

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @param message Result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        public search(request: example.ISearchRequest, callback: example.SearchService.SearchCallback): void;

        /**
         * Calls Search.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public search(request: example.ISearchRequest): Promise<example.SearchResponse>;

        /**
         * Calls SearchAlt.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public searchAlt(request: example.ISearchRequest, callback: example.SearchService.SearchAltCallback): void;

        /**
         * Calls SearchAlt.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public searchAlt(request: example.ISearchRequest): Promise<example.SearchResponse>;

        /**
         * Calls SearchReturnError.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public searchReturnError(request: example.ISearchRequest, callback: example.SearchService.SearchReturnErrorCallback): void;

        /**
         * Calls SearchReturnError.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public searchReturnError(request: example.ISearchRequest): Promise<example.SearchResponse>;

        /**
         * Calls SearchValidateError.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public searchValidateError(request: example.ISearchRequest, callback: example.SearchService.SearchValidateErrorCallback): void;

        /**
         * Calls SearchValidateError.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public searchValidateError(request: example.ISearchRequest): Promise<example.SearchResponse>;

        /**
         * Calls SearchReturnNil.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public searchReturnNil(request: example.ISearchRequest, callback: example.SearchService.SearchReturnNilCallback): void;

        /**
         * Calls SearchReturnNil.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public searchReturnNil(request: example.ISearchRequest): Promise<example.SearchResponse>;

        /**
         * Calls SearchWithUnexpectedError.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchResponse
         */
        public searchWithUnexpectedError(request: example.ISearchRequest, callback: example.SearchService.SearchWithUnexpectedErrorCallback): void;

        /**
         * Calls SearchWithUnexpectedError.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public searchWithUnexpectedError(request: example.ISearchRequest): Promise<example.SearchResponse>;
    }

    namespace SearchService {

        /**
         * Callback as used by {@link example.SearchService#search}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchCallback = (error: (Error|null), response?: example.SearchResponse) => void;

        /**
         * Callback as used by {@link example.SearchService#searchAlt}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchAltCallback = (error: (Error|null), response?: example.SearchResponse) => void;

        /**
         * Callback as used by {@link example.SearchService#searchReturnError}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchReturnErrorCallback = (error: (Error|null), response?: example.SearchResponse) => void;

        /**
         * Callback as used by {@link example.SearchService#searchValidateError}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchValidateErrorCallback = (error: (Error|null), response?: example.SearchResponse) => void;

        /**
         * Callback as used by {@link example.SearchService#searchReturnNil}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchReturnNilCallback = (error: (Error|null), response?: example.SearchResponse) => void;

        /**
         * Callback as used by {@link example.SearchService#searchWithUnexpectedError}.
         * @param error Error, if any
         * @param [response] SearchResponse
         */
        type SearchWithUnexpectedErrorCallback = (error: (Error|null), response?: example.SearchResponse) => void;
    }

    /** Properties of an AccountInfo. */
    interface IAccountInfo {

        /** AccountInfo name */
        name?: (string|null);
    }

    /** Represents an AccountInfo. */
    class AccountInfo implements IAccountInfo {

        /**
         * Constructs a new AccountInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.IAccountInfo);

        /** AccountInfo name. */
        public name: string;

        /**
         * Creates a new AccountInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountInfo instance
         */
        public static create(properties?: example.IAccountInfo): example.AccountInfo;

        /**
         * Encodes the specified AccountInfo message. Does not implicitly {@link example.AccountInfo.verify|verify} messages.
         * @param message AccountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountInfo message, length delimited. Does not implicitly {@link example.AccountInfo.verify|verify} messages.
         * @param message AccountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.AccountInfo;

        /**
         * Decodes an AccountInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.AccountInfo;

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
        public static fromObject(object: { [k: string]: any }): example.AccountInfo;

        /**
         * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
         * @param message AccountInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.AccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountInfoParams. */
    interface IGetAccountInfoParams {

        /** GetAccountInfoParams id */
        id?: (string|null);
    }

    /** Represents a GetAccountInfoParams. */
    class GetAccountInfoParams implements IGetAccountInfoParams {

        /**
         * Constructs a new GetAccountInfoParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.IGetAccountInfoParams);

        /** GetAccountInfoParams id. */
        public id: string;

        /**
         * Creates a new GetAccountInfoParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAccountInfoParams instance
         */
        public static create(properties?: example.IGetAccountInfoParams): example.GetAccountInfoParams;

        /**
         * Encodes the specified GetAccountInfoParams message. Does not implicitly {@link example.GetAccountInfoParams.verify|verify} messages.
         * @param message GetAccountInfoParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.IGetAccountInfoParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAccountInfoParams message, length delimited. Does not implicitly {@link example.GetAccountInfoParams.verify|verify} messages.
         * @param message GetAccountInfoParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.IGetAccountInfoParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAccountInfoParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAccountInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.GetAccountInfoParams;

        /**
         * Decodes a GetAccountInfoParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAccountInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.GetAccountInfoParams;

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
        public static fromObject(object: { [k: string]: any }): example.GetAccountInfoParams;

        /**
         * Creates a plain object from a GetAccountInfoParams message. Also converts values to other types if specified.
         * @param message GetAccountInfoParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.GetAccountInfoParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountInfoParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginParams. */
    interface ILoginParams {

        /** LoginParams username */
        username?: (string|null);

        /** LoginParams password */
        password?: (string|null);
    }

    /** Represents a LoginParams. */
    class LoginParams implements ILoginParams {

        /**
         * Constructs a new LoginParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.ILoginParams);

        /** LoginParams username. */
        public username: string;

        /** LoginParams password. */
        public password: string;

        /**
         * Creates a new LoginParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginParams instance
         */
        public static create(properties?: example.ILoginParams): example.LoginParams;

        /**
         * Encodes the specified LoginParams message. Does not implicitly {@link example.LoginParams.verify|verify} messages.
         * @param message LoginParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.ILoginParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginParams message, length delimited. Does not implicitly {@link example.LoginParams.verify|verify} messages.
         * @param message LoginParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.ILoginParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.LoginParams;

        /**
         * Decodes a LoginParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.LoginParams;

        /**
         * Verifies a LoginParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginParams
         */
        public static fromObject(object: { [k: string]: any }): example.LoginParams;

        /**
         * Creates a plain object from a LoginParams message. Also converts values to other types if specified.
         * @param message LoginParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.LoginParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResult. */
    interface ILoginResult {

        /** LoginResult status */
        status?: (string|null);
    }

    /** Represents a LoginResult. */
    class LoginResult implements ILoginResult {

        /**
         * Constructs a new LoginResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.ILoginResult);

        /** LoginResult status. */
        public status: string;

        /**
         * Creates a new LoginResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResult instance
         */
        public static create(properties?: example.ILoginResult): example.LoginResult;

        /**
         * Encodes the specified LoginResult message. Does not implicitly {@link example.LoginResult.verify|verify} messages.
         * @param message LoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.ILoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResult message, length delimited. Does not implicitly {@link example.LoginResult.verify|verify} messages.
         * @param message LoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.ILoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.LoginResult;

        /**
         * Decodes a LoginResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.LoginResult;

        /**
         * Verifies a LoginResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResult
         */
        public static fromObject(object: { [k: string]: any }): example.LoginResult;

        /**
         * Creates a plain object from a LoginResult message. Also converts values to other types if specified.
         * @param message LoginResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.LoginResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResult to JSON.
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
        public getAccountInfo(request: example.IGetAccountInfoParams, callback: example.AccountService.GetAccountInfoCallback): void;

        /**
         * Calls GetAccountInfo.
         * @param request GetAccountInfoParams message or plain object
         * @returns Promise
         */
        public getAccountInfo(request: example.IGetAccountInfoParams): Promise<example.AccountInfo>;
    }

    namespace AccountService {

        /**
         * Callback as used by {@link example.AccountService#getAccountInfo}.
         * @param error Error, if any
         * @param [response] AccountInfo
         */
        type GetAccountInfoCallback = (error: (Error|null), response?: example.AccountInfo) => void;
    }

    /** Represents an AuthService */
    class AuthService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AuthService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AuthService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AuthService;

        /**
         * Calls Login.
         * @param request LoginParams message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResult
         */
        public login(request: example.ILoginParams, callback: example.AuthService.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginParams message or plain object
         * @returns Promise
         */
        public login(request: example.ILoginParams): Promise<example.LoginResult>;
    }

    namespace AuthService {

        /**
         * Callback as used by {@link example.AuthService#login}.
         * @param error Error, if any
         * @param [response] LoginResult
         */
        type LoginCallback = (error: (Error|null), response?: example.LoginResult) => void;
    }
}
