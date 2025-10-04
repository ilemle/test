import { FootballTeamsState, FootballTeamsActionTypes, FOOTBALL_TEAMS_ACTIONS } from '../types';

const initialState: FootballTeamsState = {
  teams: [],
  loading: false,
  error: null,
};

export const footballTeamsReducer = (
  state = initialState,
  action: FootballTeamsActionTypes | { type: string }
): FootballTeamsState => {
  switch (action.type) {
    case FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: 'payload' in action ? action.payload : [],
        error: null,
      };

    case FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'payload' in action ? action.payload : 'Unknown error',
      };

    default:
      return state;
  }
};
