import { combineReducers } from 'redux';

import users from './users';
import templates from './templates';

export default combineReducers({
  users,
  templates,
});
