import React from 'react';

class SearchBar extends React.Component {

    render () {
        return (
            <div className="search-container ui segment">
              <form className="search-form ui form" onSubmit={this.props.onFormSubmit}>
                <div className="field">
                  <label>Book search</label>
                  <input type="text" placeholder="Search book" onChange={this.props.onInputChange}/>
                  <button type="submit" className="positive ui button">Search</button>
                </div>
              </form>
            </div>
          )
    }
    
  }

export default SearchBar;
