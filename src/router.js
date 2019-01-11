import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Home from 'pages/home/index';
import News from 'pages/news/index';

function RouterConfig() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/news" component={News} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
