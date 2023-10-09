import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authAction } from '../slice/authSlice';
import { ACCESS_TOKEN } from '~/constan';
import { push } from 'redux-first-history';
import { infosAction } from '../slice/infoSlice';

function* handleGetInfo(payload) {
  try {
    const fechApi = () => {};

    yield put(infosAction.get(payload));
  } catch (error) {}
}

export default function* infoSaga() {
  yield fork(handleGetInfo);
}
