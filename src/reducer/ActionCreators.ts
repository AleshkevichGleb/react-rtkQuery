import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from '../types/types';

// export const fetchUsers = () => async(dispatch: AppDispatch) => {
//     try {
//         dispatch(usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplceholder.typicode.com/users')
//         dispatch(usersFetchingSuccess(response.data))
//     } catch(error) {
//         if(axios.isAxiosError(error)) dispatch(usersFetchingFailed(error.message));
//     }
// }


export const fetchUsers = createAsyncThunk<IUser[], undefined, {rejectValue: string}>(
    'users/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (err) {
            return thunkApi.rejectWithValue('Rejected')
        }
    }    
)
