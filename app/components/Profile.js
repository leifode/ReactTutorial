var React = require('react');
var Router = require('react-router');
var UserProfile = require('./github/UserProfile');
var Repos = require('./github/Repos');
var Notes = require('./notes/Notes');
var helpers = require('../utils/helpers')

var Profile = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
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
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
