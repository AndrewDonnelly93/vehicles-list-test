import {
  takeLatest, put, all, call
} from 'redux-saga/effects';

import VehiclesActionTypes from './vehiclesActionTypes';

import {
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
  fetchVehicleSuccess,
  fetchVehicleFailure,
  fetchVehicleStart
} from './vehiclesActions';

export function* fetchVehicles() {
  try {
    const response = yield fetch('http://localhost:9988/api/vehicle')
      .then(response => response.json());
    const vehicles = response.vehicles;
    yield put(fetchVehiclesSuccess(vehicles));
    yield vehicles.forEach(({url}) => put(fetchVehicleStart(url)));
  } catch (error) {
    yield put(fetchVehiclesFailure(error));
  }
}

export function* fetchVehicle(url) {
  try {
    debugger;
    const response = yield fetch(`http://localhost:9988/api/vehicle/${url}`)
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
  yield takeLatest(VehiclesActionTypes.FETCH_VEHICLE_START, fetchVehicle);
}

export function* vehiclesSagas() {
  yield all([
    call(onFetchVehiclesStart),
    call(onFetchVehicleStart),
  ]);
}