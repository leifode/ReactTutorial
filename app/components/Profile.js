var React = require('react');
var Router = require('react-router');
var UserProfile = require('./github/UserProfile');
var Repos = require('./github/Repos');
var Notes = require('./notes/Notes');
var Flights = require('./flights/Flights')
var helpers = require('../utils/helpers')

var Profile = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: [],
      flights: [
        {
          flight_no: 'DY998'
        },
        {
          flight_no: 'DY999'
        },
        {
          flight_no: 'DY1000'
        }
      ]
    }
  },
  componentDidMount: function(){
    helpers.getGithubInfo(this.getParams().username)
      .then(function(dataObj){
        this.setState({
          bio:  dataObj.bio,
          repos: dataObj.repos
        });
      }.bind(this));
  },
  handleAddNote: function(newNote){
    this.setState({
      notes: this.state.notes.concat([newNote])
    });
  },
  render: function(){
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-3">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-3">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-3">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
        <div className="col-md-3">
          <Flights flights={this.state.flights}/>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
