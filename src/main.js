import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './shared/hoc/private-route.component';
import Login from './views/login/login';
import Home from './views/home/home';
import authenticationMapper, { setAuthenticationStatus } from './redux/actions/authentication.actions';
import { routes } from './data/constants/routes';
import { reduxConnect } from './redux/redux-connector';

class Main extends Component {

  state = {
    isAuthenticated: false,
  }

  static getDerivedStateFromProps(nextProps, state) {
    const credentials = localStorage.getItem('credentials');
    if (credentials) {
      return {
        ...state,
        isAuthenticated: true,
      }
    }
    return {
      ...state,
      isAuthenticated: false,
    };
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Switch>
        <Route path={routes.login} component={Login} />
        <PrivateRoute
          path={routes.home}
          component={Home}
          authenticated={isAuthenticated}
          redirectTo={routes.login}
        />
      </Switch>
    )
  }
}

export default reduxConnect(authenticationMapper, { setAuthenticationStatus }, Main);
