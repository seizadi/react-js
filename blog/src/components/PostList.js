import React from 'react';
import { connect } from 'react-redux';
import PostDetail from "./PostDetail";
import { fetchPostsAndUsers } from '../actions'

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderlist() {
    return this.props.posts.map( post => {
      return <PostDetail key={post.id} post={post} />;
    });
  }

  render() {
    return (
      <div className={'ui relaxed divided list'}>
        {this.renderlist()}
      </div>
    );
  };
}

const mapStateToPropos = (state) => {
  return { posts: state.posts }
};

export default connect(mapStateToPropos, { fetchPostsAndUsers })(PostList);
