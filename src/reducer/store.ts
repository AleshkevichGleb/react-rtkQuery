import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import createSagaMiddleware from "redux-saga"
import { postAPI } from '../services/PostService';

 

const rootReducer = combineReducers({
    users: usersSlice,
    [postAPI.reducerPath]: postAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(postAPI.middleware);
    },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 