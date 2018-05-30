import { GET_REPOS_SUCCESS } from '../actions/types';

export const initialState = {
  topRepos: [],
};

// ignore the get repo list for now
export default (state = initialState, action) => {
  switch(action.type) {
    case GET_REPOS_SUCCESS:
      return { ...state, topRepos: action.payload };
    default:
      return state;
  }
};
