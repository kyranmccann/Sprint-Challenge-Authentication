import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LoginView, RegisterView, JokesView } from './views';
import { NavBar, Welcome } from './components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Route exact path='/' component={Welcome} />
      <Route path='/signup' component={RegisterView} />
      <Route path='/signin' component={LoginView} />
      <Route path='/jokes' component={JokesView} />
      </div>
    );
  }
}

export default withRouter(App);
