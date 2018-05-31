import { combineReducers } from 'redux';
import repositoriesReducer from './RepositoriesReducer';
import pullRequestsReducer from './repo-pr-reducer';

// Main reducers index, use combineReducers to store all the different reducers into the root here
export default combineReducers({
  repositories: repositoriesReducer,
  pullRequests: pullRequestsReducer,
});

// Think about adding some search list reducer
