import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { connect } from "react-redux";
import Calendar from "../calendar-component/calendar.component";
import fetchActivity from "../../redux/activity/fetch";
import LinearIndeterminate from "../loading-component/loading.component";

const ResponsiveDialog = ({ getEvents, eventsList, Error, Loading }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [appointments, setAppointments] = React.useState([]);

  const handleClickOpen = (event, data) => {
    event.preventDefault();
    let start,
      end,
      startDate,
      endDate,
      activity = [];

    data.activity_periods.map((details, i) => {
      start = details.start_time.split(" ");
      end = details.end_time.split(" ");
      startDate = new Date(
        `${start[0]}, ${start[1]}, ${start[2]}, ${start[3] + " " + start[4]} `
      ).toString();
      endDate = new Date(
        `${end[0]}, ${end[1]}, ${end[2]}, ${end[3] + " " + end[4]}`
      ).toString();

      return activity.push({
        title: `Activity-${i}`,
        startDate,
        endDate,
      });
    });

    setAppointments({
      id: data.id,
      name: data.real_name,
      location: data.tz.split("/")[1],
      activity,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div style={{ margin: "0 auto", maxWidth: "1024px" }}>
      <div className="dailog">
        {Loading ? (
          <LinearIndeterminate />
        ) : Error ? (
          <div></div>
        ) : (
          eventsList.members.map((data, i) => (
            <div key={data.id}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={(e) => handleClickOpen(e, data)}
                style={{
                  fontWeight: "bold",
                  height: "70px",
                  width: "90%",
                  borderRadius: "15px",
                  margin: "10px",
                }}
              >
                {`${i + 1} - ${data.real_name}`}
              </Button>

              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {`Activity of '${appointments.name}'`}
                </DialogTitle>
                <DialogContent>
                  <Calendar appointments={appointments} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  eventsList: state.event.eventsList,
  Error: state.event.error,
  Loading: state.event.loading,
});

const mapDispatchToProps = {
  getEvents: fetchActivity,
};

export default connect(mapStatetoProps, mapDispatchToProps)(ResponsiveDialog);
