import { FOOTBALL_TEAMS_ACTIONS } from '../types';
import { ITeam } from '@api';

export const fetchTeamsRequest = () => ({
  type: FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_REQUEST,
});

export const fetchTeamsSuccess = (teams: ITeam[]) => ({
  type: FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_SUCCESS,
  payload: teams,
});

export const fetchTeamsFailure = (error: string) => ({
  type: FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_FAILURE,
  payload: error,
});

