import { combineReducers } from 'redux';

import { reducer as error } from './error';
import { reducer as products } from './products';
import { reducer as categories } from './categories';
import { reducer as cart } from './cart';

export default combineReducers({
  error,
  categories,
  products,
  cart,
});
