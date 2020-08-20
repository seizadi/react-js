import React from 'react';
import UserHeader from "./UserHeader";

const PostDetail = (props) => {
  return (
    <div className={'item'} >
      <i className={'large middle aligned icon user'} />
      <div className={'content'}>
        <div className={'description'}>
          <h2>{props.post.title}</h2>
          <p>{props.post.body}</p>
        </div>
        <UserHeader userId={props.post.userId} />
      </div>
    </div>
  );
}

export default PostDetail;
