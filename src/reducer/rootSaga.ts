import axios from 'axios';
import {put, call, takeEvery, all, takeLatest} from "redux-saga/effects"
import { IUser } from '../types/types';
import { fetchUsersFailed, fetchUsersSuccess } from './usersSlice';

function* fetchUsersWorker() {
    try {
        const data:IUser[] = yield call(() => 
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => response.data)
        )
        yield put(fetchUsersSuccess(data));
    } catch(error) {
        yield put(fetchUsersFailed(error))
    }
}

export default function* rootSaga() {
    yield takeEvery('users/fetchUsers', fetchUsersWorker)
}