import { FootballTeamDetailState, FootballTeamDetailActionTypes, FOOTBALL_TEAM_DETAIL_ACTIONS } from '../types';

const initialState: FootballTeamDetailState = {
  team: null,
  matches: [],
  loading: false,
  error: null,
};

export const footballTeamDetailReducer = (
  state = initialState,
  action: FootballTeamDetailActionTypes | { type: string }
): FootballTeamDetailState => {
  switch (action.type) {
    case FOOTBALL_TEAM_DETAIL_ACTIONS.FETCH_TEAM_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FOOTBALL_TEAM_DETAIL_ACTIONS.FETCH_TEAM_DETAIL_SUCCESS:
      const successPayload = 'payload' in action ? action.payload : { team: null, matches: [] };
      return {
        ...state,
        loading: false,
        team: successPayload.team,
        matches: successPayload.matches,
        error: null,
      };

    case FOOTBALL_TEAM_DETAIL_ACTIONS.FETCH_TEAM_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'payload' in action ? action.payload : 'Unknown error',
      };

    case FOOTBALL_TEAM_DETAIL_ACTIONS.CLEAR_TEAM_DETAIL:
      return initialState;

    default:
      return state;
  }
};
