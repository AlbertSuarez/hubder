import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Register from './Components/Register/Register.js'
//import MainPage from './Components/MainPage/MainPage.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*<Route path="/home" exact component={MainPage} />*/}
          <Route path="/register" exact component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
