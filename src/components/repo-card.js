import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Button from './button';
import { itemStyle } from '../utils/styles';
import { Actions } from 'react-native-router-flux';

// Mostly separation for styling - I think make into functional component since nothing on this should change, only route to details
export default class RepoCard extends PureComponent {
  // Add repo details in to route to detailed view
  constructor(props) {
    super(props);
    console.log("in repo card", this.props);
  }

  enterRepoDetails = () => Actions.repodetails({ title: this.props.name });

  render() {
    // the attributes for this.props (one of name, stars, etc.) needs to be specific
    const { name, stars, watchers, openIssues, avatar } = this.props;

    return (
      <TouchableOpacity onPress={this.enterRepoDetails}>
        <View style={itemStyle} flexDirection={'row'} justifyContent={'space-evenly'}>
          <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: avatar}}/>
          <View alignItems={'center'}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 2, color: '#e73331' }}>
              {name}
            </Text>
            <Text style={{ color: 'red' }}>
              Stars: {stars}
              <Text style={{ color: 'blue' }}>
                Watchers: {watchers}
                <Text style={{ color: 'black' }}>
                  Open Issues: {openIssues}
                </Text>
              </Text>
            </Text>
          </View>
          <Button onPress={this.enterRepoDetails}>
            >
          </Button>
        </View>
      </TouchableOpacity>
    );
  }
}
// First argument is for map state to props, passing in null
// actions is second argument, being passed down into component as props. Connect is some auto binding, no need to call dispatch.


// export default connect(mapStateToProps, actions)(RepoCard);
