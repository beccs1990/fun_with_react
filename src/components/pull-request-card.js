import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { cardStyle, authorIcon, prNumberIcon } from '../utils/styles';

const PullRequestCard = (props) => {

  return(
    <TouchableOpacity>
      <View style={cardStyle.containerStyle} alignItems={'center'}>
        <Text style={cardStyle.textStyle}>
          {props.issueTitle}
        </Text>
        <Text style={{ color: 'red' }}>
          {authorIcon} {props.author}
          <Text style={{ color: 'blue' }}>
            {prNumberIcon} {props.issueNumber}
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
