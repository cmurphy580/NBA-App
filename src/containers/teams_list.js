import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { selectTeam } from '../actions/index';
import { filterTeams } from '../actions/index';

class TeamsList extends Component {
  renderListItem(event) {
    let teamList = this.props.filteredList || this.props.team;
    return teamList.map(team => {
      return (
        <Link key={team.teamId} to={`/teams/${team.teamId}`}>
          <li
          key={team.teamId}
          onClick={() => this.props.selectTeam(team)}
          className='list-group-item'
          style={{backgroundColor: team.color, color: "white"}}>
            {team.teamName}
          </li>
        </Link>
      )
    });
  }
  render() {
    return (
      <ul className='list-group'>
        {this.renderListItem()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    team: state.teams,
    filteredList: state.filteredList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectTeam: selectTeam}, dispatch); //this.props.selectTeam.teamId
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
