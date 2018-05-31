import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { getTopReposList } from '../utils/apis';
import { getReposList } from '../actions/creators';
import RepoCard from './repo-card';
import Header from './header';
import SearchBarComponent from './search-bar';

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
    if (this.props.topRepos && this.props.topRepos.length) {
      return this.props.topRepos.map(repo =>
        <RepoCard
          key={repo.id}
          name={repo.name}
          avatar={repo.owner.avatar_url}
          watchers={repo.watchers}
          stars={repo.stargazers_count}
          openIssues={repo.open_issues}
          owner={repo.owner.login}
        />
      );
    }
  }

  render() {
    // add condition to check whether it should display getRepoItems or getPrList?
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <SearchBarComponent/>
        <Header>
          Top Repositories
        </Header>
        <ScrollView removeClippedSubviews={false}>
          {this.getRepoItems()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // Mapping component state to the store
  return state.repositories;
};

export default connect(mapStateToProps, { getReposList })(TopReposList);
