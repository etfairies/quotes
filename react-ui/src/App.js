import React, { Component } from 'react';
import './stylesheets/App.css';
//import QuotePage from './QuotePage';
//import AddQuote from './AddQuote';
import Content from './Content';

var HomePage = "Home";
var AddQuotePage = "AddQuote";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {page: ''};

        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleAddQuoteClick = this.handleAddQuoteClick.bind(this);
    }

    componentDidMount() {
        this.setState({page: HomePage});
    }

    handleHomeClick() {
        this.setState({page: HomePage});
    }

    handleAddQuoteClick() {
        this.setState({page: AddQuotePage});
    }

    render() {
//        const clicked = this.state.page;

        // Handle routing
        /*       if (clicked === AddQuotePage) {
         return (
         <div className="App">
         <Header instance={this} />
         <AddQuote />
         </div>
         );
         } else {
         return (
         <div className="App">
         <Header instance={this} /> 
         <QuotePage />
         </div>
         );
         }*/
        return (
                <div className="App">
                    <Header instance={this} />
                    <Content page={this.state.page} />
                </div>
                );
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
                    <a href="#" onClick={instance.handleHomeClick}>Home</a>
                    <a href="#" onClick={instance.handleAddQuoteClick}>Add Quote</a>
                </div>
            </div>
            );
}

export default App;
