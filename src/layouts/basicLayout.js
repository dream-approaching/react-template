import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/home/home';
import News from 'pages/news/news';
import history from 'utils/history';
import { getLocalStorage } from 'utils/utils';
import GlobalHeader from './globalHeader';
import GlobalFooter from './globalFooter';

class BasicLayout extends React.Component {
  componentDidMount() {
    console.log(getLocalStorage('user'));
    if (!getLocalStorage('user')) {
      history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <GlobalHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
        </Switch>
        <GlobalFooter />
      </div>
    );
  }
}

export default BasicLayout;
