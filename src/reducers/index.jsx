import { combineReducers } from "redux";
import fetchCarsReducer from './fetchCarsReducer';

export default combineReducers({
  cars: fetchCarsReducer,
  garage: (state = null, action ) => state
})
