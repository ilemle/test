import { RootState } from '../configureStore';

export const selectTeamDetail = (state: RootState) => state.footballTeamDetail.team;
export const selectTeamMatches = (state: RootState) => state.footballTeamDetail.matches;
export const selectTeamDetailLoading = (state: RootState) => state.footballTeamDetail.loading;
export const selectTeamDetailError = (state: RootState) => state.footballTeamDetail.error;
