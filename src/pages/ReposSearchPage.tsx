import { useEffect, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import GitHubStore from "@store/GitHubStore/GitHubStore";
import { ApiResp } from "@store/GitHubStore/types";

const ReposSearchPage = () => {
  const gitHubStore = new GitHubStore();
  const EXAMPLE_ORGANIZATION = "ktsstudio";
  const [repos, setRepos] = useState<any | []>([]);
  useState(() => {
    gitHubStore
      .getOrganizationReposList({
        org: EXAMPLE_ORGANIZATION,
      })
      .then((result) => {
        setRepos(result);
      });
  });

  const disabled = false;
  return (
    <div className="container">
      <form className="search-form">
        <Input placeholder="Введите название организации" value="" />
        <Button disabled={disabled}>
          <SearchIcon />
        </Button>
      </form>
      <div className="cards">
        {repos.map((rep: any) => (
          <RepoTile item={rep}></RepoTile>
        ))}
      </div>
    </div>
  );
};
export default ReposSearchPage;
