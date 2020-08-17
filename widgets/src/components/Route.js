import { useState, useEffect } from "react";

const Route = ({ path, children}) => {
  const [currentPath, setCurnnetPath] = useState(window.location.pathname);

  const onLocationChange = () => {
    setCurnnetPath(window.location.pathname);
  }

  useEffect( () => {
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
