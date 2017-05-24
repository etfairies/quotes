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
            <div id="Quote">
                <h3>{quote.description}</h3>
                <p>{quote.author}</p><br/>
                <p>{quote.likes} likes</p>
            
                <div id="QuoteButtons">
                    <LikeButton quote={quote} />
                    <DeleteButton quote={quote} />
                </div>
            </div>
            );
}

function LikeButton(props) {
    const quote = props.quote;
    return (
            <form name="addlike" method="post" action="/like">
                <input type="hidden" name="quoteid" value={quote._id} />
                <button type="submit">Like</button>
            </form>
            );
}


function DeleteButton(props) {
    const quote = props.quote;
    return (
            <form name="delete" method="post" action="/delete">
                <input type="hidden" name="quoteid" value={quote._id} />
                <button type="submit">Delete</button>
            </form>
            );
}

export default Quote;