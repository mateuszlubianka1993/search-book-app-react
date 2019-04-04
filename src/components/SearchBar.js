import React from 'react';

function SearchBar(props) {
    return (
      <div className="search-container">
        <form className="search-form">
            <input type="text" placeholder="Search book"/>
            <button type="submit">Search</button>
        </form>
      </div>
    )
  }

export default SearchBar;
