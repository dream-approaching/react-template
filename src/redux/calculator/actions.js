const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  increase: () => ({ type: actions.INCREASE }),
  decrease: () => ({ type: actions.DECREASE }),
};

export default actions;
