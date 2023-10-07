import {FC, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useReducer';
import { fetchUsers } from '../reducer/usersSlice';

const UserList:FC = () => {
    const {error, loading, users} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers)
    }, []);

    return (
        <div>
            UserList
        </div>
    );
};

export default UserList;