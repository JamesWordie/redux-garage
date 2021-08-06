export const FETCH_CARS = 'FETCH_CARS';

const fetchCarsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}

export default fetchCarsReducer;
