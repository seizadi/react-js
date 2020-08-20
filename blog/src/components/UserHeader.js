import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

  renderUser() {
    if (!this.props.user)
      return null;

    return <div className={'header'}>{this.props.user.name}</div>;
  }

  render() {
    return (
      <div className={'ui container'}>
        {this.renderUser()}
      </div>
    );
  };
}

const mapStateToPropos = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return { user: user}
};

export default connect(mapStateToPropos)(UserHeader);
