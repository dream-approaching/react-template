import { all } from 'redux-saga/effects';
import githubSearchSagas from './githubSearch/sagas';
import ecommerceSaga from './ecommerce/saga';

export default function* rootSaga(getState) {
  console.log('getState:', getState);
  yield all([githubSearchSagas(), ecommerceSaga()]);
}
