import React from 'react';

class ImageCard extends React.Component {
  imageRef = React.createRef();
  state = { spans: 0 }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // Tracks what you set in VideoItem.css for grid-auto-rows
    const gridAutoRows = 10;
    const spans = Math.ceil( height / gridAutoRows +1 );
    this.setState( { spans: spans });
  }

  render() {
    const image = this.props.image;
    return (
      <div style={{ gridRowEnd: 'span ' + this.state.spans}}>
         <img ref={this.imageRef} alt={image.description} src={image.urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
