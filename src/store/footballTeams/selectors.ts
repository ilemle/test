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

export const selectFootballTeamsState = (state: RootState) => {
  return state.footballTeams as FootballTeamsState | undefined;
};
