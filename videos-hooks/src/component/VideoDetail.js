import React from 'react';

class VideoDetail extends React.Component {

  render() {
    if (this.props.video == null)
      return <div>VideoDetail</div>;

    const videoSrc = 'https://www.youtube.com/embed/' +
                                  this.props.video.id.videoId;
    return (
      <div>
        <div className={'ui embed'}>
          <iframe title={'Video Player'} src={videoSrc} />
        </div>
      <div className={'ui segment'}>
        <h4 className={'ui header'} >
          {this.props.video.snippet.title}
        </h4>
        <p>
          {this.props.video.snippet.description}
        </p>
      </div>
      </div>
    );
  }
}

export default VideoDetail;
