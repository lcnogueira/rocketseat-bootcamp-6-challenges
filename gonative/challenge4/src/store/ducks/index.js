import { combineReducers } from 'redux';

import { reducer as products } from './products';

export default combineReducers({
  products,
});
