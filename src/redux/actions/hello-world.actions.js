import { helloWorldTypes } from '../../data/constants/action-types';

const mapStateToProps = state => ({
  value: state.helloWorld.value,
});

export default mapStateToProps;

export const sayHello = name => dispatch => (
  dispatch({
    type: helloWorldTypes.sayHello,
    payload: name,
  })
);

export const sayGoodBye = name => dispatch => (
  dispatch({
    type: helloWorldTypes.sayGoodBye,
    payload: name,
  })
);
