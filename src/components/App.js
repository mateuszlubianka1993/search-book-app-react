import React from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends React.Component {

    state = {
        term: '',
        books: []
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.term}+intitle:${this.state.term}&filter=partial`;
    
      fetch(apiUrl)
        .then(response => {
          if(response.ok) {
            return response;
          }
          throw Error('Something went wrong, try again');
        })
        .then(response => response.json())
        .then(result => {
          this.setState({
           books: result.items,
           term: '',
          });
        })
        .catch(err => {
          console.log(err);
        })
      }
    
    render () {
        return (
            <div className="app-container ui container">
                <SearchBar onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
                <div className="ui container">
                    <BookList 
                      books={this.state.books} 
                      active={this.state.active}  
                    />
                </div>  
            </div>
        )
    }
};

export default App;
