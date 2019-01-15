const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  GIT_RESULT: 'GIT_RESULT',
  increase: payload => ({ type: actions.INCREASE, payload }),
  decrease: () => ({ type: actions.DECREASE }),
  actionSuccess: () => ({
    type: actions.GIT_RESULT,
    payload: 'success',
  }),
  actionFailed: () => ({
    type: actions.GIT_RESULT,
    payload: 'failed',
  }),
};

export default actions;
