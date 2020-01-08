import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

// import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
