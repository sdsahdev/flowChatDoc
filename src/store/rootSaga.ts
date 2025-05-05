import {all} from 'redux-saga/effects';

// Import your sagas here
// Example: import { watchUserSaga } from './sagas/userSaga';

export default function* rootSaga() {
  yield all([
    // Add your sagas here
    // Example: watchUserSaga(),
  ]);
}
