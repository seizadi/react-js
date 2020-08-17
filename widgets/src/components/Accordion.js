import React, { useState } from 'react';

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = props.items.map( (item, index) => {
    const dropDownState = (index === activeIndex) ? 'active' : '';
    return <React.Fragment key={item.title}>
      <div
        className={'title ' + dropDownState}
        onClick={() => onTitleClick(index)}
      >
        <i className={'dropdown icon'}></i>
        {item.title}
      </div>
      <div className={'content ' + dropDownState}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  });
  return(
    <div className={'ui styled accordion'}>
      {renderedItems}
    </div>
  );
}

export default Accordion;
