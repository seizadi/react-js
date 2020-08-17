import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
  title = this.props.video.snippet.title;
  thumbNail = this.props.video.snippet.thumbnails.medium.url;

  onClick = () => {
    this.props.onSelectVideo(this.props.video);
  }

  render() {
    return (
      <div className={'video-item item'} onClick={this.onClick}>
        <img className={'ui image'} src={this.thumbNail} alt={this.title}/>
        <div  className={'content'} >
          <div className={'header'}>
            {this.title}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
