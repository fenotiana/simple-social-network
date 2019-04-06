import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const developmentComposer = compose(
  applyMiddleware(reduxThunk, logger),
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const productionComposer = compose(
  applyMiddleware(reduxThunk),
);

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development' ? developmentComposer : productionComposer,
);

export default store;
