import { FOOTBALL_TEAM_DETAIL_ACTIONS } from '../types';
import { ITeamDetail, IMatch } from '@api';

export const fetchTeamDetailRequest = () => ({
  type: FOOTBALL_TEAM_DETAIL_ACTIONS.FETCH_TEAM_DETAIL_REQUEST,
});

export const fetchTeamDetailSuccess = (team: ITeamDetail, matches: IMatch[]) => ({
  type: FOOTBALL_TEAM_DETAIL_ACTIONS.FETCH_TEAM_DETAIL_SUCCESS,
  payload: { team, matches },
});

export const fetchTeamDetailFailure = (error: string) => ({
  type: FOOTBALL_TEAM_DETAIL_ACTIONS.FETCH_TEAM_DETAIL_FAILURE,
  payload: error,
});

export const clearTeamDetail = () => ({
  type: FOOTBALL_TEAM_DETAIL_ACTIONS.CLEAR_TEAM_DETAIL,
});
