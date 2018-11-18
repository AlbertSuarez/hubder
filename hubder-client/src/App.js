import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage.js';
import Register from './Components/Register/Register.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">MainPage</Link>
              </li>
              <li>
                <Link to="/match_list">Match List</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default App;
