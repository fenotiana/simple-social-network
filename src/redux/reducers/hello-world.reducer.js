import { helloWorldTypes } from '../../data/constants/action-types';

const initialState = {
  value: '',
};

const helloWorldReducer = (state = initialState, action) => {
  switch (action.type) {
    case helloWorldTypes.sayHello:
      return {
        ...state,
        value: `Hello ${action.payload}`,
      };
    case helloWorldTypes.sayGoodBye:
      return {
        ...state,
        value: `Good bye ${action.payload}`,
      };
    default:
      return state;
  }
};

export default helloWorldReducer;
