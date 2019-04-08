import React from 'react';
import ListItem from './ListItem';
import './BookList.css';

const BookList = ({books}) => {

    const renderedList = books.map(book => {
        return <ListItem book={book} key={book.id} />
    });

    return (
        <div className="ui cards book-list">
            {renderedList}
        </div>
    ); 
};

export default BookList;
