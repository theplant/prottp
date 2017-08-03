import * as $protobuf from "protobufjs";

/** Properties of a SearchRequest. */
export interface ISearchRequest {

    /** SearchRequest query */
    query?: string;

    /** SearchRequest pageNumber */
    pageNumber?: number;

    /** SearchRequest resultPerPage */
    resultPerPage?: number;
}

/** Represents a SearchRequest. */
export class SearchRequest {

    /**
     * Constructs a new SearchRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchRequest);

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
    public static create(properties?: ISearchRequest): SearchRequest;

    /**
     * Encodes the specified SearchRequest message. Does not implicitly {@link SearchRequest.verify|verify} messages.
     * @param message SearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link SearchRequest.verify|verify} messages.
     * @param message SearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchRequest;

    /**
     * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchRequest;

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
    public static fromObject(object: { [k: string]: any }): SearchRequest;

    /**
     * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
     * @param message SearchRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SearchResponse. */
export interface ISearchResponse {

    /** SearchResponse result */
    result?: IResult[];
}

/** Represents a SearchResponse. */
export class SearchResponse {

    /**
     * Constructs a new SearchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchResponse);

    /** SearchResponse result. */
    public result: IResult[];

    /**
     * Creates a new SearchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchResponse instance
     */
    public static create(properties?: ISearchResponse): SearchResponse;

    /**
     * Encodes the specified SearchResponse message. Does not implicitly {@link SearchResponse.verify|verify} messages.
     * @param message SearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link SearchResponse.verify|verify} messages.
     * @param message SearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse;

    /**
     * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse;

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
    public static fromObject(object: { [k: string]: any }): SearchResponse;

    /**
     * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
     * @param message SearchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Result. */
export interface IResult {

    /** Result url */
    url?: string;

    /** Result title */
    title?: string;

    /** Result snippets */
    snippets?: string;
}

/** Represents a Result. */
export class Result {

    /**
     * Constructs a new Result.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResult);

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
    public static create(properties?: IResult): Result;

    /**
     * Encodes the specified Result message. Does not implicitly {@link Result.verify|verify} messages.
     * @param message Result message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Result message, length delimited. Does not implicitly {@link Result.verify|verify} messages.
     * @param message Result message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Result message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Result;

    /**
     * Decodes a Result message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Result;

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
    public static fromObject(object: { [k: string]: any }): Result;

    /**
     * Creates a plain object from a Result message. Also converts values to other types if specified.
     * @param message Result
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Result to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SearchService */
export class SearchService extends $protobuf.rpc.Service {

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
    public search(request: ISearchRequest, callback: SearchService.SearchCallback): void;

    /**
     * Calls Search.
     * @param request SearchRequest message or plain object
     * @returns Promise
     */
    public search(request: ISearchRequest): Promise<SearchResponse>;

    /**
     * Calls SearchAlt.
     * @param request SearchRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and SearchResponse
     */
    public searchAlt(request: ISearchRequest, callback: SearchService.SearchAltCallback): void;

    /**
     * Calls SearchAlt.
     * @param request SearchRequest message or plain object
     * @returns Promise
     */
    public searchAlt(request: ISearchRequest): Promise<SearchResponse>;
}

export namespace SearchService {

    /**
     * Callback as used by {@link SearchService#search}.
     * @param error Error, if any
     * @param [response] SearchResponse
     */
    type SearchCallback = (error: (Error|null), response?: SearchResponse) => void;

    /**
     * Callback as used by {@link SearchService#searchAlt}.
     * @param error Error, if any
     * @param [response] SearchResponse
     */
    type SearchAltCallback = (error: (Error|null), response?: SearchResponse) => void;
}
