import { Box, TextField } from '@mui/material';
import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './LoadPhoto.scss'

const LoadPhoto = () => {
  return (
    <div className='loadPhoto'>
      <Button outline>Upload</Button>
			<div>
      <Input placeholder='Upload your photo' type="text" />
			</div>
    </div>
  );
};

export default LoadPhoto;
