import { LIMIT } from '../../constatns';
import { RootState } from '../configureStore';
import { FootballTeamsState } from '../types';

export const selectFootballTeams = (state: RootState) => {
  const footballTeams = state.footballTeams as FootballTeamsState | undefined;
  return footballTeams?.teams || [];
};

export const selectFootballTeamsLoading = (state: RootState) => {
  const footballTeams = state.footballTeams as FootballTeamsState | undefined;
  return footballTeams?.loading || false;
};

export const selectFootballTeamsError = (state: RootState) => {
  const footballTeams = state.footballTeams as FootballTeamsState | undefined;
  return footballTeams?.error || null;
};

export const selectPagination = (state: RootState) => {
  const footballTeams = state.footballTeams as FootballTeamsState | undefined;
  return footballTeams?.pagination || { limit: LIMIT, offset: 0, total: 0, hasMore: false };
};

export const selectHasMoreTeams = (state: RootState) => {
  const pagination = selectPagination(state);
  return pagination.hasMore;
};

export const selectFootballTeamsState = (state: RootState) => {
  return state.footballTeams as FootballTeamsState | undefined;
};

export const selectIsLoadingMore = (state: RootState) => {
  const footballTeams = state.footballTeams as FootballTeamsState | undefined;
  return footballTeams?.loadingMore || false;
};
