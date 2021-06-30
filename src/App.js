import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShowCityData from "./ShowCityData";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/city/:id">
          {/* <Header/> */}
          <ShowCityData/>
        </Route>
        <Route path="/">
          {/* <Header/> */}
          <Home/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
