import {takeLatest, put, call} from 'redux-saga/effects';
import {loginRequest, loginSuccess, loginFailure} from '../slices/authSlice';
import {AuthService} from '../../services/AuthService';

function* loginSaga(action: ReturnType<typeof loginRequest>) {
  try {
    const response = yield call(AuthService.login, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchAuth() {
  yield takeLatest(loginRequest.type, loginSaga);
}
