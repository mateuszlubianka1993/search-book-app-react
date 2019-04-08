import React from 'react';

class SearchBar extends React.Component {

    render () {
        return (
            <div className="search-container">
              <form className="search-form" onSubmit={this.props.onFormSubmit}>
                  <input type="text" placeholder="Search book" onChange={this.props.onInputChange}/>
                  <button type="submit">Search</button>
              </form>
            </div>
          )
    }
    
  }

export default SearchBar;
