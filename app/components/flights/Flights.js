import React from 'react';
import {Link} from 'react-router'

class Flights extends React.Component{
  handleNewFinalFuel(state){
    this.context.router.transitionTo('final_fuel', {flight_no: flight_no})
  }
  render(){
    var self = this;
    var flights = this.props.flights.map(function(flight, index){
      return(
        <li className="list-group-item" key={index}>
          {flight.flight_no && <Link to="final_fuel" params={{flight_id: flight.id}}>{flight.flight_no}</Link>}
          <Link to="final_fuel" params={{flight_id: flight.id}}>test</Link> 

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
};

Flights.propTypes = {
  flights: React.PropTypes.array.isRequired
}

Flights.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Flights;

//var Router = require('react-router');
//  mixins: [Router.Navigation],
