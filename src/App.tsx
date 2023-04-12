import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Blocks/Main/Main';

import './App.scss';
import Users from './components/Blocks/Users/Users';
import Register from './components/Blocks/Register/Register';
import { useAppDispatch } from './redux/store';
import { fetchAsyncUsers } from './redux/users/fetchAsyncUsers';
import { useSelector } from 'react-redux';
import { selectUsers } from './redux/users/select';

function App() {
  const dispatch = useAppDispatch();
  const { users, page, isHaveUsers, usersPosition } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchAsyncUsers(page));
  }, []);

  const getMoreUsers = () => {
    dispatch(fetchAsyncUsers(page));
  };

  return (
    <div className="app">
      <Header />
      <div className="app__wrapper">
        <Main />
        <Users isHaveUsers={isHaveUsers} getMoreUsers={getMoreUsers} users={users} />
        <Register usersPosition={usersPosition} />
      </div>
    </div>
  );
}

export default App;
