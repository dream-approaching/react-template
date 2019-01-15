import { put, call, takeEvery, all } from 'redux-saga/effects';
import actions from './actions';
import { gitSearchApi } from './api';

function* searchRequest({ payload }) {
  try {
    const searchResult = yield call(gitSearchApi, payload);
    console.log('searchResult:', searchResult);
    yield put(actions.actionSuccess());
  } catch (error) {
    yield put(actions.actionFailed());
    console.log('err:', error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.INCREASE, searchRequest)]);
}
