import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { filterTeams } from '../actions/index';
import { searchPlayer } from '../actions/index';

class TeamData extends Component {
  componentWillMount() {
    if (localStorage.getItem('team')) {
      this.render();
    }
  }
  renderPlayer() {
    //console.log(this.props);
    let activeTeam = {...JSON.parse(localStorage.getItem('team'))},//{...this.props.team},
        playersList = [...this.props.players],
        roster = [];
    playersList.map((player, i) => {
      if (+(playersList[i].teamId) === activeTeam.teamId)
        roster.push(player);
    });
    //console.log(roster); Link error below
    return roster.map(player => {
      return (
        <tr key={player.personId} onClick ={() => this.props.searchPlayer(player)}>
          <Link key={player.teamId} to={`/teams/${player.teamId}/${player.personId}`}>
            <td>{player.firstName} {player.lastName}</td>
            <td>{player.pos}</td>
            <td>{player.heightFeet}ft {player.heightInches}in</td>
            <td>{player.collegeName || 'International League'}</td>
            <td>{player.nbaDebutYear || '2017'}</td>
          </Link>
        </tr>
      )
    });
  }
  render() {
    return (
      <section className="player-list-container">
      <Link to="/" className="back btn btn-primary"
      onClick={() => this.props.filterTeams(this.props.teams)}>
      Back
      </Link>
      <div className="logo_bkg">
        <img src={`../images/team_logos/${JSON.parse(localStorage.getItem('team')).logo}.png`} alt="logo"/>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Height</th>
            <th>College</th>
            <th>NBA Debut</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPlayer()}
        </tbody>
      </table>
      </section>
    )
  }

}

function mapStateToProps(state) {
  console.log(state);
  return {
    team: state.activeTeam,
    teams: state.teams,
    players: state.players,
    player: state.player
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    filterTeams: filterTeams,
    searchPlayer: searchPlayer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamData)
