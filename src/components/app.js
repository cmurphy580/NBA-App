import React, { Component } from 'react';

import TeamsList from '../containers/teams_list';
import TeamData from '../containers/team_players';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="title_sect">
          <img src="../images/nba logo.png" alt="logo" />
          <h1>NBA</h1>
          <p className="sub-title">TEAMS, PLAYERS & STATS</p>
        </header>
        <hr />
        <SearchBar />
        <TeamsList />
      </div>
    );
  }
}
