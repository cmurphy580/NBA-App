
export default function (state={}, action) {
  switch(action.type) {
    case 'PLAYER_SEARCHED':
      const serializedPlayer = JSON.stringify(action.payload);
      localStorage.setItem('player', serializedPlayer);
      return action.payload;
  }
  return state;
}
