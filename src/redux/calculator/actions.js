const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  GIT_RESULT: 'GIT_RESULT',
  increase: payload => ({ type: actions.INCREASE, payload }),
  decrease: payload => ({ type: actions.DECREASE, payload }),
  actionSuccess: res => ({
    type: actions.GIT_RESULT,
    payload: res,
  }),
  actionFailed: () => ({
    type: actions.GIT_RESULT,
    payload: 'failed',
  }),
};

export default actions;
