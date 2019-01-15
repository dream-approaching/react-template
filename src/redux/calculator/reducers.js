import actions from './actions';

const initialState = {
  value: 0,
  result: '',
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
    case actions.GIT_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
