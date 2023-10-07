import {createSlice} from "@reduxjs/toolkit"
import { IUser } from '../types/types'


interface  IInitialState {
    users: IUser[],
    loading: boolean,
    error: null | string,
}

const initialState:IInitialState = {
    users: [],
    loading: false,
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess: (state, action) => {
            state.error = null;
            state.loading = false;
            state.users = action.payload;
        },
        fetchUsersFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {fetchUsers, fetchUsersSuccess, fetchUsersFailed} = usersSlice.actions;
export default usersSlice.reducer;