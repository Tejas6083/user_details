import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./footer.style";

const FooterBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.text} variant="body2" gutterBottom>
            <IconButton
              color="inherit"
              onClick={() =>
                window.open(
                  "https://github.com/Tejas6083",
                  "_blank"
                )
              }
            >
              <GitHubIcon />
            </IconButton>
            [ Developer - TEJAS R ]
          </Typography>

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default FooterBar;
