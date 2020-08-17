import axios from 'axios';

// Wikipedia API

const WikipediaSearch = (term) => {

  // GET
  return axios.get('https://en.wikipedia.org/w/api.php',
    {params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term}});
}

export default WikipediaSearch;
