export default function (state = null, action) {
  switch(action.type) {
    case 'TEAM_SEARCHED':
      return action.payload;
  }
  return state;
}
