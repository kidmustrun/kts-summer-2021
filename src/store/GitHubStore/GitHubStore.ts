import ApiStore from "../../shared/store/ApiStore";
import { HTTPMethod } from "../../shared/store/ApiStore/types";
import {
  IGitHubStore,
  GetOrganizationReposListParams,
  ApiResp,
  getRepoParams,
} from "./types";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore("https://api.github.com/");
  async getOrganizationReposList<RepoItem = {}>(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>> {
    const response = await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `orgs/${params.org}/repos`,
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    return response.data;
  }
  async getRepo<RepoItem = {}>(
    params: getRepoParams
  ): Promise<ApiResp<RepoItem[]>> {
    const response = await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `repos/${params.owner}/${params.repo}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    return response.data;
  }
}
