import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    this.inputRef.current.value = '';
  };

    render () {
        return (
            <div className="search-container ui segment">
              <form className="search-form ui form" onSubmit={this.props.onFormSubmit}>
                <div className="field">
                  <label>Book search</label>
                  <input type="text" placeholder="Search book" onChange={this.props.onInputChange} ref={this.inputRef}/>
                  <button type="submit" className="positive ui button" onClick={this.clearInput}>Search</button>
                </div>
              </form>
            </div>
          )
    }
    
  }

export default SearchBar;
