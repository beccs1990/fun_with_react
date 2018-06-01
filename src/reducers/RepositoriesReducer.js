import { GET_REPOS_SUCCESS, SEARCH_REPOS_LIST } from '../actions/types';

export const initialState = {
  topRepos: [],
  value: '',
};

// ignore the get repo list for now
export default (state = initialState, action) => {
  switch(action.type) {
    case GET_REPOS_SUCCESS:
      return { ...state, topRepos: action.payload };
    case SEARCH_REPOS_LIST:
      return { ...state, value: action.text };
    default:
      return state;
  }
};
