import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
