import {
  takeLatest, put, all, call
} from 'redux-saga/effects';

import VehiclesActionTypes from './vehiclesActionTypes';

import {
  fetchVehiclesSuccess,
  fetchVehiclesFailure
} from './vehiclesActions';

export function* fetchVehicles() {
  try {
    const response = yield fetch('http://localhost:9988/api/vehicle')
      .then(response => response.json());
    yield put(fetchVehiclesSuccess(response.vehicles));
  } catch (error) {
    yield put(fetchVehiclesFailure(error));
  }
}

export function* onFetchVehiclesStart() {
  yield takeLatest(VehiclesActionTypes.FETCH_VEHICLES_START, fetchVehicles);
}

export function* vehiclesSagas() {
  yield all([
    call(onFetchVehiclesStart),
  ]);
}