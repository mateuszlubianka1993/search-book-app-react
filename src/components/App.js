import React from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends React.Component {

    state = {
        term: '',
        books: [],
        error: false,
    }

    onInputChange = (e) => {
        console.log(e.target.value);
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
          throw Error('Something went wrong, try again')
        })
        .then(response => response.json())
        .then(result => {
          this.setState({
           books: result.items,
          });
        })
        .catch(err => {
          this.setState({error: true})
        })
        console.log(this.state.books);
      }

    
    render () {
        return (
            <div className="app-container">
                <SearchBar onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
                <BookList books={this.state.books} />
            </div>
        )
    }
};

export default App;
