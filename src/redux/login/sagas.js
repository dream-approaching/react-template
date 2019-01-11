import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';

const onSearchReqeust = async () => {};

function* searchRequest({ payload }) {
  const { searcText, page } = payload;
  try {
    const searchResult = yield call(onSearchReqeust, searcText, page);
    if (searchResult.items && searchResult.total_count) {
      yield put(actions.gitSearchSuccess(searchResult.items, searchResult.total_count, page));
    } else {
      yield put(actions.gitSearchSuccess());
    }
  } catch (error) {
    yield put(actions.gitSearchSuccess());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.GIT_SEARCH, searchRequest)]);
}
