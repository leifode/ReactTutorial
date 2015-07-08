import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import FinalFuel from '../components/final_fuel/NewReport';
import {Router, Route, DefaultRoute} from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <Route name="final_fuel" path="final_fuel/:flight_id" handler={FinalFuel} />
    <DefaultRoute handler={Home} />
  </Route>
);
