const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_REPOSITORIES_REQUEST':
      return { ...state, loading: true };
    case 'LOAD_REPOSITORIES_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case 'LOAD_REPOSITORIES_FAILURE':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
