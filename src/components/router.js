import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import TopReposList from './top-repos-list'
import RepoDetails from './repo-details';

const RouterComponent = () => {
  console.log("router", this.props);
  return(
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene key="topreposlist" component={TopReposList} title="Top Repositories" initial />
          <Scene key="repodetails" component={RepoDetails} />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;
