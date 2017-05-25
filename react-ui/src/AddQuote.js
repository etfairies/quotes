import React, { Component }
from 'react';
import './App.css';

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.sendQuote = this.sendQuote.bind(this);
    }

    sendQuote(event) {

    }

    render() {
        return(
                <form onSubmit={this.sendQuote}>
                    <input type="text" name="author" />
                    <input type="text" name="description" />
                </form>
                );
    }
}

export default AddQuote;