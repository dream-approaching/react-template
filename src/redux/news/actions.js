const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  gitSearch: value => ({
    type: actions.INCREASE,
    payload: value,
  }),
  onPageChange: value => ({
    type: actions.DECREASE,
    payload: value,
  }),
};

export default actions;
