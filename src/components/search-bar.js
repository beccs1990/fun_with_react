import React, { PureComponent } from 'react';
import { SearchBar } from 'react-native-elements';
import { barStyle } from '../utils/styles';

const SearchBarComponent = ({ onChangeText, onClear, value }) => {
    return (
        <SearchBar
          containerStyle={barStyle.containerStyle}
          inputStyle={barStyle.inputStyle}
          placeholder='Search'
          placeholderTextColor='#000'
          platform='ios'
          round
          icon={{ color: '#000' }}
          onChangeText={onChangeText}
          value={value}
          clearIcon={{color: '#000'}}
          onClear={onClear}
          // cancelButtonTitle="Cancel"
        />
    );
};

export default SearchBarComponent;
