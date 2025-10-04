import { ThunkAction } from 'redux-thunk';
import { RootState, AppDispatch } from '../configureStore';
import { FootballTeamsActionTypes } from '../types';
import { fetchTeamsRequest, fetchTeamsSuccess, fetchTeamsFailure } from './actions';
import { getAllFootballTeams } from '@api';

export const fetchFootballTeams = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  FootballTeamsActionTypes
> => {
  return async (dispatch) => {
    try {
      dispatch(fetchTeamsRequest());
      
      const response = await getAllFootballTeams();
      
      if (response?.teams) {
        dispatch(fetchTeamsSuccess(response.teams));
      } else {
        dispatch(fetchTeamsFailure('Список команд пустой'));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Не известная ошибка';
      dispatch(fetchTeamsFailure(errorMessage));
    }
  };
};


