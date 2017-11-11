import { combineReducers } from 'redux';
import TeamsReducer from './teams_reducer';
import PlayersReducer from './players_reducer';
import ActiveTeamReducer from './reducer_active_team';
import FilteredListReducer from './filtered_list_reducer';
import PlayerSearched from './player_searched_reducer';

const rootReducer = combineReducers({
  teams: TeamsReducer,
  players: PlayersReducer,
  activeTeam: ActiveTeamReducer,
  filteredList: FilteredListReducer,
  player: PlayerSearched
});

export default rootReducer;
