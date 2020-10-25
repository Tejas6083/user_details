import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store.redux";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#02aab0", //Heading
      // light: "#EEE2DC", //Body Background
    },
    secondary: {
      main: "#004e92", //Text
      light: "#123C69", //Card, Main Heading
      footer: "#393f4d", //Deep Matte Grey
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
