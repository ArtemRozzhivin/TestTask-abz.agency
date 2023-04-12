import React from 'react';
import svg from '../../../../assets/image/photo-cover.svg';

import './UserCard.scss';
import { UserType } from '../../../../redux/users/types';

const UserCard: React.FC<UserType> = ({
  id,
  name,
  email,
  phone,
  position,
  position_id,
  registration_timastamp,
  photo,
}) => {
  return (
    <div className="card">
      <div className="card__photo">
        <img src={photo} alt="user" />
      </div>
      <div className="card__name">{name.length > 30 ? name.slice(0, 30) + '...' : name}</div>
      <div className="card__info">
        <div className="card__position">{position}</div>
        <div className="card__email">{email.length > 30 ? email.slice(0, 30) + '...' : email}</div>
        <div className="card__number">{phone}</div>
      </div>
    </div>
  );
};

export default UserCard;
