import React from 'react';
import Button from '../../ui/Button/Button';
import { HashLink } from 'react-router-hash-link';

import logo from '../../assets/image/Logo.svg';

import './Header.scss';
import { scrollWithOffset } from '../../utils/scrollWithOffset';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__buttons">
          <div className="header__users">
            <Button primary>
              <HashLink to={'#users'} scroll={(el) => scrollWithOffset(el)}>
                Users
              </HashLink>
            </Button>
          </div>
          <div className="header__sign">
            <Button primary>
              <HashLink to={'#signUp'} scroll={(el) => scrollWithOffset(el)}>
                Sign Up
              </HashLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
