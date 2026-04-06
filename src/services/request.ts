const BASE_URL = "https://kuzbasshammer.ru:35000/WarhammerKemerovo";

declare const __TOKEN__: string | undefined;

type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

type QueryValue = string | number | boolean | null | undefined;

type QueryParams = Record<string, QueryValue>;

export type RequestOptions = Omit<RequestInit, "body" | "method"> & {
  params?: QueryParams;
  body?: unknown;
};

export class RequestError extends Error {
  status: number;
  data: unknown;

  constructor(status: number, message: string, data: unknown) {
    super(message);
    this.name = "RequestError";
    this.status = status;
    this.data = data;
  }
}

const buildUrl = (path: string, params?: QueryParams) => {
  const url = new URL(path.replace(/^\//, ""), `${BASE_URL}/`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
};

const parseResponse = async <T>(response: Response): Promise<T> => {
  if (response.status === 204) {
    return undefined as T;
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return response.json() as Promise<T>;
  }

  return response.text() as Promise<T>;
};

const resolveAuthorization = () => {
  if (!__TOKEN__) {
    return null;
  }

  return __TOKEN__.startsWith("Basic ") ? __TOKEN__ : `Basic ${__TOKEN__}`;
};

const sendRequest = async <T>(
  path: string,
  method: HttpMethod,
  options: RequestOptions = {},
): Promise<T> => {
  const { params, body, headers, ...rest } = options;

  const resolvedHeaders = new Headers(headers);

  const authorization = resolveAuthorization();
  if (authorization && !resolvedHeaders.has("Authorization")) {
    resolvedHeaders.set("Authorization", authorization);
  }

  const init: RequestInit = {
    ...rest,
    method,
    headers: resolvedHeaders,
  };

  if (body !== undefined) {
    if (
      body instanceof FormData ||
      body instanceof Blob ||
      body instanceof ArrayBuffer ||
      ArrayBuffer.isView(body) ||
      body instanceof URLSearchParams
    ) {
      init.body = body as BodyInit;
    } else {
      if (!resolvedHeaders.has("Content-Type")) {
        resolvedHeaders.set("Content-Type", "application/json");
      }

      init.body = JSON.stringify(body);
    }
  }

  const response = await fetch(buildUrl(path, params), init);

  if (!response.ok) {
    let data: unknown = null;

    try {
      data = await parseResponse<unknown>(response);
    } catch {
      data = null;
    }

    throw new RequestError(
      response.status,
      response.statusText || "Request failed",
      data,
    );
  }

  return parseResponse<T>(response);
};

const createMethod =
  (method: HttpMethod) =>
  <T>(path: string, options?: RequestOptions) =>
    sendRequest<T>(path, method, options);

export const request = {
  request: sendRequest,
  get: createMethod("GET"),
  post: createMethod("POST"),
  put: createMethod("PUT"),
  patch: createMethod("PATCH"),
  delete: createMethod("DELETE"),
  head: createMethod("HEAD"),
  options: createMethod("OPTIONS"),
};

export const { get, post, put, patch, delete: del, head, options } = request;
