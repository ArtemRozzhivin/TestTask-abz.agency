import React from 'react';
import './Button.scss';

interface ButtonType {
  children: string;
}

const Button: React.FC<ButtonType> = ({ children }) => {
  return (
    <button className="button" type="button">
      <div className="button__text">{children}</div>
    </button>
  );
};

export default Button;
