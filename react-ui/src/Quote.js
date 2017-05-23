import React, { Component } from 'react';
import './App.css';

class Quote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <li>
                    <h3>{this.props.description}</h3>
                    <p>{this.props.author}</p>
                    <div id="likes">
                        <p>{this.props.likes} likes</p>
                    </div>
                </li>
                );
    }
}

//class LikeButton extends Component {
//    render() {
//        return null;
//    }
//}
//
//class DeleteButton extends Component {
//    render() {
//        return null;
//    }
//}

export default Quote;