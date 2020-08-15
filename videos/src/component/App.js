import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VideoService from './VideoService';
import VideoList from './VideoList';
import GetApiKeys from '../GoogleApi';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  videoSvc = new VideoService(GetApiKeys().accessKey);
  state = { videos: [], selectedVideo: null };

  // Async method could not get this to work!
  onSearchSubmit = async (term) => {
    const response = await this.videoSvc.getVideos(term);
    this.setState( {
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  }

  onSelectVideo = (video) => {
    console.log('From App', video);
    this.setState( { selectedVideo: video});
  }

  componentDidMount() {
    this.onSearchSubmit('weather');
  }

  render() {
    return (
      <div className={'App'}>
        <div className={'ui container'}>
          <SearchBar label={'Search Videos'} onSearchSubmit={this.onSearchSubmit}/>
          <div className={'ui grid'}>
            <div className={'ui row'}>
              <div className={'eleven wide column'}>
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className={'five wide column'}>
                <VideoList videos={ this.state.videos } onSelectVideo={this.onSelectVideo}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
