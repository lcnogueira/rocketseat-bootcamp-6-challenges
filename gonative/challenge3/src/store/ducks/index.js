import { combineReducers } from 'redux';

import login from './login';
import users from './users';

export default combineReducers({
  login,
  users,
});
