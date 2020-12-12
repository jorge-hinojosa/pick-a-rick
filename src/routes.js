import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from 'components/SearchPage';
import Profile from 'components/Profile';

export default (
  <Switch>
    <Route component={SearchPage} exact path="/" />
    <Route component={Profile} path="/profile/:id" />
  </Switch>
);
