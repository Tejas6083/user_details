import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    background: "linear-gradient(15deg, #bdc3c7 30%, #2c3e50 90%)",
    padding: theme.spacing(1),
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
