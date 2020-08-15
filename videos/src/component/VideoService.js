import axios from 'axios';

// YouTube API
// console.developers.google.com

export default class VideoService {
  constructor(accessKey ) {
    this.accessKey = accessKey;
    this.rootUrl = 'https://www.googleapis.com/youtube/v3/';
  }

  // GET
  getVideos = (term) => {
    return axios.get(this.rootUrl + 'search',
      {params: {
          q: term,
          part: 'snippet',
          type: 'video',
          maxResults: 5,
          key: this.accessKey}});
  }
}
