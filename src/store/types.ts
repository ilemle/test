import { ITeam } from '../api/getAllFootballTeams/types';

export interface FootballTeamsState {
  teams: ITeam[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  pagination: {
    limit: number;
    offset: number;
    total: number;
    hasMore: boolean;
  };
}

export const FOOTBALL_TEAMS_ACTIONS = {
  FETCH_TEAMS_REQUEST: 'FETCH_TEAMS_REQUEST',
  FETCH_TEAMS_SUCCESS: 'FETCH_TEAMS_SUCCESS',
  FETCH_TEAMS_FAILURE: 'FETCH_TEAMS_FAILURE',
  LOAD_MORE_TEAMS_REQUEST: 'LOAD_MORE_TEAMS_REQUEST',
  LOAD_MORE_TEAMS_SUCCESS: 'LOAD_MORE_TEAMS_SUCCESS',
  RESET_PAGINATION: 'RESET_PAGINATION',
} as const;

export type FootballTeamsActionTypes = 
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_REQUEST }
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_SUCCESS; payload: { teams: ITeam[]; total: number; limit: number; offset: number } }
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_FAILURE; payload: string }
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.LOAD_MORE_TEAMS_REQUEST }
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.LOAD_MORE_TEAMS_SUCCESS; payload: { teams: ITeam[]; total: number; limit: number; offset: number } }
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.RESET_PAGINATION };
