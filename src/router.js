import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Login from 'pages/login/login';
import ErrorBoundary from 'components/errorBoundary/errorBoundary';
import { store } from './redux/store';
import BasicLayout from './layouts/basicLayout';

function RouterConfig() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" render={() => <BasicLayout />} />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default RouterConfig;
