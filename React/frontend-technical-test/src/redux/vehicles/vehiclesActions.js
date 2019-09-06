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
