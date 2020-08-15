import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import GetApiKeys from '../Unsplash';
import ImageService from './ImgeService';
import ImageList from "./ImageList";

class App extends React.Component {
  imageSvc = new ImageService(GetApiKeys().accessKey);
  state = { images: [] };

  // Using promise
  // onSearchSubmit = (term) => {
  //   this.imageSvc.getImages(term).then(
  //     (response) => {
  //       console.log( response.data.results);
  //     }
  //   );
  // }

  // Async method could not get this to work!
  onSearchSubmit = async (term) => {
    const response = await this.imageSvc.getImages(term);
    this.setState( { images: response.data.results});
  }

  render() {
    return (
      <div className={'App'}>
        <div className={'ui container'}>
          <SearchBar onSearchSubmit={this.onSearchSubmit}/>
          <ImageList images={ this.state.images }/>
        </div>
      </div>
    );
  }
}

export default App;
