import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import './config/reactotron';
import store from './store';
import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import './main.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} autoClose={2000} />
    </Provider>
  );
}

export default App;
