import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { getTopReposList } from '../utils/apis';
import { getReposList, searchRepositories } from '../actions/creators';
import RepoCard from './repo-card';
import Header from './header';
import SearchBarComponent from './search-bar';

class TopReposList extends PureComponent {
  // TopReposList class level props - may be good to add container refactoring for this component
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // api call to get repos and dispatch action with response items to update reducer
    getTopReposList().then(response => this.props.getReposList(response.data.items));
  }

  _onClear = () => {
    this.props.searchRepositories('');
  };

  _onChangeText = (text) => {
    this.props.searchRepositories(text);
  };


  render() {
    console.log("current props ", this.props);

    // probably this could be refactored
    const getRepoItems = () => {
      if (!this.props.value) {
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
      } else {
        return this.props.topRepos.map(repo => {
          if (repo.name.toLowerCase().indexOf(this.props.value.toLowerCase()) > -1) {
            return (
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
        });
      }
    };

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <SearchBarComponent
          value={this.props.value}
          onClear={this._onClear}
          onChangeText={this._onChangeText}
        />
        <Header>
          Top Repositories
        </Header>
        <ScrollView removeClippedSubviews={false}>
          {
            this.props.topRepos && this.props.topRepos.length ? getRepoItems() : null
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // Mapping component state to the store
  return state.repositories;
};

export default connect(mapStateToProps, { getReposList, searchRepositories })(TopReposList);
