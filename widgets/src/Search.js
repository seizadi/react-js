import React, { useState, useEffect } from 'react';
import WikipediaSearch from "./services/WikipediaSearch";

const WIKIPEDIA_URL = 'https://en.wikipedia.org?curid=';

const Search = (props) => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect( () => {
    const timeoutId = setTimeout( () => {
      setDebouncedTerm(term);
    }, 1000);

    return (() => {
      clearTimeout(timeoutId);
    });

  }, [term]);

  useEffect( () => {
    const search = async () => {
      const response = await WikipediaSearch(debouncedTerm);
      setResults(response.data.query.search)
    };

    if (debouncedTerm) {
      search();
    }

  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className={'item'}>
        <div className={'right floated content'}>
          <a
            className={'ui button'}
            href={WIKIPEDIA_URL + result.pageid}
            target={'_blank'}
            rel="noopener noreferrer"
          >...More</a>
        </div>
        <div className={'content'}>
          <div className={'header'}>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={'ui form'} >
        <div className={'field'}>
          <label>Enter Serach:</label>
          <input
            className={'input'}
            type={'text'}
            value={term}
            onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
      <div className={'ui celled list'}>
        {renderedResults}
      </div>
    </div>
      );
}

export default Search;
