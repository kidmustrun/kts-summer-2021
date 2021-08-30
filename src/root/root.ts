import GitHubStore from '../store/GitHubStore/GitHubStore';

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';
export function testGetRequest(){
    gitHubStore.getOrganizationReposList({
        org: EXAMPLE_ORGANIZATION
      }).then(result => {
        console.log(result);
      })
}
testGetRequest();

