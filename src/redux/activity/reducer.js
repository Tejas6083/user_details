import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
  } from "./type";
  
  const initialState = {
    loading: true,
    eventsList: [],
    error: "",
  };
  
  const userActivity = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EVENTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_EVENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          eventsList: action.payload,
        };
  
      case FETCH_EVENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default userActivity;
  