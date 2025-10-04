import { ThunkAction } from 'redux-thunk';
import { RootState } from '../configureStore';
import { FootballTeamDetailActionTypes } from '../types';
import { fetchTeamDetailRequest, fetchTeamDetailSuccess, fetchTeamDetailFailure } from './actions';
import { getFootballTeamDetailInfo } from '@api';

export const fetchFootballTeamDetail = (teamId: number): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  FootballTeamDetailActionTypes
> => {
  return async (dispatch) => {
    try {
      dispatch(fetchTeamDetailRequest());
      
      const response = await getFootballTeamDetailInfo(teamId);
      
      dispatch(fetchTeamDetailSuccess(response.team, response.matches));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
      dispatch(fetchTeamDetailFailure(errorMessage));
    }
  };
};
