import React from 'react';
import UserProfile from './github/UserProfile';
import Repos from './github/Repos';
import Notes from './notes/Notes';
import Flights from './flights/Flights';
import helpers from '../utils/helpers';

class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      bio: {},
      repos: [],
      flights: [
        {
          id: '1',
          flight_no: 'DY998'
        },
        {
          id: '2',
          flight_no: 'DY999'
        },
        {
          id: '3',
          flight_no: 'DY1000'
        }
      ]
    }
  }
  init(){
    helpers.getGithubInfo(this.router.getCurrentParams().username)
      .then(function(dataObj){
        this.setState({
          bio:  dataObj.bio,
          repos: dataObj.repos
        });
      }.bind(this));

      this.setState({
        notes: []
      });
  }
  componentWillMount(){
    this.router = this.context.router;
  }
  componentDidMount(){
    this.init();
  }
  componentWillReceiveProps(){
    this.init();
  }
  handleAddNote(newNote){
    this.setState({
      notes: this.state.notes.concat([newNote])
    });
  }
  render(){
    var username = this.router.getCurrentParams().username;
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
            addNote={this.handleAddNote.bind(this)}/>
        </div>
        <div className="col-md-3">
          <Flights flights={this.state.flights}/>
        </div>
      </div>
    );
  }
};

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Profile;

  //mixins: [Router.State],
