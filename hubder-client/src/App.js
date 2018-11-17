import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default App;
