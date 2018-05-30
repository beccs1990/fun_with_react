import React, { PureComponent } from 'react';
import { SearchBar } from 'react-native-elements';
import { barStyle } from '../utils/styles';

class SearchBarComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  _onClear = () => {
    this.setState({ value: ''});
  };

  _onChangeText = (text) => {
    console.log(text);
    this.setState({ value: text});
  };

  render () {
    return (
        <SearchBar
          containerStyle={barStyle.containerStyle}
          inputStyle={barStyle.inputStyle}
          placeholder='Search'
          placeholderTextColor='#000'
          platform='ios'
          round
          icon={{ color: '#000' }}
          onChangeText={this._onChangeText}
          value={this.state.value}
          clearIcon={{color: '#000'}}
          onClear={this._onClear}
          // cancelButtonTitle="Cancel"
        />
    );
  };
}


export default SearchBarComponent;
