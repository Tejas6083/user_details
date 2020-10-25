import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => ({
  skeleton: {
    height: "70px",
    width: "97%",
    borderRadius: "15px",
    marginTop: "2px",
    margin: "10px",
  },
  dailog: {
    height: "250px",
    width: "97%",
    borderRadius: "15px",
    marginTop: "2px",
    margin: "10px",
  },
}));

const LinearIndeterminate = () => {
  const classes = useStyles();
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      {arr.map((i) => (
        <Skeleton key={i} className={classes.skeleton} variant="rect" />
      ))}
    </div>
  );
};

export const LinearInDailog = () => {
  const classes = useStyles();
  const arr = [0, 1];

  return (
    <div>
      {arr.map((i) => (
        <Skeleton key={i} className={classes.dailog} variant="rect" />
      ))}
    </div>
  );
};

export default LinearIndeterminate;
