//DELETE

import React, { PureComponent } from 'react';
import RepoCard from './repo-card';


class RepoListItem extends PureComponent {
  // This component is just passing props down to repo-card
  render () {
    return (
          <RepoCard
            avatar={this.props.avatar}
            name={this.props.name}
            stars={this.props.stars}
            watchers={this.props.watchers}
            openIssues={this.props.openIssues}>
          </RepoCard>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("repo item state => ", this.props);
//   return { repositories: state.repositories }
// };
//
// // First argument is for map state to props, passing in null
// // actions is second argument, being passed down into component as props. Connect is some auto binding, no need to call dispatch.
// export default connect(mapStateToProps, actions)(RepoListItem);

export default RepoListItem;
