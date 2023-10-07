import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import createSagaMiddleware from "redux-saga"
import rootSaga from './rootSaga';

 
const saga = createSagaMiddleware(); 

const rootReducer = combineReducers({
    users: usersSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
})

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 