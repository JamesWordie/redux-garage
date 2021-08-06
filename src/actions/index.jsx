import { FETCH_CARS, CREATE_CAR, EDIT_CAR, FETCH_CAR } from '../reducers/fetchCarsReducer';
import garageApi from '../api/garageApi';
import history from '../history';

export const fetchCars = (garage) => async (dispatch, getState) => {
  const { garage } = getState();
  const response = await garageApi.get(`/${garage}/cars`);

  dispatch({ type: FETCH_CARS, payload: response.data });
}

export const fetchCar = (id) => async (dispatch, getState) => {
  const response = await garageApi.get(`/cars/${id}`);

  dispatch({ type: FETCH_CAR, payload: response.data });
}

export const createCar = (formValues) => async (dispatch, getState) => {
  const { garage } = getState();
  const response = await garageApi.post(`/${garage}/cars`, { ...formValues, garage });

  dispatch({ type: CREATE_CAR, payload: response.data });
  history.push('/');
}

export const editCar = (id, formValues) => async (dispatch, getState) => {
  const { garage } = getState();
  const response = await garageApi.patch(`/${garage}/cars/${id}`, formValues );

  dispatch({ type: EDIT_CAR, payload: response.data });
  history.push('/');
}
