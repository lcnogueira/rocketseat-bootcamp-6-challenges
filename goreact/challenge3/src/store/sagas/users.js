import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(u => u.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Duplicated user'));
    } else {
      const userData = {
        id: data.id,
        login: data.login,
        avatar: data.avatar_url,
        name: data.name,
        url: data.url,
        coord: action.payload.coord,
      };

      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('Not found user!'));
  }
}
