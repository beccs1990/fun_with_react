import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { getRepoDetails } from '../utils/apis';
import { connect } from 'react-redux';
import { getPRList } from '../actions/creators';
import PullRequestCard from './pull-request-card';
import Header from './header';

class RepoDetails extends Component {

  componentWillMount() {
    getRepoDetails(this.props.owner, this.props.title).then(response => {
      console.log(response);
      if (!response.data && !response.data.length) {
        this.props.last10PR = [];
      }
      this.props.getPRList(response.data)
    });
  }

  getPullRequests() {
      return this.props.last10PR.map(pr =>
        <PullRequestCard
          key={pr.id}
          author={pr.user.login}
          issueNumber={pr.number}
          issueTitle={pr.title}
          issueStatus={pr.state}
        />
      )
  }

  render() {
    return (
      <View>
        <Header>
          10 Last PR's
        </Header>
        <ScrollView>
            { this.getPullRequests() }
        </ScrollView>
      </View>
    );
  };
}

const mapStateToProps = state => {
  console.log("details state ", state);
  return state.pullRequests;
};

export default connect(mapStateToProps, { getPRList })(RepoDetails);

