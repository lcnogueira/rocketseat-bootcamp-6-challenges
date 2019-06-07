import { combineReducers } from 'redux';

import { reducer as error } from './error';
import { reducer as products } from './products';
import { reducer as categories } from './categories';

export default combineReducers({
  error,
  categories,
  products,
});
