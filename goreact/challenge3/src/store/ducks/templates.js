/**
 * Types
 */
export const Types = {
  CHOOSE: 'templates/CHOOSE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  available: [
    'streets-v11',
    'outdoors-v11',
    'light-v10',
    'dark-v10',
    'satellite-v9',
    'satellite-streets-v11',
    'navigation-preview-day-v4',
    'navigation-preview-night-v4',
    'navigation-guidance-day-v4',
    'navigation-guidance-night-v4',
    'basic-v9',
  ],
  choosen: 'streets-v11',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHOOSE:
      return { ...state, choosen: action.payload.template };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  chooseTemplate: template => ({
    type: Types.CHOOSE,
    payload: { template },
  }),
};
