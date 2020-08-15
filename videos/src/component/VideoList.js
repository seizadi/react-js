import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const videos = props.videos.map( (video) => {
    return <VideoItem key={video.id.videoId} video={video} onSelectVideo={props.onSelectVideo}/>
  });

  return (
    <div className={'ui relaxed divided list'} >
      { videos }
    </div>
  );
}

export default VideoList;
