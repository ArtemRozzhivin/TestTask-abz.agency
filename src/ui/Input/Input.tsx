import React from 'react';
import { TextField, ThemeProvider, createTheme } from '@mui/material';

import './Input.scss';

interface InputType {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label?: string;
  helperText?: string;
  placeholder?: string;
  error?: boolean;
}

const Input: React.FC<InputType> = ({
  value,
  onChange,

  label,
  type,
  helperText,
  placeholder,
  error,
}) => {
  return (
    <TextField
      className="input"
      value={value}
      onChange={onChange}
      fullWidth
      error={error}
      placeholder={placeholder}
      label={label}
      variant="outlined"
      type={type}
      helperText={helperText && helperText}
    />
  );
};

export default Input;
