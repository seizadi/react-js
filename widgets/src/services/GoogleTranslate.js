import axios from 'axios';

// Google Translate API

const GoogleTranslate = (language, text) => {
const apiKey='AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

  // POST
  return axios.post('https://translation.googleapis.com/language/translate/v2', {},
    {params: {
        q: text,
        target: language,
        key: apiKey}
    });
}

export default GoogleTranslate;
