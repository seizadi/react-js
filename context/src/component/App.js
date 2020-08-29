import React from 'react';

import './App.css';
import UserCreate from "./UserCreate";
import ColorContext from "../context/ColorContext";
import { LanguageStore } from "../context/LanguageContext";
import LanguageSelctor from "./LanguageSelector";

class App extends React.Component {
  state = { color: 'blue'};

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <LanguageStore>
            <LanguageSelctor />
            <ColorContext.Provider value={this.state.color}>
                <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
      </div>
    );
  }
}

export default App;
