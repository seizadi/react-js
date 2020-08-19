import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return (
      <div className={'ui container'}>
        <h1>Please select a Song!</h1>
      </div>
    );
  }

  return (
    <div  className={'ui container'}>
      <h3>Details for:</h3>
      <div className={'form'}>
        <div className={'field'}>
          <label>Title: </label>
          <input readOnly value={selectedSong.title} />
        </div>
        <br />
        <div className={'field'}>
          <label>Duration: </label>
          <input readOnly value={selectedSong.duration} />
        </div>
      </div>
    </div>
  )};

const mapStateToProps = (state) => {
  return {selectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);
