import Sound from 'react-sound';

/**
 * Action Types
 */
export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
};

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  duration: null,
};

/**
 * Reducers
 */
export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        list: action.payload.list,
        status: Sound.status.PLAYING,
      };
    case Types.PLAY: {
      return { ...state, status: Sound.status.PLAYING };
    }
    case Types.PAUSE: {
      return { ...state, status: Sound.status.PAUSED };
    }
    case Types.PREV: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);

      const prev = state.list[currentIndex - 1];

      if (prev) {
        return { ...state, currentSong: prev, status: Sound.status.PLAYING };
      }

      return state;
    }
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);

      const next = state.list[currentIndex + 1];

      if (next) {
        return { ...state, currentSong: next, status: Sound.status.PLAYING };
      }

      return state;
    }
    case Types.PLAYING: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loadSong: (song, list) => ({
    type: Types.LOAD,
    payload: { song, list },
  }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
  prev: () => ({ type: Types.PREV }),
  next: () => ({ type: Types.NEXT }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration },
  }),
};
