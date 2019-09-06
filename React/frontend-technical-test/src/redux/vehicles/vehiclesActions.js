import VehiclesActionTypes from './vehiclesActionTypes';

export const fetchVehiclesStart = () => ({
  type: VehiclesActionTypes.FETCH_VEHICLES_START,
});

export const fetchVehiclesSuccess = (vehicles) => ({
  type: VehiclesActionTypes.FETCH_VEHICLES_SUCCESS,
  payload: vehicles,
});

export const fetchVehiclesFailure = (error) => ({
  type: VehiclesActionTypes.FETCH_VEHICLES_FAILURE,
  payload: error,
});

export const fetchVehicleStart = () => ({
  type: VehiclesActionTypes.FETCH_VEHICLE_START,
});

export const fetchVehicleSuccess = (vehicle) => ({
  type: VehiclesActionTypes.FETCH_VEHICLE_SUCCESS,
  payload: vehicle,
});

export const fetchVehicleFailure = (error) => ({
  type: VehiclesActionTypes.FETCH_VEHICLE_FAILURE,
  payload: error,
});
