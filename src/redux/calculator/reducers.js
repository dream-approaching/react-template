import actions from './actions';

const initialState = {
  value: 0,
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case actions.INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };
    case actions.DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
