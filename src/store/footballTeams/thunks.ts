import { ThunkAction } from 'redux-thunk';
import { RootState } from '../configureStore';
import { FootballTeamsActionTypes } from '../types';
import { fetchTeamsRequest, fetchTeamsSuccess, fetchTeamsFailure, loadMoreTeamsRequest, loadMoreTeamsSuccess, resetPagination } from './actions';
import { getAllFootballTeams } from '@api';
import { LIMIT } from '../../constatns';


export const fetchFootballTeams = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  FootballTeamsActionTypes
> => {
  return async (dispatch) => {
    try {
      dispatch(resetPagination());
      dispatch(fetchTeamsRequest());
      
      const response = await getAllFootballTeams({ limit: LIMIT, offset: 0 });
      
      if (response?.teams) {
        dispatch(fetchTeamsSuccess(response.teams, response.count, LIMIT, 0));
      } else {
        dispatch(fetchTeamsFailure('Список команд пустой'));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Не известная ошибка';
      dispatch(fetchTeamsFailure(errorMessage));
    }
  };
};

export const loadMoreFootballTeams = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  FootballTeamsActionTypes
> => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const { pagination } = state.footballTeams;
        
    
      if (!pagination.hasMore) {
        return;
      }
      
      dispatch(loadMoreTeamsRequest());
      
      const nextOffset = pagination.offset + pagination.limit;
      
      const response = await getAllFootballTeams({ limit: LIMIT, offset: nextOffset });
      

        
      if (response?.teams) {
        dispatch(loadMoreTeamsSuccess(response.teams, response.count, LIMIT, nextOffset));
      } else {
        dispatch(fetchTeamsFailure('Не удалось загрузить больше команд'));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Не известная ошибка';
      dispatch(fetchTeamsFailure(errorMessage));
    }
  };
};


