import React from 'react';

const ListItem = ({book}) => {
    return (
        <div>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book.volumeInfo.title"/>
            <div>
                <div>
                    {book.volumeInfo.title}
                </div>
                <div>
                    {book.volumeInfo.description}
                </div>
            </div>
        </div>
    );
};

export default ListItem;
