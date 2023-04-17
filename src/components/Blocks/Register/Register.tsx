import React, { useEffect, useState } from 'react';
import Input from '../../../ui/Input/Input';
import Select from '../../../ui/Select/Select';
import Button from '../../../ui/Button/Button';
import LoadPhoto from '../../../ui/LoadPhoto/LoadPhoto';
import {
  validateEmail,
  validateName,
  validatePhoneNumber,
  validatePhoto,
} from '../../../utils/validateInput';
import { responseRegister, usersPosition } from '../../../redux/register/types';
import { useAppDispatch } from '../../../redux/store';
import { fetchAsyncRegister } from '../../../redux/register/fetchAsyncRegister';

import './Register.scss';
import RegStatus from './RegStatus/RegStatus';

interface RegisterType {
  usersPosition: usersPosition[];
  result: responseRegister;
}

export type LoadPhotoType = {
  name: string;
  value: File | null;
  status: boolean;
  error: string;
};

const Register: React.FC<RegisterType> = ({ usersPosition, result }) => {
  const dispatch = useAppDispatch();
  const [isValid, setValid] = useState({
    name: false,
    phone: false,
    email: false,
    position: false,
    photo: false,
  });
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isName, setName] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isPhone, setPhone] = useState('');
  const [position, setPosition] = useState<number>(0!);
  const [photo, setPhoto] = useState<LoadPhotoType>({
    name: '',
    value: null,
    status: false,
    error: '',
  });

  console.log(result);

  useEffect(() => {
    setButtonDisabled(!validateForm());
  }, [isValid]);

  const validateForm = () => {
    return Object.values(isValid).every((value) => value);
  };

  const handleNameChange = (value: string) => {
    const isNameValid = validateName(value);
    setValid((prevState) => ({ ...prevState, name: isNameValid }));
    setName(value);
  };

  const handleEmailChange = (value: string) => {
    const isEmailValid = validateEmail(value);
    setValid((prevState) => ({ ...prevState, email: isEmailValid }));
    setEmail(value);
  };

  const handlePhoneChange = (value: string) => {
    const isPhoneNumberValid = validatePhoneNumber(value);
    setValid((prevState) => ({ ...prevState, phone: isPhoneNumberValid }));
    setPhone(value);
  };

  const hadlePositionChange = (value: string) => {
    setValid((prevState) => ({ ...prevState, position: true }));
    setPosition(+value);
  };

  const handleFileSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const isPhotoValid = await validatePhoto(event);
    setValid((prevState) => ({ ...prevState, photo: isPhotoValid.status }));
    setPhoto(isPhotoValid);
  };

  const onRegister = async () => {
    if (photo.value !== null) {
      let userData = {
        name: isName,
        email: isEmail,
        phone: isPhone,
        position_id: position,
        photo: photo.value,
      };

      dispatch(fetchAsyncRegister(userData));
    }
  };

  const showError = (value: string, valid: boolean) => {
    return value !== '' && valid;
  };

  return (
    <div id="signUp" className="register">
      <h2 className="register__title">Working with POST request</h2>
      <form className="register__form">
        <div className="register__input">
          <Input
            value={isName}
            onChange={(e) => handleNameChange(e.target.value)}
            error={showError(isName, !isValid.name)}
            helperText={
              showError(isName, !isValid.name) ? 'Username should contain 2-60 characters' : ''
            }
            type="text"
            label="Your name"
          />
        </div>

        <div className="register__input">
          <Input
            value={isEmail}
            onChange={(e) => handleEmailChange(e.target.value)}
            error={showError(isEmail, !isValid.email)}
            helperText={showError(isEmail, !isValid.email) ? 'Email entered incorrectly' : ''}
            type="email"
            label="Email"
          />
        </div>

        <div className="register__input">
          <Input
            value={isPhone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            error={showError(isPhone, !isValid.phone)}
            type="tel"
            label="Phone"
            helperText="+38 (XXX) XXX - XX - XX"
          />
        </div>

        <div className="register__position">
          <Select
            onChange={(e) => hadlePositionChange(e.target.value)}
            label="Select your position"
            radioLabels={usersPosition}
          />
        </div>
        <div className="register__photo">
          <LoadPhoto file={photo} hadlePhoto={(event) => handleFileSelected(event)} />
        </div>
        <div className="register__send">
          <Button onClick={onRegister} disabled={isButtonDisabled} primary>
            Sing up
          </Button>
        </div>
      </form>

      {result.success && (
        <div className="register__status">
          <RegStatus message={result.message} success={result.success} />
        </div>
      )}
    </div>
  );
};

export default Register;
