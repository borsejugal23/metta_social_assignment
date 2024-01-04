import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType";

const initialState = {
  isLoading: false,
  countries: [], 
  isError: false,
  
};


export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_SUCCESS:
      return { ...state, isLoading: false, isError: false, countries: payload.data };
    case GET_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
