import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const privateRoute = ({ component: Component, authenticated, redirectTo, ...rest }) => (
  <Route
    {...rest}
    render={() => (
      authenticated ? (
        <Component />
      ) : <Redirect to={redirectTo} />
    )}
  />
);

privateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
};

privateRoute.defaultProps = {
  authenticated: false,
};

export default privateRoute;
