
export default function (state = [], action) {
  switch(action.type) {
    case 'PLAYER_SEARCHED':
      return action.payload;
  }
  return state;
}
