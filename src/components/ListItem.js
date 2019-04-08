import React from 'react';
// import './ListItem.css';

const ListItem = ({book}) => {
    return (
        <div className="list-item card">
            <div className="image">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book.volumeInfo.title" className="ui image"/>
            </div>
            <div className="content">
                <div className="header">
                    {book.volumeInfo.title}
                </div>
                <div className="description">
                    {book.volumeInfo.description}
                </div>
            </div>
        </div>
    );
};

export default ListItem;
