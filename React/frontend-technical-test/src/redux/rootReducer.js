import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import vehiclesReducer from './vehicles/vehiclesReducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});

export default persistReducer(persistConfig, rootReducer);
