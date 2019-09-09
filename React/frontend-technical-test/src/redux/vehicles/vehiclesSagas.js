import {
  takeLatest, put, all, call, takeEvery
} from 'redux-saga/effects';

import VehiclesActionTypes from './vehiclesActionTypes';

import {
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
  fetchVehicleSuccess,
  fetchVehicleFailure,
  fetchVehicleStart
} from './vehiclesActions';

const apiUrlRoot = 'http://localhost:9988';

export function* fetchVehicles() {
  try {
    const response = yield fetch(`${apiUrlRoot}/api/vehicle`)
      .then(response => response.json());
    const vehicles = response.vehicles;
    yield put(fetchVehiclesSuccess(vehicles));
    yield all(vehicles.map((vehicle) => put(fetchVehicleStart(vehicle))));
  } catch (error) {
    yield put(fetchVehiclesFailure(error));
  }
}

export function* fetchVehicle(action) {
  try {
    const response = yield fetch(`${apiUrlRoot}${action.payload}`)
      .then(response => response.json());
    yield put(fetchVehicleSuccess(response));
  } catch (error) {
    const test = error;
    console.log('err ', error);
    debugger;
    yield put(fetchVehicleFailure(error));
  }
}

export function* onFetchVehiclesStart() {
  yield takeLatest(VehiclesActionTypes.FETCH_VEHICLES_START, fetchVehicles);
}

export function* onFetchVehicleStart() {
  yield takeEvery(VehiclesActionTypes.FETCH_VEHICLE_START, fetchVehicle);
}

export function* vehiclesSagas() {
  yield all([
    call(onFetchVehiclesStart),
    call(onFetchVehicleStart),
  ]);
}