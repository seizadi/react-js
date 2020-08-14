import React from 'react';

const getSeason = ( latitude ) => {
  const month = new Date().getMonth();

  if ( month >= 8 && month < 2)
    return (latitude > 0) ? 'winter' : 'summer';
  else
    return (latitude > 0) ? 'summer' :  'winter';
}

const SeasonDisplay = ( props ) => {
  let season = getSeason( props.latitude );

  return (
    <div>
      <h3> { season }</h3>
    </div>
  );
}

export default SeasonDisplay;
