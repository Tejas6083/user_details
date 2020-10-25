import {
  fetchEventsFailure,
  fetchEventsSuccess,
  fetchEventsRequest,
} from "./action";
import {tasks} from "../../demo-data/tasks";

const fetchActivity = () => {
  return (dispatch) => {
    dispatch(fetchEventsRequest);
    return tasks()
      .then((response) => {
          console.log(response)
        const activity = response;
        dispatch(fetchEventsSuccess(activity));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEventsFailure(errorMsg));
      });
  };
};

export default fetchActivity;
