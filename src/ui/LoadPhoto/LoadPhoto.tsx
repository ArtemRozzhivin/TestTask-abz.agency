import React, { useRef, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { LoadPhotoType } from '../../components/Blocks/Register/Register';

import './LoadPhoto.scss';

interface LoadFileType {
  file: LoadPhotoType;
  hadlePhoto: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoadPhoto: React.FC<LoadFileType> = ({ file, hadlePhoto }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current && inputRef.current.click();
  };

  return (
    <div className="loadPhoto">
      <Button onClick={handleButtonClick} outline>
        Upload
        <input ref={inputRef} type="file" accept="image/*" onChange={(e) => hadlePhoto(e)} hidden />
      </Button>

      <div className="loadPhoto__status">
        <Input
          error={file.name !== '' && !file.status}
          value={file.name}
          helperText={file.error}
          placeholder="Upload your photo"
          type="text"
        />
      </div>
    </div>
  );
};

export default LoadPhoto;
