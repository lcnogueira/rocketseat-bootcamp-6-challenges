export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

const INITIAL_STATE = {
  visible: false,
  coord: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        visible: true,
        coord: action.payload.coord,
      };
    case Types.HIDE:
      return {
        visible: false,
        coord: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  showModal: coord => ({
    type: Types.SHOW,
    payload: { coord },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
