import { combineReducers } from 'redux';
import repositoriesReducer from './RepositoriesReducer';

// Main reducers index, use combineReducers to store all the different reducers into the root here
export default combineReducers({
  repositories: repositoriesReducer,
});

// Think about adding some search list reducer
