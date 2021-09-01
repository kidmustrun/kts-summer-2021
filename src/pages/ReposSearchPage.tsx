import { useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import GitHubStore from "@store/GitHubStore/GitHubStore";

const ReposSearchPage = () => {
  // eslint-disable-next-line no-console
  console.log("repos is rendered");
  const [orgInput, setOrg] = useState("");
  const [repos, setRepos] = useState<any | []>([]);
  const [isLoading, setDisabled] = useState(false);
  function getRepos() {
    setDisabled(true);
    const gitHubStore = new GitHubStore();
    gitHubStore
      .getOrganizationReposList({
        org: orgInput,
      })
      .then((result) => {
        setRepos(result);
        setDisabled(false);
      });
  }
  return (
    <div className="container">
      <div className="search-form">
        <Input
          placeholder="Введите название организации"
          value={orgInput}
          onChange={(event) => {
            const element = event.currentTarget as HTMLInputElement;
            setOrg(element.value);
          }}
        />
        <Button disabled={isLoading} onClick={() => getRepos()}>
          <SearchIcon />
        </Button>
      </div>
      <div className="cards">
        {!repos.message ? (
          repos.map((rep: any) => <RepoTile item={rep} key={rep.id}></RepoTile>)
        ) : (
          <h3>Такой организации не найдено.</h3>
        )}
      </div>
    </div>
  );
};
export default ReposSearchPage;
