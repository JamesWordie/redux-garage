export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';

const fetchCarsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case CREATE_CAR:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}

export default fetchCarsReducer;
