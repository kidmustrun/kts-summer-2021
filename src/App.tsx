import React, { useContext } from "react";

import "./App.css";
import "./root/root";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import RepoPage from "./pages/RepoPage";
import ReposSearchPage from "./pages/ReposSearchPage";

type ReposContextT = {
  repos: any;
  isLoading: boolean;
  getRepos: () => void;
};
const ReposContext = React.createContext<ReposContextT>({
  repos: [],
  isLoading: false,
  getRepos: () => {},
});
export const useReposContext = () => useContext(ReposContext);
let repos: [],
  isLoading = false,
  getRepos = () => {};
function App() {
  const Provider = ReposContext.Provider;
  return (
    <Provider value={{ repos, isLoading, getRepos }}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/repos">
              <ReposSearchPage />
            </Route>
            <Route exact path="/repos/:owner/:name">
              <RepoPage />
            </Route>
            <Redirect to="/repos" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
