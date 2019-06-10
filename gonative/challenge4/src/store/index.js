import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './ducks';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line no-console
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const saglaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [saglaMiddleware];

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    // eslint-disable-next-line no-console
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

saglaMiddleware.run(rootSaga);

export { store, persistor };
