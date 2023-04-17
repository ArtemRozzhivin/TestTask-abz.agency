import { LoadPhotoType } from '../components/Blocks/Register/Register';

export const validateName = (value: string) => {
  return value.length >= 2 && value.length <= 60 ? true : false;
};

export const validateEmail = (value: string) => {
  const regex = new RegExp(
    '^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$',
  );
  return value.length >= 2 && value.length <= 100 && regex.test(value);
};

export const validatePhoneNumber = (value: string) => {
  const regex = /^[\+]{0,1}380([0-9]{9})$/;
  return regex.test(value);
};

export const validatePhoto = async (
  event: React.ChangeEvent<HTMLInputElement>,
): Promise<LoadPhotoType> => {
  const selectedFile = event.target.files && event.target.files[0];

  if (!selectedFile) {
    return { name: '', value: null, status: false, error: 'No file selected' };
  }

  // Check file type
  if (!selectedFile.type.includes('jpeg') && !selectedFile.type.includes('jpg')) {
    return {
      name: selectedFile.name,
      value: selectedFile,
      status: false,
      error: 'Invalid file type, please upload a jpeg or jpg file',
    };
  }

  // Check file size
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (selectedFile.size > maxSize) {
    return {
      name: selectedFile.name,
      value: selectedFile,
      status: false,
      error: 'File size is too large, please upload a file up to 5MB',
    };
  }

  // Check image dimensions
  const img = new Image();
  img.src = window.URL.createObjectURL(selectedFile);
  await new Promise((resolve) => {
    img.onload = () => resolve(null);
  });
  const { width, height } = img;

  if (width < 70 || height < 70) {
    return {
      name: selectedFile.name,
      value: selectedFile,
      status: false,
      error:
        'Image dimensions are too small, please upload an image with dimensions of at least 70x70px',
    };
  }

  // If all checks pass, handle the selected file
  return {
    name: selectedFile.name,
    value: selectedFile,
    status: true,
    error: 'File uploaded successfully',
  };
};

// export const validatePhoto = (event: React.ChangeEvent<HTMLInputElement>): LoadPhotoType => {
//   const selectedFile = event.target.files && event.target.files[0];

//   if (!selectedFile) {
//     return { name: '', value: null, status: false, error: 'No file selected' };
//   }

//   // Check file type
//   if (!selectedFile.type.includes('jpeg') && !selectedFile.type.includes('jpg')) {
//     return {
//       name: selectedFile.name,
//       value: selectedFile,
//       status: false,
//       error: 'Invalid file type, please upload a jpeg or jpg file',
//     };
//   }

//   // Check file size
//   const maxSize = 5 * 1024 * 1024; // 5MB
//   if (selectedFile.size > maxSize) {
//     return {
//       name: selectedFile.name,
//       value: selectedFile,
//       status: false,
//       error: 'File size is too large, please upload a file up to 5MB',
//     };
//   }

//   // Check image dimensions
//   const img = new Image();
//   img.src = window.URL.createObjectURL(selectedFile);
//   img.onload = () => {
//     const { width, height } = img;

//     if (width < 70 || height < 70) {
//       return {
//         name: selectedFile.name,
//         value: selectedFile,
//         status: false,
//         error:
//           'Image dimensions are too small, please upload an image with dimensions of at least 70x70px',
//       };
//     }

//     // If all checks pass, handle the selected file
//     return {
//       name: selectedFile.name,
//       value: selectedFile,
//       status: true,
//       error: 'File uploaded successfully',
//     };
//   };
// };
