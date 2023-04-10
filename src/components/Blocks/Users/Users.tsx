import React from 'react';
import UserCard from './UserCard/UserCard';
import Button from '../../../ui/Button/Button';

import './Users.scss';

const Users: React.FC = () => {
  return (
    <div className="users">
      <h2 className="users__title">Working with GET request</h2>
      <div className="users__list">
        <div className="users__card">
          <UserCard />
        </div>
        <div className="users__card">
          <UserCard />
        </div>
        <div className="users__card">
          <UserCard />
        </div>
        <div className="users__card">
          <UserCard />
        </div>
      </div>
      <div className="users__button">
        <Button primary>Show more</Button>
      </div>
    </div>
  );
};

export default Users;
