import React from 'react';

const Loading = ( props ) => {
  if ( props.show ) {
    return (
      <div className="ui icon button">
        <i className="notched circle loading icon"></i>
        { props.message }
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Loading;
