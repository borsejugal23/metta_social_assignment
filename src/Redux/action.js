import * as actionTypes from './actionTypes';

export const searchRequest = (query) => ({
  type: actionTypes.SEARCH_REQUEST,
  payload: query,
});

export const searchSuccess = (data) => ({
  type: actionTypes.SEARCH_SUCCESS,
  payload: data,
});

export const searchFailure = (error) => ({
  type: actionTypes.SEARCH_FAILURE,
  payload: error,
});
