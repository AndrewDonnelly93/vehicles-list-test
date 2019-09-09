import {
  takeLatest, put, all, call, take
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

export function* fetchVehicle(url) {
  try {
    const response = yield fetch(`${apiUrlRoot}${url}`)
      .then(response => response.json());
    yield put(fetchVehicleSuccess(response));
  } catch (error) {
    yield put(fetchVehicleFailure(error));
  }
}

export function* onFetchVehiclesStart() {
  yield takeLatest(VehiclesActionTypes.FETCH_VEHICLES_START, fetchVehicles);
}

export function* onFetchVehicleStart() {
  debugger;
  yield take(VehiclesActionTypes.FETCH_VEHICLE_START, fetchVehicle);
}

export function* vehiclesSagas() {
  yield all([
    call(onFetchVehiclesStart),
    call(onFetchVehicleStart),
  ]);
}