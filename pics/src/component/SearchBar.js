import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (
      <div className={'ui segment'}>
        <form className={'ui form'} onSubmit={ this.onFormSubmit } >
          <div className={'field'}>
            <label>Search Images:</label>
          <input type={'text'} value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})} />
          </div>
        </form>

      </div>
    );
  }
}

export default SearchBar;
