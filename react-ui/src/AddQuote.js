import React, { Component }
from 'react';
import './stylesheets/addquote.css';

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {author: '', description: ''};

        this.sendQuote = this.sendQuote.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    static contextTypes = {
        router: React.PropTypes.object.isRequired
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
                    <h2>Add new quote</h2>
                    <div>
                        <label for="author">Author</label><br/>
                        <input type="text" id="author" name="author" onChange={this.handleInputChange} value={this.state.author}/>
                        <br/>
                        <label for="description">Quote</label><br/>
                        <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleInputChange}/>
                        <br/>
                        <input type="button" id="addQuoteButton" value="Submit" onClick={this.sendQuote}/>
                
                    </div>
                </div>
                );
    }
}

export default AddQuote;