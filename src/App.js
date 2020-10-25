import React, { lazy, Suspense } from "react";
import AppStyle from "./app.style.js";
import Header from "./components/header-component/header.component";
import FooterBar from "./components/footer-component/footer.component";
import LinearIndeterminate from "./components/loading-component/loading.component";
const ErrorBoundary = lazy(() =>
  import("./components/error-message-component/errorBoundary.component")
);
const ResponsiveDialog = lazy(() =>
  import("./components/dailog-component/dailog.component")
);

function App() {
  const classes = AppStyle();
  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <Suspense fallback={<LinearIndeterminate />}>
          <ErrorBoundary>
            <ResponsiveDialog />
          </ErrorBoundary>
        </Suspense>
      </div>
      <FooterBar />
    </React.Fragment>
  );
}

export default App;
