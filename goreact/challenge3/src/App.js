import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import './main.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
