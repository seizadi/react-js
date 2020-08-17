import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    // Allow command key on Mac and clt on Windows to work
    if (event.metaKey || event.ctrlKey){
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={(e) => onClick(e)} href={href} className={className} >{children}</a>
  );
};

export default Link;
