import React from 'react';
import { TextField, ThemeProvider, createTheme } from '@mui/material';

import './Input.scss';

interface InputType {
  type: string;
  label?: string;
  helperText?: string;
	placeholder?: string; 
}

const Input: React.FC<InputType> = ({ label, type, helperText, placeholder }) => {
  return (
    <TextField
      className="input"
      fullWidth
      // error
			
			placeholder={placeholder}
      label={label}
      variant="outlined"
      type={type}
      helperText={helperText && helperText}
    />
  );
};

export default Input;
