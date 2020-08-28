import React from 'react';

import './App.css';
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends React.Component {
  state = { language: 'english', color: 'blue'};

  onLanguageChange(language) {
    this.setState({ language});
  }

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <div>
            Select a language:
            <i className="flag us"
               onClick={()=> this.onLanguageChange('english')}
               style={{cursor: 'pointer'}}
            />
            <i className="flag nl"
               onClick={()=> this.onLanguageChange('dutch')}
               style={{cursor: 'pointer'}}
            />
          </div>
          <ColorContext.Provider value={this.state.color}>
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
