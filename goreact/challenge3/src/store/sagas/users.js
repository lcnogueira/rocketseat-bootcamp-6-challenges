import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  let message = 'User successfully added';
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(u => u.id === data.id));

    if (isDuplicated) {
      message = 'Duplicated User';
      yield put(UserActions.addUserFailure(message));
      toast.error(message);
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
      toast.success(message);
    }
  } catch (err) {
    message = 'User not found';
    yield put(UserActions.addUserFailure(message));
    toast.error(message);
  }
}
