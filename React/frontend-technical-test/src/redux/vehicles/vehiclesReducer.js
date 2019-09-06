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
    case VehiclesActionTypes.FETCH_VEHICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default vehiclesReducer;