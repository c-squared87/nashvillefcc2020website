import { Route } from "react-router-dom";
import React from "react";
import Box from "./Box";
import Events from "./Events";
import About from "./About";
import Sponsor from "./Sponsor";
import NavMenu from './NavMenu'

//James:
//"/" is considered the homepage where Box.js displays.
//"/events" are where the events are displayed and are in need of a
//CSS touch up.

const ApplicationViews = () => {
  return (
    <div>
      <NavMenu />
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Box />;
          }}
        />
        <Route
          path="/events"
          render={props => {
            return <Events />;
          }}
        />
        <Route
          path="/about"
          render={props => {
            return <About />;
          }}
        />
        <Route
          path="/sponsor"
          render={props => {
            return <Sponsor />;
          }}
        />
      </React.Fragment>
    </div>
  );
};

export default ApplicationViews;