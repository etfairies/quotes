import React, { Component } from 'react';
import './App.css';

class Quote extends Component {
    render() {
        var quote = {"author": " Edmund Burke", "description": "The only thing necessary for the triumph of evil is for good men to do nothing.", "likes": 34};
        return (
                <div className="Quote">
                    <h3>{quote.description}</h3>
                    <p>{quote.author}</p>
                    <div id="likes">
                        <p>{quote.likes} likes</p>
                    </div>
                </div>
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