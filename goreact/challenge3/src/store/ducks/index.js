import { combineReducers } from 'redux';

import users from './users';
import templates from './templates';
import modal from './modal';

export default combineReducers({
  users,
  templates,
  modal,
});
