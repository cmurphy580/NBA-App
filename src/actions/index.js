
export function selectTeam(team) {
  return {
    type: 'TEAM_SELECTED',
    payload: team
  }
}

export function filterTeams(teams) {
  return {
    type: 'TEAM_SEARCHED',
    payload: teams
  }
}

export function searchPlayer(player) {
  return {
    type: 'PLAYER_SEARCHED',
    payload: player
  }
}
