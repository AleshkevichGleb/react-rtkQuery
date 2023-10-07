import {FC, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useReducer';

const UserList:FC = () => {
    const {error, loading, users} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();


    return (
        <div>
            UserList
        </div>
    );
};

export default UserList;