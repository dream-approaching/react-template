import actions from './actions';

const initialState = {
  globalLoading: false,
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case actions.SET_GLOBAL_LOADING:
      return {
        ...state,
        globalLoading: action.payload,
      };
    default:
      return state;
  }
}
