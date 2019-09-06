import { all, call } from 'redux-saga/effects';
import { vehiclesSagas } from './vehicles/vehiclesSagas';

export default function* rootSaga() {
  yield all([
    call(vehiclesSagas),
  ]);
}