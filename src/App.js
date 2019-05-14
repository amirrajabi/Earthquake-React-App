import React, { Component } from 'react';
import './App.css';
import Data from './containers/dataContainer';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Data />
            </div>
        );
    }
}

export default App;
