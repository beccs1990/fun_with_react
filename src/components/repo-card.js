import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from './button';
import {
  cardStyle,
  arrowIcon,
  starsIcon,
  issuesIcon,
  watchersIcon } from '../utils/styles';
import { Actions } from 'react-native-router-flux';

// think about making this reusable for pr cards
class RepoCard extends PureComponent {
  // move styling out later
  render() {
    const { name, stars, watchers, openIssues, avatar, owner } = this.props;
    const enterRepoDetails = () => Actions.repodetails({ title: name, owner: owner });

    return (
      <TouchableOpacity onPress={enterRepoDetails}>
        <View style={cardStyle.containerStyle} flexDirection={'row'} justifyContent={'space-evenly'}>

          <View justifyContent={'flex-start'}>
            <Image style={cardStyle.imageStyle} source={{ uri: avatar }}/>
          </View>

          <View justifyContent={'center'} alignItems={'center'} style={cardStyle.textContainerStyle}>
            <Text style={cardStyle.textStyle}>
              {name}
            </Text>
            <View flexDirection={'row'} style={cardStyle.subTextStyle}>
              <Text style={[cardStyle.subTextStyle, {color: "#e1d456"}]}>
                {starsIcon} {stars}
              </Text>
              <Text style={[cardStyle.subTextStyle, {color: 'black'}]}>
                {watchersIcon} {watchers}
              </Text>
              <Text style={[cardStyle.subTextStyle, {color: 'red'}]}>
                {issuesIcon} {openIssues}
              </Text>
            </View>
          </View>

          <View style={{height: 50, paddingBottom: 15}} alignItems={'center'} justifyContent={'flex-end'}>
            <Button onPress={enterRepoDetails}>
              {arrowIcon}
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default RepoCard;
