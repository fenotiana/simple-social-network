import React, { Component } from 'react';

import { routes } from '../../data/constants/routes';
import { setAuthenticationStatus } from '../../redux/actions/authentication.actions';

class Login extends Component {

  handleClick = () => {
    localStorage.setItem('credentials', 'misy');
    this.props.history.replace(routes.home);
  }

  render() {
    return (
      <div>
        <p>Login</p>
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default Login;
