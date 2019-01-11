const initialState = {
  user: null,
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
