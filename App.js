import React, { PureComponent } from 'react';
import ReactNative from 'react-native';
import { View } from 'react-native';
import { rootStyles } from './src/utils/styles';
import RouterComponent from './src/components/router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends PureComponent {
  // Maybe put initial repo list get here on app mount to return to list
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // Temporary create store
      <Provider store={createStore(reducers)}>
        <View style={[rootStyles]}>
          <RouterComponent/>
        </View>
      </Provider>
    );
  };
}

ReactNative.AppRegistry.registerComponent('fun_with_react', () => App);
