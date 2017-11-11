import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { selectTeam } from '../actions/index';
import { filterTeams } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      id: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
    let filteredList = this.props.team.filter(team => {
		     const regex = new RegExp(event.target.value, 'gi');
		     return team.teamName.match(regex);
	   });

    this.props.filterTeams(filteredList);
  }
  onFormSubmit(event) {
    event.preventDefault();

    this.setState({
      term: '',
      id: ''
    });

    this.props.filterTeams('');
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for a Team"
          value={this.state.term}
          onChange={event => this.onInputChange(event)}
        />
        <span className="input-group-btn">
          <Link key={this.state.id} to={`/teams/${this.state.id}`}>
          <button type="submit" className="btn btn-secondary">Submit</button>
          </Link>
        </span>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    team: state.teams,
    filteredList: state.filteredList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectTeam: selectTeam,
    filterTeams: filterTeams
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
