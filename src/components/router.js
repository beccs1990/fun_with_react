import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TopReposList from './top-repos-list'
import RepoDetails from './repo-details';

const RouterComponent = () => {
  // add styling to make nav bar less noticeable
  return(
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene key="topreposlist" component={TopReposList} initial hideNavBar />
          <Scene key="repodetails" component={RepoDetails} />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;
