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
import { fetchAsyncPositions } from './redux/register/fetchAsyncPositions';
import { selectRegistration } from './redux/register/select';

function App() {
  const dispatch = useAppDispatch();
  const { users, page, isHaveUsers } = useSelector(selectUsers);
  const { positions, response } = useSelector(selectRegistration);

  console.log(positions);

  useEffect(() => {
    dispatch(fetchAsyncUsers(page));
    dispatch(fetchAsyncPositions());
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
        <Register result={response} usersPosition={positions} />
      </div>
    </div>
  );
}

export default App;
