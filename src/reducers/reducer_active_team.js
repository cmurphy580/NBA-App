
export default function (state={}, action) {
  switch(action.type) {
    case 'TEAM_SELECTED':
      const serializedTeam = JSON.stringify(action.payload);
      localStorage.setItem('team', serializedTeam);
      return action.payload;
  }
  return state;
}
