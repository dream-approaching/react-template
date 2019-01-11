const initialState = {
  news: null,
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_NEWS':
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
}
