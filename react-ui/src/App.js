import React, { Component } from 'react';
import './App.css';
import QuotePage from './QuotePage';

class App extends Component {

    render() {
        return (
                <div className="App">
                    <div className="App-header">
                        <h1>Quotes</h1>
                    </div>
                    <div class="content">
                        <QuotePage />
                    </div>
                </div>
                );
    }
}

export default App;
