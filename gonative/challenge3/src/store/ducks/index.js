import { combineReducers } from 'redux';

import login from './login';
import users from './users';
import modal from './modal';

export default combineReducers({
  login,
  users,
  modal,
});
