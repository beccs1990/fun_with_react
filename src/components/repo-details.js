import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getRepoDetails } from '../utils/apis';
// props => last 10 PR's by author, name, title, status

class RepoDetails extends Component {
  // this needs a list view to hold the list of last 10 PR's. Create reducer to hold that certain information and update reducer when mounting
  // probably create a new card item for each PR

  // componentWillMount() {
    // getRepoDetails(this.props.title).then(response => {
    //   console.log(response.data.url);
    //   console.log(response.data.number);
    //   console.log(response.data.title);
    //   console.log(response.data.state);
    //   console.log(response.data.user.login);
    //   details = {
    //     url: response.data.url,
    //     number: response.data.number,
    //     title: response.data.title,
    //     status: response.data.state,
    //     user: response.data.user.login,
    //   }
    // });
  // }
  
  render() {
    console.log("details ", this.props);
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  };
}

export default RepoDetails;

