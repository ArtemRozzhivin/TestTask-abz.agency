import React from 'react';
import Button from '../../../ui/Button/Button';
import { scrollWithOffset } from '../../../utils/scrollWithOffset';
import { HashLink } from 'react-router-hash-link';

import './Main.scss';

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main__background"></div>
      <div className="main__content">
        <div className="main__info">
          <h1 className="main__title">Test assignment for front-end developer</h1>
          <p className="main__text">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
        </div>
        <div className="main__button">
          <HashLink to={'#signUp'} scroll={(el) => scrollWithOffset(el)}>
            <Button primary>Sign Up</Button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Main;
