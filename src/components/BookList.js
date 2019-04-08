import React from 'react';
import ListItem from './ListItem';

const BookList = ({books}) => {

    const renderedList = books.map(book => {
        return <ListItem book={book} key={book.id} />
    });

    return <div>{renderedList}</div>
};

export default BookList;
