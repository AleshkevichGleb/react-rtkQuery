import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IUser } from '../types/types'
import { fetchUsers } from './ActionCreators';


interface  IInitialState {
    users: IUser[],
    loading: boolean,
    error: string,
    count: number,
}

const initialState:IInitialState = {
    users: [],
    loading: false,
    error: '',
    count: 0
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.error = '';
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || '';
        });
    },
})

export default usersSlice.reducer;