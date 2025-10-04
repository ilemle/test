import { ITeam } from '../api/getAllFootballTeams/types';

export interface FootballTeamsState {
  teams: ITeam[];
  loading: boolean;
  error: string | null;
}

export const FOOTBALL_TEAMS_ACTIONS = {
  FETCH_TEAMS_REQUEST: 'FETCH_TEAMS_REQUEST',
  FETCH_TEAMS_SUCCESS: 'FETCH_TEAMS_SUCCESS',
  FETCH_TEAMS_FAILURE: 'FETCH_TEAMS_FAILURE',
} as const;

export type FootballTeamsActionTypes = 
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_REQUEST }
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_SUCCESS; payload: ITeam[] }
  | { type: typeof FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_FAILURE; payload: string }
