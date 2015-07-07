var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var FinalFuel = require('../components/final_fuel/NewReport')
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <Route name="final_fuel" path="final_fuel/:flightNumber" handler={FinalFuel} />
    <DefaultRoute handler={Home} />
  </Route>
);
