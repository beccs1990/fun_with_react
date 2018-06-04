import axios from 'axios/index';

const header = 'token d7298e286b1f1ba05144fc62963d43703faca05e';
// Probably this needs refactoring and should return payload to reducer when action creator calls?
// API calls are in sagas/subroutines

// Get top repo list
export const getTopReposList = () => {
  return axios
    .get('https://api.github.com/search/repositories?q=+is:public&sort=stars&order=desc&page=1&per_page=30',
      { headers: { Authorization: header}})
};

// Search through list of top repos by text
// export const searchReposList = (text) => {
//   axios.get({
//     method: 'get',
//     url: 'https://api.github.com/search/repositories',
//     params: {
//       q: `${text}+is:public`,
//       sort: 'stars',
//       order: 'desc',
//       page: '1',
//       per_page: '30',
//     }
//   });
// };

// get specific repo detail
export const getRepoDetails = (owner, repo) => {
  // let details = {};
  return axios
    .get(`https://api.github.com/repos/${owner}/${repo}/pulls?sort=created&order=desc&page=1&per_page=10`,
      { headers: { Authorization: header }})
  // move this then out into the component will mount and update into reducer.
};
