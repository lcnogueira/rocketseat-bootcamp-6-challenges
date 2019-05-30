/**
 * Action Types
 */
export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

/**
 * Reducers
 */
export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  getPlayListsRequest: () => ({ type: Types.GET_REQUEST }),

  getPlayListsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
