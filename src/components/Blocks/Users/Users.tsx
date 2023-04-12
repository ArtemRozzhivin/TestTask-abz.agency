import React, { useEffect } from 'react';
import UserCard from './UserCard/UserCard';
import Button from '../../../ui/Button/Button';
import { UserType } from '../../../redux/users/types';

import './Users.scss';

interface UsersType {
  users: UserType[];
  getMoreUsers: () => void;
  isHaveUsers: boolean;
}

const Users: React.FC<UsersType> = ({ users, getMoreUsers, isHaveUsers }) => {
  return (
    <div id="users" className="users">
      <h2 className="users__title">Working with GET request</h2>
      <div className="users__list">
        {users.map((user) => (
          <div key={user.id} className="users__card">
            <UserCard {...user} />
          </div>
        ))}
      </div>
      <div className="users__button">
        <Button disabled={!isHaveUsers} onClick={getMoreUsers} primary>
          Show more
        </Button>
      </div>
    </div>
  );
};

export default Users;
