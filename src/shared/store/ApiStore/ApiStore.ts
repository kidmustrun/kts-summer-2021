import { IApiStore, ApiResponse, RequestParams} from "./types";

export default class ApiStore implements IApiStore {
  baseUrl
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
    try {
      const response: Response = await fetch(`${this.baseUrl}${params.endpoint}`, {
        method: params.method,
        headers: params.headers,
        // body: JSON.stringify(params.data) // для GET запросов консоль ругается на наличие body в параметрах
      });

      const data = await response.json();

      return {
        success: true,
        data,
        status: 200
      };
    } catch (e) {
      return {
        success: false,
        data: e,
        status: 500
      };
    }
  }
}