import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadProductsRequest: ['category'],
  loadProductsSuccess: ['data'],
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
});
