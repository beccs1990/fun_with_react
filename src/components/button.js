import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyle } from '../utils/styles';
import { Actions } from 'react-native-router-flux';

const Button = ({ onPress, children }) => {
  // Return and restyle the button
  // onPress should present a detailed view of the list item with last 10 PR's, author, name, number, status. Should be a separate route.
  return(
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}>
      <Text style={{color: '#007aff', fontWeight: 'bold', fontSize: 20}}> {children} </Text>
    </TouchableOpacity>
  );
};

export default Button;
