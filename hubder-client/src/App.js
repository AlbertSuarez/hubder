import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage.js'
import Register from './Components/Register/Register.js'
import Login from './Components/Login/Login.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact component={MainPage} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
