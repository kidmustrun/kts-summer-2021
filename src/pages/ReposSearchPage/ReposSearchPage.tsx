import { useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import GitHubStore from "@store/GitHubStore/GitHubStore";

import { useReposContext } from "../../App";
import styles from "./ReposSearchPage.module.scss";

const ReposSearchPage = () => {
  const reposContext = useReposContext();
  const [repos, setRepos] = useState<any | []>([]);
  const [isLoading, setDisabled] = useState(false);
  const [orgInput, setOrg] = useState("");
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
  reposContext.getRepos = getRepos;
  reposContext.repos = repos;
  reposContext.isLoading = isLoading;
  return (
    <div className={styles.container}>
      <div className={styles.searchform}>
        <Input
          placeholder="Введите название организации"
          value={orgInput}
          onChange={(event) => {
            const element = event.currentTarget as HTMLInputElement;
            setOrg(element.value);
          }}
        />
        <Button
          disabled={reposContext.isLoading}
          onClick={() => reposContext.getRepos()}
        >
          <SearchIcon />
        </Button>
      </div>
      <div className={styles.cards}>
        {!reposContext.repos.message ? (
          reposContext.repos.map((rep: any) => (
            <RepoTile item={rep} key={rep.id}></RepoTile>
          ))
        ) : (
          <h3>Такой организации не найдено.</h3>
        )}
      </div>
    </div>
  );
};
export default ReposSearchPage;
