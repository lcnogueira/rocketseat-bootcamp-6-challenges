import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';
import ErrorActions from '~/store/ducks/error';

export function* loadProducts({ category }) {
  try {
    const response = yield call(
      api.get,
      category ? `category_products/${category.id}` : 'products',
    );

    yield put(
      ProductsActions.loadProductsSuccess(
        category ? response.data.products : response.data,
      ),
    );
  } catch (error) {
    yield put(ErrorActions.setError('Error on loading products'));
  }
}
