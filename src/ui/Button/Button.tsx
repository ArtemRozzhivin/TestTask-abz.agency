import React from 'react';
import './Button.scss';
import cx from 'clsx';

interface ButtonType {
  children: string;
  primary?: boolean;
  outline?: boolean;
	disabled?: boolean; 
}

const Button: React.FC<ButtonType> = ({ children, primary, outline, disabled }) => {
  return (
    <button
      className={cx('', {
        'button_primary': primary,
        'button_outline': outline,
      })}
			disabled={disabled}
      type="button">
      <div className="button__text">{children}</div>
    </button>
  );
};

export default Button;
