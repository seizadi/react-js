import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from "../hooks/useVideos";

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, videoSearch] = useVideos('weather');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className={'App'}>
      <div className={'ui container'}>
        <SearchBar label={'Search Videos'} onSearchSubmit={videoSearch}/>
        <div className={'ui grid'}>
          <div className={'ui row'}>
            <div className={'eleven wide column'}>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className={'five wide column'}>
              <VideoList videos={ videos } onSelectVideo={setSelectedVideo}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
