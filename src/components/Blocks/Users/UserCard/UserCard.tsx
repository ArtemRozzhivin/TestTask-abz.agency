import React from 'react';

import svg from '../../../../assets/image/photo-cover.svg';

import './UserCard.scss';

const UserCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card__photo">
        <img src={svg} alt="user" />
      </div>
      <div className="card__name">Salvador Stewart Flynn Thomas Salva...</div>
      <div className="card__info">
        Leading specialist of the department o... JeromeKlarkaJeromeKlarka19233623... +38 (098) 278
        76 24
      </div>
    </div>
  );
};

export default UserCard;
