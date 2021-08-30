import { IApiStore, ApiResponse, RequestParams, HTTPMethod, StatusHTTP} from "./types";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }
  async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {

    if(params.method === HTTPMethod.GET){
      params.data = undefined;
    }
    try {
      const response: Response = await fetch(`${this.baseUrl}${params.endpoint}`, {
        method: params.method,
        headers: params.headers,
        body: JSON.stringify(params.data)
      });

      const data = await response.json();
      return {
        success: true,
        data,
        status: response.status
      };
    } catch (e) {
      return {
        success: false,
        data: e,
        status: StatusHTTP.INTERNAL_SERVER_ERROR
      };
    }
  }
}