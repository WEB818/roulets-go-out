import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import SetDetails from "./components/SetDetails/SetDetails";
import DateDetails from "./components/DateDetails/DateDetails";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/plan">
          <SetDetails />
        </Route>
        <Route path="/details">
          <DateDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
