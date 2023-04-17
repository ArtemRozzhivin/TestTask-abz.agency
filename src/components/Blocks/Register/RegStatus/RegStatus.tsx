import React from 'react';
import registerImage from '../../../../assets/image/successReg.png';

import './RegStatus.scss';

interface RegStatusType {
  message: string;
  success: boolean;
}

const RegStatus: React.FC<RegStatusType> = ({ success, message }) => {
  return (
    <div className="regStatus">
      <h3 className="regStatus__title">{message}</h3>
      <div className="regStatus__image">
        <img src={registerImage} alt="register" />
      </div>
    </div>
  );
};

export default RegStatus;
