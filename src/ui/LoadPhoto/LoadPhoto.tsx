import React, { useRef, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './LoadPhoto.scss';

interface LoadPhotoType {
  hadlePhoto: (hadlePhoto: any) => void;
}

type LoadStatusType = {
  value: string;
  status: boolean;
  error: string;
};

const LoadPhoto: React.FC<LoadPhotoType> = ({ hadlePhoto }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loadStatus, setLoadStatus] = useState({
    value: '',
    status: false,
    error: '',
  });

  const handleButtonClick = () => {
    inputRef.current && inputRef.current.click();
  };

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (!selectedFile) {
      setLoadStatus({ value: '', status: false, error: 'No file selected' });
      return;
    }

    // Check file type
    if (!selectedFile.type.includes('jpeg') && !selectedFile.type.includes('jpg')) {
      setLoadStatus({
        value: selectedFile.name,
        status: false,
        error: 'Invalid file type, please upload a jpeg or jpg file',
      });
      return;
    }

    // Check file size
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (selectedFile.size > maxSize) {
      setLoadStatus({
        value: selectedFile.name,
        status: false,
        error: 'File size is too large, please upload a file up to 5MB',
      });
      return;
    }

    // Check image dimensions
    const img = new Image();
    img.src = window.URL.createObjectURL(selectedFile);
    img.onload = () => {
      const { width, height } = img;

      if (width < 70 || height < 70) {
        setLoadStatus({
          value: selectedFile.name,
          status: false,
          error:
            'Image dimensions are too small, please upload an image with dimensions of at least 70x70px',
        });
        return;
      }

      // If all checks pass, handle the selected file
      hadlePhoto(selectedFile);
      setLoadStatus({
        value: selectedFile.name,
        status: true,
        error: 'File uploaded successfully',
      });
    };
  };

  return (
    <div className="loadPhoto">
      <Button onClick={handleButtonClick} outline>
        Upload
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileSelected(e)}
          hidden
        />
      </Button>

      <div className="loadPhoto__status">
        <Input
          error={loadStatus.value !== '' && !loadStatus.status}
          value={loadStatus.value}
          helperText={loadStatus.error}
          placeholder="Upload your photo"
          type="text"
        />
      </div>
    </div>
  );
};

export default LoadPhoto;
