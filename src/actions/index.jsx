import { FETCH_CARS, CREATE_CAR } from '../reducers/fetchCarsReducer';
import garageApi from '../api/garageApi';
// import history from '../history';

export const fetchCars = (garage) => async dispatch => {
  const response = await garageApi.get(`/${garage}/cars`);

  dispatch({ type: FETCH_CARS, payload: response.data });
}

export const createCar = (formValues) => async (dispatch, getState) => {
  const { garage } = getState();
  const response = await garageApi.post(`/${garage}/cars`, { ...formValues, garage });

  dispatch({ type: CREATE_CAR, payload: [response.data] });
  // history.push('/');
}
