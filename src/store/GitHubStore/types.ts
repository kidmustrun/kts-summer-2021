export type GetOrganizationReposListParams = {
    org: string;
}
export type ApiResp<RepoItem> = {
    data?: RepoItem
}
export interface IGitHubStore {
    getOrganizationReposList<RepoItem = {}>(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
}
export interface getRepoParams {
    owner: string | undefined;
    repo: string | undefined;
  }
  