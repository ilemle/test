
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { footballTeamsReducer } from './footballTeams/reducer';
import { footballTeamDetailReducer } from './footballTeamDetail/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';



const rootReducer = combineReducers({
  footballTeams: footballTeamsReducer,
  footballTeamDetail: footballTeamDetailReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
