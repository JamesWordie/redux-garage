export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const FETCH_CAR = 'FETCH_CAR';

const fetchCarsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [ ...state, action.payload ];
    case CREATE_CAR:
      return [ ...state, action.payload ];
    case EDIT_CAR:
      return [ ...state, action.payload ];
      default:
      return state;
  }
}

export default fetchCarsReducer;
