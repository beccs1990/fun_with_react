import React from 'react';
import { View, Text } from 'react-native';
import { headerStyle, textStyle } from '../utils/styles';

const Header = ({ children }) => {
  return(
    <View style={headerStyle.containerStyle} alignItems={'center'}>
      <Text style={textStyle.headerStyle}>
        {children}
      </Text>
    </View>
  )
};

export default Header;
