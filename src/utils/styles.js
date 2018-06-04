import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const arrowIcon = (<Icon name="ios-arrow-forward" size={20} color="#076fc2"/>);
export const issuesIcon = (<Icon name="ios-bug" size={18}/>);
export const watchersIcon = (<Icon name="ios-eye" size={18}/>);
export const starsIcon = (<Icon name="ios-star" size={18}/>);
export const authorIcon = (<Icon name="logo-github" size={18}/>);
export const prNumberIcon = (<Icon name="md-git-pull-request" size={18}/>);

export const searchBarStyle = {
  containerStyle: {
    opacity: 0.7,
    backgroundColor: '#30a6e6',
    borderColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopWidth: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  inputStyle: {
    backgroundColor: '#e1f4fc',
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: 5,
    paddingTop: 5,
  },
};

export const rootStyles = {
  borderColor: 'transparent',
  marginTop: 25,
  flex: 1,
};

export const cardStyle = {
  containerStyle: {
    backgroundColor: '#fff',
    borderRightWidth: 0,
    marginTop: 1,
    paddingTop: 7,
    paddingBottom: 7,
    flex: 1,
    borderWidth: 0,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25.
  },
  textContainerStyle: {
    width: 250,
    height: 50
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#005eb1',
    paddingBottom: 2,
    textAlign: 'center'
  },
  subTextStyle: {
    marginLeft: 10,
    marginRight: 10
  }
};

export const buttonStyle = {
  justifyContent: 'flex-end',
  alignSelf: 'center',
};

export const viewStyles = {
  containerStyle: {
    flex: 1,
    // backgroundColor: '#30a6e6',
  }
};

export const headerStyle = {
  containerStyle: {
    backgroundColor: '#30a6e6',
    paddingBottom: 10,
    paddingTop: 10,
  }
};

export const textStyle = {
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
//  text coloring and additional styles here
};
// Add styling for router header
