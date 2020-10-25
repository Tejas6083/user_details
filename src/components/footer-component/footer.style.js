import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    opacity: 0.3,
    background: theme.palette.secondary.footer,
    height: 50,
    alignItems: "center",
  },
  text: {
    position: "center",
    color: "#a0d2eb",
    opacity: 1,
    margin: "0 auto",
    marginBottom: "10px",
  },
}));

export default useStyles;
