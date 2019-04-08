import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {
        term: '',
        booksx: [],
        error: false,
    }

    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({ term: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.term}`;
    
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
           booksx: result.items,
          });
        })
        .catch(err => {
          this.setState({error: true})
        })
        console.log(this.state.booksx);
        }

    
    render () {
        return (
            <div className="app-container">
                <SearchBar onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
            </div>
        )
    }
};

export default App;
