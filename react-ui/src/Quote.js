import React, { Component } from 'react';
import './stylesheets/App.css';

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
        });
    }

    handleDelete(event) {
        var deleteQuote = window.confirm("Delete this quote?");
        if (deleteQuote) {
            var quoteid = {quoteid: this.props.quote._id};

            fetch('/api/delete', {
                method: 'POST',
                body: JSON.stringify(quoteid),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            });
        }
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
            
                <div>
                    <p>{quote.likes} likes</p>
                    <br/>
                    <input type="button" className="quoteButton" onClick={props.instance.handleLike} value="Like"/>
                    <input type="button" className="quoteButton" onClick={props.instance.handleDelete} value="Delete"/>
                </div>
            </div>
            );
}

export default Quote;