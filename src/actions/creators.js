import { GET_REPOS_SUCCESS, GET_PR_LIST_SUCCESS } from './types';

// Searching repos will need to update the top repos list, so need to create action to get repos list on mount
// onChangeText it should update the repos list and in turn fetch new list of repos


 export const getReposList = (repoList) => {
  return {
    type: GET_REPOS_SUCCESS,
    payload: repoList
  };
};

// Action to get a repo card details will need to re-render details based on chosen repo, so need action to dispatch and get details to update card detail comp
// Last 10 PR's, author, title, number, status
 export const getPRList = (repoPRList) => {
  return {
    type: GET_PR_LIST_SUCCESS,
    payload: repoPRList,
  };
};
