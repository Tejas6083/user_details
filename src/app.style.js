import { makeStyles } from "@material-ui/core/styles";

const AppStyle = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #141e30 30%, #61045f 90%)",
    minHeight: window.innerHeight,
    maxHeight: "auto",
    textAlign: "center",
   },
}));

export default AppStyle;
