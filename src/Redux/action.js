import axios from "axios";
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType";

const url = "https://restcountries.com/v3.1";
let debounceTimer;

export const getCountries = (query = "") => (dispatch) => {
  console.log("query", query);
  clearTimeout(debounceTimer);

  if (!query) {
    dispatch({ type: GET_SUCCESS, payload: { data: [], totalCount: 0 } }); 
    return;
  }

  dispatch({ type: GET_REQUEST });

  debounceTimer = setTimeout(() => {
    axios
      .get(`${url}/currency/${query.toLowerCase()}`)
      .then((res) => {
        dispatch({ type: GET_SUCCESS, payload: { data: res.data, totalCount: res.data.length } });
      })
      .catch((err) => {
        console.log(err);
        // You can handle different types of errors here if needed
        dispatch({ type: GET_FAILURE });
      });
  }, 600);
};
