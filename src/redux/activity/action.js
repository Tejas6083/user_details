import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
  } from "./type";
  
  export const fetchEventsRequest = () => {
    return {
      type: FETCH_EVENTS_REQUEST,
    };
  };
  
  export const fetchEventsSuccess = (activity) => {
    return {
      type: FETCH_EVENTS_SUCCESS,
      payload: activity,
    };
  };
  
  export const fetchEventsFailure = (error) => {
    return {
      type: FETCH_EVENTS_FAILURE,
      payload: error,
    };
  };
  