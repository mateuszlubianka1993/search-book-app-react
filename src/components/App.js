import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {
        term: '',
    }

    onInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({ term: e.target.value });
    };

    render () {
        return (
            <div className="app-container">
                <SearchBar onInputChange={this.onInputChange}/>
            </div>
        )
    }
};

export default App;
