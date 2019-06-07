import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from '~/store/ducks/products';

import { load } from './products';

export default function* rootSaga() {
  return yield all([takeLatest(ProductsTypes.LOAD_REQUEST, load)]);
}
