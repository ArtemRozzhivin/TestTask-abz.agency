import React from 'react';
import Button from '../../ui/Button/Button';

import logo from '../../assets/image/Logo.svg';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__buttons">
          <div className="header__users">
            <Button primary>Users</Button>
          </div>
          <div className="header__sign">
            <Button primary>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
