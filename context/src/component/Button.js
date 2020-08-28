import React from "react";

import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {

  render() {
    return(
      <ColorContext.Consumer>
        {(color) => {
          return (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                { ( value ) => {
                  return value === 'english' ? 'Submit' : 'Voorleggen';
                }}
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
