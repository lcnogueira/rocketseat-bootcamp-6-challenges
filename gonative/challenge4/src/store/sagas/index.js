import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from '~/store/ducks/products';
import { CategoriesTypes } from '~/store/ducks/categories';

import { loadProducts } from './products';
import { loadCategories } from './categories';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
  ]);
}
