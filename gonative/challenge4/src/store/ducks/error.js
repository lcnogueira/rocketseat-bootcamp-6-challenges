import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  setError: ['message'],
  hideError: null,
});

export const ErrorTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  visible: false,
  message: null,
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ERROR]: (state, { message }) => state.merge({ visible: true, message }),
  [Types.HIDE_ERROR]: state => state.merge({ visible: false, message: null }),
});
