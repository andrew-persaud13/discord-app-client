import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import AlertNotification from './shared/components/AlertNotification';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/register'>
          <RegisterPage />
        </Route>
        <Route eact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/'>
          <Redirect to='/dashboard' />
        </Route>
      </Switch>
      <AlertNotification message='Weep it' />
    </Router>
  );
};

export default App;
