import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ children }) => {
  return(
    <View style={{backgroundColor: '#fff', paddingBottom: 5, paddingTop: 5}} alignItems={'center'}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: '#e73331' }}>
        {children}
      </Text>
    </View>
  )
};

export default Header;
