import { StatusCodes } from "http-status-codes";

export { StatusCodes as HttpStatusCodes } from "http-status-codes";

export type HttpRequest<TBody = any, TQuery = any, TParams = any> = {
  body?: TBody;
  query?: TQuery;
  params?: TParams;
};

export type HttpResponse<TData = any> = {
  statusCode: StatusCodes;
  data?: TData;
};

export interface HttpControllerInterface {
  handle(request: HttpRequest): Promise<HttpResponse>;
}
