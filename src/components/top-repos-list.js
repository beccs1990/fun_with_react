import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import RepoListItem from './repo-list-item'
import { connect } from 'react-redux';
import { getTopReposList } from '../utils/apis';
import { getReposList } from '../actions/creators';
import RepoCard from './repo-card';

class TopReposList extends PureComponent {
  // TopReposList class level props - may be good to add container refactoring for this component
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // api call to get repos and dispatch action with response items to update reducer
    getTopReposList().then(response => this.props.getReposList(response.data.items));
  }

  getRepoItems() {
    console.log("top repos -----", this.props.topRepos);
    if (this.props.topRepos.length) {
      console.log("top repos length -----", this.props.topRepos.length);
      return this.props.topRepos.map(repo =>
        <RepoCard
          key={repo.id}
          name={repo.name}
          avatar={repo.owner.avatar_url}
          watchers={repo.watchers}
          stars={repo.stargazers_count}
          openIssues={repo.open_issues}/>
      );
    }
  }

  render() {
    console.log("this props in repo list => ", this.props);

    return (
      <ScrollView removeClippedSubviews={false}>
        {this.getRepoItems()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  // Mapping component state to the store
  console.log("reducer state, from repos list => ", state);
  return state.repositories;
};

export default connect(mapStateToProps, { getReposList })(TopReposList);
