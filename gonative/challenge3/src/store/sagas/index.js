import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';

import { Creators as LoginActions, Types as LoginTypes } from '~/store/ducks/login';
import { Creators as UsersActions, Types as UserTypes } from '~/store/ducks/users';

function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    // Put: similar to dispatch
    yield put(LoginActions.loginSuccess(username));

    navigate('Main', { username });
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UsersActions.addUserFailure('Duplicated User'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        avatar_url: data.avatar_url,
        login: data.login,
        bio: data.bio,
        coord: action.payload.coord,
      };

      yield put(UsersActions.addUserSuccess(userData));
      // yield put(ModalActions.hideModal());
    }
  } catch (err) {
    yield put(UsersActions.addUserFailure('Error when trying to add user!'));
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(UserTypes.ADD_REQUEST, addUser),
  ]);
}
