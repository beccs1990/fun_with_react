import axios from 'axios/index';

// Probably this needs refactoring and should return payload to reducer when action creator calls?
// API calls are in sagas/subroutines

// Get top repo list
export const getTopReposList = () => {
  return axios.get('https://api.github.com/search/repositories?q=+is:public&sort=stars&order=desc&page=1&per_page=30')
};

// Search through list of top repos by text
export const searchReposList = (text) => {
  axios.get({
    method: 'get',
    url: 'https://api.github.com/search/repositories',
    params: {
      q: `${text}+is:public`,
      sort: 'stars',
      order: 'desc',
      page: '1',
      per_page: '30',
    }
  });
};

// get specific repo detail
export const getRepoDetails = (repo) => {
  let details = {};
  return axios.get(`https://api.github.com/repos/${repo}/${repo}/pulls`, {
    params: {
      sort: 'created',
        order: 'desc',
        page: '1',
        per_page: '10',
    }
  })
  // move this then out into the component will mount and update into reducer.
};
