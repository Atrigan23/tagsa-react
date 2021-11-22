import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import UserPage from './pages/UserPage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () =>
{
  return(
  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={LoginPage}/>
      <Route path="/user" component={UserPage}/>
      <Route path="/home" component={HomePage}/>
    </Switch>
  </Router>
  
  );
};
export default App;
