import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "../src/components/Home";
import History from "../src/components/History";
import Header from "../src/components/Header";
import Missions from "./components/Missions";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/history"
          render={(props) => <History {...props} />}
        />
        <Route
          exact
          path="/missions"
          render={(props) => <Missions {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
