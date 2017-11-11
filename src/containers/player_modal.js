import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import VideoDetail from '../containers/video_detail';
import { searchPlayer } from '../actions/index';

import TeamData from '../containers/team_players';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAEzmK9Ewfrgh4czWOSrXcCy7UivJkWI-0'; //YouTube API Key

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      videos: [],
      video: null
    });
  }
  videoSearch() {
    YTSearch({
      key: API_KEY, term: `${this.props.player.firstName} ${this.props.player.lastName} highlights`}, (videos) => {
      this.setState({
        videos: videos,
        video: videos[0]
      });
    });
  }
  render() {
    return (
      <div className="player-container">
        <VideoDetail onLoad={this.videoSearch(this.props.player)} video={this.state.video} player={this.props.player}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    team: state.activeTeam,
    teams: state.teams,
    players: state.players,
    player: state.player
  }
}

export default connect(mapStateToProps)(Modal)
