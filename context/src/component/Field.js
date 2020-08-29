import React from "react";

import LanguageContext from "../context/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';
    return(
      <div className="ui fieldOfView">
        <label>{text}</label>
        <input type="text"/>
      </div>
    );
  }
}

export default Field;
