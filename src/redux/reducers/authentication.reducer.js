import { authenticationTypes } from '../../data/constants/action-types';

const initialState = {
  connected: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationTypes.setAuthenticated:
      return {
        ...state,
        connected: action.payload,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
