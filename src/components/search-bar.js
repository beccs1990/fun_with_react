import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { headerStyle, searchBarStyle } from '../utils/styles';

const SearchBarComponent = ({ onChangeText, onClear, value }) => {
    return (
      <View style={headerStyle.containerStyle}>
        <SearchBar
          containerStyle={searchBarStyle.containerStyle}
          inputStyle={searchBarStyle.inputStyle}
          placeholder='Search'
          placeholderTextColor={'#000'}
          platform='ios'
          round
          icon={{ color: '#000' }}
          onChangeText={onChangeText}
          value={value}
          clearIcon={{color: '#000'}}
          onClear={onClear}
          // cancelButtonTitle="Cancel"
        />
      </View>
    );
};

export default SearchBarComponent;
