import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
    state = {active: false}

    seeMore = () => {
        this.setState({active: !this.state.active});
      };

    render() {
        return (
            <div className="list-item card">
            <div className="image">
                <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title} className="ui image"/>
            </div>
            <div className="content">
                <div className="header">
                    {this.props.book.volumeInfo.title}
                </div>
                <div className="description">
                    <div className={this.state.active ? "read-more" : "read-less"}>
                        {this.props.book.volumeInfo.description}
                    </div>
                    <button className="fluid ui button" onClick={this.seeMore}>{this.state.active ? 'See less' : 'See more'}</button>
                </div>
            </div>
        </div>
        )
    }
};

export default ListItem;
