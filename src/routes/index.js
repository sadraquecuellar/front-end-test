import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
}
