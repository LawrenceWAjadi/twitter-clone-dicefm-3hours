import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppContainer = AppComponent => (
  <Router>
    <>
      <Route
        exact
        path="/:identity"
        render={({ match }) => <AppComponent match={match} />}
      />
      <Route
        exact
        path="/"
        render={() => (
          <AppComponent
            match={{
              params: {
                identity: "dicefm"
              }
            }}
          />
        )}
      />
    </>
  </Router>
);

ReactDOM.render(AppContainer(App), document.getElementById("root"));
