import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from './main';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </Provider>,
  document.getElementById('body'),
);
