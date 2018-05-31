import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PullRequestCard = (props) => {

  console.log("pr card props ", props);
  return(
    <TouchableOpacity>
      <View alignItems={'center'}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 2, color: '#e73331' }}>
          {props.issueTitle}
        </Text>
        <Text style={{ color: 'red' }}>
          {props.author}
          <Text style={{ color: 'blue' }}>
            {props.issueNumber}
            <Text style={{ color: 'black' }}>
              {props.issueStatus}
            </Text>
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
};

export default PullRequestCard;
