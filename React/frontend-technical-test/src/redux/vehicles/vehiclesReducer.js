import VehiclesActionTypes from './vehiclesActionTypes';

const INITIAL_STATE = {
  vehicles: null,
  error: null
};

const vehiclesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VehiclesActionTypes.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
        error: null,
      };
    case VehiclesActionTypes.FETCH_VEHICLE_SUCCESS:
      const {id, price, description} = action.payload;
      const vehicle = state.vehicles.find(({id: vehicleId}) => vehicleId  === id);
      vehicle.price = price;
      vehicle.description = description;
      return {
        ...state,
        vehicles: {...state.vehicles, vehicle},
        error: null,
      };
    case VehiclesActionTypes.FETCH_VEHICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case VehiclesActionTypes.FETCH_VEHICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default vehiclesReducer;