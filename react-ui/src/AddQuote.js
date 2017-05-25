import React, { Component }
from 'react';
import './App.css';

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {author: '', description: ''};

        this.sendQuote = this.sendQuote.bind(this);
    }

    sendQuote(event) {
        var quote = {author: this.state.author,
            description: this.state.description};

        fetch('/api/add', {
            method: 'POST',
            body: JSON.stringify(quote),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).then(function (response) {
            return response.json();
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
                <form onSubmit={this.sendQuote}>
                    <input type="text" name="author" onChange={this.handleInputChange}/>
                    <input type="text" name="description" onChange={this.handleInputChange}/>
                </form>
                );
    }
}

export default AddQuote;