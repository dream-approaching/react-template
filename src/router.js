import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Login from 'pages/login/login';
import BasicLayout from './layouts/basicLayout';

function RouterConfig() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" render={() => <BasicLayout />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
