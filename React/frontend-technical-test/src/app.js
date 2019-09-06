import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import store from './redux/store';
import VehicleList from './components/VehicleList';

const app = (
  <Provider store={store}>
      <VehicleList />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));