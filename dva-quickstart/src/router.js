import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import login from './routes/login';
import Detailed from './routes/Detailed';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/login" exact component={login} />
        <Route path="/Detailed" exact component={Detailed} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
