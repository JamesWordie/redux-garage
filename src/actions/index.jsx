import { FETCH_CARS } from '../reducers/fetchCarsReducer';
import garageApi from '../api/garageApi';

export const fetchCars = (garage) => async dispatch => {
  const response = await garageApi.get(`/${garage}/cars`);

  dispatch({ type: FETCH_CARS, payload: response.data });
}

export const createCar = (formValues) => async dispatch => {
  console.log(formValues);
  // const response = await garageApi.post(`/${garage}/cars`, {
  //   headers: {
  //     Content-Type: 'application/sjon'
  //   },
  //   body: {

  //   }
  // });

  // dispatch({ type: CREATE_CAR, payload: response.data })
}
