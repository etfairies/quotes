import React, { Component }
from 'react';
import './App.css';
import Quote from './Quote';

class QuotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: null,
            message: null,
            fetching: true
        };
    }

    componentDidMount() {
        fetch('/quotes')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`status ${response.status}`);
                    }
                    return response.json();
                })
                .then(json => {
                    this.setState({
                        quotes: json.quotes,
                        message: null,
                        fetching: false
                    });
                }).catch(e => {
            this.setState({
                quotes: null,
                message: `API call failed: ${e}`,
                fetching: false
            });
        });
    }

    render() {
        return (
                <div className="Quotelist">
                    <QuoteList quotes={this.state.quotes}
                               message="{this.state.message}"/>
                
                </div>
                );
    }
}

function QuoteList(props) {
    const quotes = props.quotes;
    return (
            <div>
                <p>{props.message}</p>
                <ul>
                    {quotes.map((quote) =>
                                <Quote key={quote._id} quote={quote}/>
                                )}
                </ul>
            </div>);
}
export default QuotePage;
