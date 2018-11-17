import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './Components/Register/Register.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/register" exact component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
