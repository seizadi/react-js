import axios from 'axios';

// unsplash.com/developers
export default class ImageService {
  constructor(accessKey ) {
    this.accessKey = accessKey;
    this.rootUrl = 'https://api.unsplash.com/';
    this.header = {
      Authorization: 'Client-ID ' + this.accessKey
    }
  }

  // GET
  getImages = (term) => {
    return axios.get(this.rootUrl + 'search/photos',
      {params: { query: term}, headers: this.header});
  }
}
