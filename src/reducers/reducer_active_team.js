
export default function (state = [], action) {
  switch(action.type) {
    case 'TEAM_SELECTED':
      return action.payload
  }
  return state;
}
