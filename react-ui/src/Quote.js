import React, { Component } from 'react';
import './App.css';

class Quote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <QuoteBox quote={this.props.quote} />
                );
    }
}

function QuoteBox(props) {
    const quote = props.quote;
    return (
            <li>
                <h3>{quote.description}</h3>
                <p>{quote.author}</p>
                <div id="likes">
                    <p>{quote.likes} likes</p>
                </div>
            </li>
            );
}

//class LikeButton extends Component {
//}
//
//class DeleteButton extends Component {
//}

export default Quote;