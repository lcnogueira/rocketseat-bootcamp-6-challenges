import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';

import Routes from '~/routes';
import { setNavigator } from './services/navigation';
import ErrorMessage from '~/components/ErrorMessage';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes ref={setNavigator} />
      <ErrorMessage />
    </PersistGate>
  </Provider>
);

export default App;
