import { GET_PR_LIST_SUCCESS } from '../actions/types';

const initialState = {
  last10PR: [],
  issueNumber: '',
  issueTitle: '',
  issueStatus: '',
  author: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PR_LIST_SUCCESS:
      return { ...state, last10PR: action.payload };
    default:
      return state;
  }
};

