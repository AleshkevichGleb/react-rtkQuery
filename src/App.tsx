import { useEffect } from "react";
import UserList from './components/UserList';
import { useAppDispatch, useAppSelector } from './hooks/useReducer';
import { fetchUsers } from './reducer/ActionCreators';
import PostContainer from './components/PostContainer';

function App() {
  const {users, loading, error} = useAppSelector(state => state.users)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
        <PostContainer/>
        {/* {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {JSON.stringify(users, null, 2)}
        <UserList/> */}
        
    </div>
  );
}

export default App;
