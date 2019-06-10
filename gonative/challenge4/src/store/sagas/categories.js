import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';
import ErrorActions from '~/store/ducks/error';

export function* loadCategories() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(CategoriesActions.loadCategoriesSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Error on loading categories'));
  }
}
