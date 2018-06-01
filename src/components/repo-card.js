import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from './button';
import { itemStyle } from '../utils/styles';
import { Actions } from 'react-native-router-flux';

// think about making this reusable for pr cards
const RepoCard = (props) => {
  const enterRepoDetails = () => Actions.repodetails({ title: props.name, owner: props.owner });
  const { name, stars, watchers, openIssues, avatar } = props;
    // move styling out later
    return (
      <TouchableOpacity onPress={enterRepoDetails}>
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
          <Button onPress={enterRepoDetails}>
            >
          </Button>
        </View>
      </TouchableOpacity>
    );
};

export default RepoCard;
