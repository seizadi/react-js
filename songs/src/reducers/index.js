import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: 'No Scrubs', duration: '5:05'},
    { title: 'Macarena', duration: '4:57'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I Want it That Way', duration: '4:10'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
  });
