import { combineReducers } from 'redux';
import helloWorld from './hello-world.reducer';

const combinedReducers = combineReducers({
  helloWorld,
});

export default combinedReducers;
