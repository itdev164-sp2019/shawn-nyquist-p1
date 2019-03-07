import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import RandomPage from './Pages/random';
import SelectionPage from './Pages/select';
import Button from './components/Button/button'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Beer Selector 2000
          <a href="/" className="HomeLink">Home</a>
        </header>
        <Button />
        
    
      </div>   
    );
  }
}

export default App;

