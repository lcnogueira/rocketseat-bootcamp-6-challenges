import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';
import ErrorActions from '~/store/ducks/error';

export function* loadProducts() {
  try {
    const response = yield call(api.get, 'products');

    yield put(ProductsActions.loadProductsSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Error on loading products'));
  }
}
