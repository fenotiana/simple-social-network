import { authenticationTypes } from '../../data/constants/action-types';

const mapStateToPtops = state => ({
  connected: state.authentication.connected,
});

export default mapStateToPtops;

export const setAuthenticationStatus = status => dispatch => (
  dispatch({
    type: authenticationTypes.type,
    payload: status,
  })
);
