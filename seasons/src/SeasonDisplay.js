import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    message: 'Let\'s hit the beach!',
    icon: 'massive icon sun',
  },
  winter: {
    message: 'Burr it is chilly',
    icon: 'massive icon snowflake',
  }
}

const getSeason = ( latitude ) => {
  const month = new Date().getMonth();

  if ( month >= 8 && month < 2)
    return (latitude > 0) ? 'winter' : 'summer';
  else
    return (latitude > 0) ? 'summer' :  'winter';
}

const SeasonDisplay = ( props ) => {
  let season = getSeason( props.latitude );
  const { message, icon } = seasonConfig[season];

  return (
    <div className={'season-display ' + season}>
      <i className={ 'icon-left ' + icon } />
      <h1> { message }</h1>
      <i className={ 'icon-right ' + icon } />
    </div>
  );
}

export default SeasonDisplay;
