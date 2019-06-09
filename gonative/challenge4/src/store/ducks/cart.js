import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addProduct: ['product'],
  removeProduct: ['product'],
  updateProduct: ['id', 'quantity'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: (state, { product }) => {
    const found = state.data.find(data => data.id === product.id);
    if (found) {
      return {
        data: state.data.map(item => (item.id === found.id
          ? { ...item, quantity: item.quantity + 1 }
          : item)),
      };
    }

    return { data: [...state.data, { ...product, quantity: 1 }] };
  },
  [Types.REMOVE_PRODUCT]: (state, { product }) => state.merge({ data: state.data.filter(data => data.id !== product.id) }),
});
