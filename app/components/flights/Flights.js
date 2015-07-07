var React = require('react');
var Router = require('react-router');

var Flights = React.createClass({
  mixins: [Router.Navigation],
  propTypes: {
    flights: React.PropTypes.array.isRequired
  },
  handleNewFinalFuel: function(flight_no){
    this.transitionTo('final_fuel', {flight_no: flight_no})
  },
  render: function(){
    var flights = this.props.flights.map(function(flight, index){
      return(
        <li className="list-group-item" key={index}>
          {flight.flight_no && <b>{flight.flight_no}</b>}<br />
        {flight.flight_no && <a href={flight.flight_no} onClick="handleNewFinalFuel()">Final Fuel</a>}
        </li>
      )
    });
    return (
      <div className="">
        <h3> Flights </h3>
        <ul className="list-group-item">
          {flights}
        </ul>
      </div>
    )
  }
});

module.exports = Flights;
