import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authAction } from '../slice/authSlice';
import { ACCESS_TOKEN } from '~/constan';
import { push } from 'redux-first-history';

function* handleLogin(payload) {
  try {
    localStorage.setItem(ACCESS_TOKEN, 'cc');
    //
    yield delay(1000);
    yield put(authAction.loginSuccess(payload));
    yield put(push('/home'));

    console.log('handleLogin', payload);
  } catch (error) {
    yield put(authAction.loginFaled(error.message));
  }
}

function* handleLogout() {
  console.log('handleLogout');
  yield localStorage.removeItem(ACCESS_TOKEN);
  yield put(push('/login'));
}

function* watchLoginFlow() {
  console.log('cc');

  while (true) {
    const isLoggedIn = localStorage.getItem(ACCESS_TOKEN);
    if (!isLoggedIn) {
      const action = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authAction.logout.type);
    yield call(handleLogout);
  }
}

function* handleSetUser() {
  yield;
}

export default function* authSaga() {
  yield fork(handleSetUser);
  yield fork(watchLoginFlow);
}
