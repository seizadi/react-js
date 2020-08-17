import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSearchSubmit(term);
  }

  return (
    <div className={'ui segment'}>
      <form className={'ui form'} onSubmit={ onFormSubmit } >
        <div className={'field'}>
          <label>{props.label}</label>
          <input type={'text'} value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </form>

    </div>
  );
}

export default SearchBar;
