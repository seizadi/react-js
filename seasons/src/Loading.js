import React from 'react';

const Loading = ( props ) => {
  if ( props.show ) {
    return (
      <div className={'ui active dimmer'}>
        <div className={ 'ui big text loader'}>
          { props.message }
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Loading;
