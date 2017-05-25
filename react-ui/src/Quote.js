import React, { Component } from 'react';
import './App.css';

class Quote extends Component {
    constructor(props) {
        super(props);

        this.handleLike = this.handleLike.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleLike(event) {

        var quoteid = {quoteid: this.props.quote._id};

        fetch('/api/like', {
            method: 'POST',
            body: JSON.stringify(quoteid),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).then(function (response) {
            return response.json();
        });
    }

    handleDelete(event) {
        alert("Clicked Delete");
    }

    render() {
        return (
                <QuoteBox quote={this.props.quote} instance={this} />

                );
    }
}

function QuoteBox(props) {
    const quote = props.quote;
    return (
            <div id="Quote">
                <h3>{quote.description}</h3>
                <p>{quote.author}</p>
            
                <div id="QuoteButtons">
                    <p>{quote.likes} likes</p>
        
                    <LikeButton quote={quote} instance={props.instance} />
                    <DeleteButton quote={quote} instance={props.instance}/>
                </div>
            </div>
            );
}

function LikeButton(props) {
    const quote = props.quote;
    return (
            <form onSubmit={props.instance.handleLike}>
                <button type="submit">Like</button>
            </form>
            );
}

function DeleteButton(props) {
    const quote = props.quote;
    return (
            <form onSubmit={props.instance.handleDelete}>
                <button type="submit">Delete</button>
            </form>
            );
}

export default Quote;