import React, { Component } from 'react';
import './stylesheets/addquote.css';

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {author: '', description: ''};

        this.sendQuote = this.sendQuote.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        });

        this.setState({
            author: '',
            description: ''
        });
        alert('Quote added.');
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
                <div>
                    <h2>Add new quote</h2><br/>
                
                    <Author instance={this}/><br/>
                    <Description instance={this} /><br/>
                    <input type="button" id="addQuoteButton" value="Submit" onClick={this.sendQuote}/>
                
                </div>
                );
    }
}

function Author(props) {
    var instance = props.instance;
    return (
            <div>
                <label for="author">Author</label><br/>
                <input type="text" id="author" name="author" onChange={instance.handleInputChange} value={instance.state.author}/>
            </div>
            );
}

function Description(props) {
    var instance = props.instance;
    return (
            <div>
                <label for="description">Quote</label><br/>
                <input type="text" id="description" name="description" value={instance.state.description} onChange={instance.handleInputChange}/>
            </div>
            );
}


export default AddQuote;