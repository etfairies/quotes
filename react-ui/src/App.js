import React, { Component } from 'react';
import './App.css';
import QuotePage from './QuotePage';
import AddQuote from './AddQuote';

var home = "Home";
var add = "AddQuote";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {page: ''}

        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleAddQuoteClick = this.handleAddQuoteClick.bind(this);
    }

    componentDidMount() {
        this.setState({page: home});
    }
    
    handleHomeClick() {
        this.setState({page: home});
    }

    handleAddQuoteClick() {
        this.setState({page: add});
    }

    render() {
        const page = this.state.page;

        if (page === add) {
            return (
                    <div className="App">
                        <Header instance={this} />
                        <AddQuote />
                    </div>
                    );
        }
        else {
            return (
                    <div className="App">
                        <Header instance={this} /> 
                        <QuotePage />
                    </div>
                    );
        }
    }
}

function Header(props) {
    var instance = props.instance;
    return(
            <div>
                <div className="App-header">
                    <h1>Quotes</h1>
                </div>
                <div className="Navbar">
                    <a onClick={instance.handleHomeClick}>Home</a>
                    <a onClick={instance.handleAddQuoteClick}>Add Quote</a>
                </div>
            </div>
            );
}

export default App;
