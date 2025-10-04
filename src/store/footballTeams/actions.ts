import { FOOTBALL_TEAMS_ACTIONS } from '../types';
import { ITeam } from '@api';

export const fetchTeamsRequest = () => ({
  type: FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_REQUEST,
});

export const fetchTeamsSuccess = (teams: ITeam[], total: number, limit: number, offset: number) => ({
  type: FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_SUCCESS,
  payload: { teams, total, limit, offset },
});

export const fetchTeamsFailure = (error: string) => ({
  type: FOOTBALL_TEAMS_ACTIONS.FETCH_TEAMS_FAILURE,
  payload: error,
});

export const loadMoreTeamsRequest = () => ({
  type: FOOTBALL_TEAMS_ACTIONS.LOAD_MORE_TEAMS_REQUEST,
});

export const loadMoreTeamsSuccess = (teams: ITeam[], total: number, limit: number, offset: number) => ({
  type: FOOTBALL_TEAMS_ACTIONS.LOAD_MORE_TEAMS_SUCCESS,
  payload: { teams, total, limit, offset },
});

export const resetPagination = () => ({
  type: FOOTBALL_TEAMS_ACTIONS.RESET_PAGINATION,
});

