// import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import TopReposList from '../components/top-repos-list';
// import { getReposList, searchRepositories } from '../actions/creators';
// import { getTopReposList } from '../utils/apis';
//
// class TopReposContainer extends PureComponent {
//
//   componentDidMount() {
//     // api call to get repos and dispatch action with response items to update reducer
//     getTopReposList().then(response => this.props.getReposList(response.data.items));
//   }
//
//   _getRepoItem = () => {
//     if (!this.props.value) {
//       return this.props.topRepos.map(repo =>
//         <RepoCard
//           key={repo.id}
//           name={repo.name}
//           avatar={repo.owner.avatar_url}
//           watchers={repo.watchers}
//           stars={repo.stargazers_count}
//           openIssues={repo.open_issues}
//           owner={repo.owner.login}
//         />
//       );
//     } else {
//       return this.props.topRepos.map(repo => {
//         if (repo.name.toLowerCase().indexOf(this.props.value.toLowerCase()) > -1) {
//           return (
//             <RepoCard
//               key={repo.id}
//               name={repo.name}
//               avatar={repo.owner.avatar_url}
//               watchers={repo.watchers}
//               stars={repo.stargazers_count}
//               openIssues={repo.open_issues}
//               owner={repo.owner.login}
//             />
//           );
//         }
//       });
//     }
//   };
//
//   render() {
//     return(
//       <TopReposList/>
//     )
//   }
// }
//
//   const mapStateToProps = state => {
//     // Mapping component state to the store
//     return state.repositories;
//   };
//
//   TopReposContainer = connect(
//     mapStateToProps,
//       zgetReposList,
//       searchRepositories,
//     }
//   )(TopReposList);

