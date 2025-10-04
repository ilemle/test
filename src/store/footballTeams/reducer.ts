import { LIMIT } from '../../constatns';
import { FootballTeamsState, FootballTeamsActionTypes, FOOTBALL_TEAMS_ACTIONS } from '../types';

const initialState: FootballTeamsState = {
  teams: [],
  loading: false,
  loadingMore: false,
  error: null,
  pagination: {
    limit: LIMIT,
    offset: 0,
    total: 0,
    hasMore: false,
  },
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
      const successPayload = 'payload' in action ? action.payload : { teams: [], total: 0, limit: LIMIT, offset: 0 };
    
      return {
        ...state,
        loading: false,
        teams: successPayload.teams,
        error: null,
        pagination: {
          limit: successPayload.limit,
          offset: successPayload.offset,
          total: successPayload.total,
          hasMore: successPayload.offset + successPayload.limit <= successPayload.total,
        },
      };

    case FOOTBALL_TEAMS_ACTIONS.LOAD_MORE_TEAMS_REQUEST:
      return {
        ...state,
        loadingMore: true,
        error: null,
      };

    case FOOTBALL_TEAMS_ACTIONS.LOAD_MORE_TEAMS_SUCCESS:
        const loadMorePayload = 'payload' in action ? action.payload : { teams: [], total: 0, limit: LIMIT, offset: 0 };

      return {
        ...state,
        loadingMore: false,
        teams: [...state.teams, ...loadMorePayload.teams],
        error: null,
        pagination: {
          limit: loadMorePayload.limit,
          offset: loadMorePayload.offset,
          total: loadMorePayload.total,
          hasMore: loadMorePayload.offset >= loadMorePayload.total,
          // hasMore: loadMorePayload.offset <= loadMorePayload.total,
        },
      };

    case FOOTBALL_TEAMS_ACTIONS.RESET_PAGINATION:
      return {
        ...state,
        teams: [],
        pagination: {
          ...state.pagination,
          offset: 0,
          hasMore: false,
        },
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
