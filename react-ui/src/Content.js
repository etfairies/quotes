import React, { Component } from 'react';
import './stylesheets/App.css';
import QuotePage from './QuotePage';
import AddQuote from './AddQuote';

var HomePage = "Home";
var AddQuotePage = "AddQuote";

class Content extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var page = this.props.page;

        // Handle routing
        if (page === AddQuotePage) {
            return (
                    <div className="Content">
                        <AddQuote />
                    </div>
                    );
        } else {
            return (
                    <div className="Content">
                        <QuotePage />
                    </div>
                    );
        }
    }
}

export default Content;