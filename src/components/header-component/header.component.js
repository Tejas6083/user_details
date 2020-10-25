import { CssBaseline } from "@material-ui/core";
import React from "react";
import useStyles from "./header.style";

const useStyle = useStyles;

const Header = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>{"User's Activity"}</div>
    </React.Fragment>
  );
};

export default Header;
