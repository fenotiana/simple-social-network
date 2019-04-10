import { combineReducers } from 'redux';
import helloWorld from './hello-world.reducer';
import authentication from './authentication.reducer';

const combinedReducers = combineReducers({
  authentication,
  helloWorld,
});

export default combinedReducers;
