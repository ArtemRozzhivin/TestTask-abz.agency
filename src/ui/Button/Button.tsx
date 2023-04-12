import React from 'react';
import './Button.scss';
import cx from 'clsx';

interface ButtonType {
  children: string | any;
  primary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonType> = ({ children, primary, outline, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cx('', {
        button_primary: primary,
        button_outline: outline,
      })}
      disabled={disabled}
      type="button">
      <div className="button__text">{children}</div>
    </button>
  );
};

export default Button;
