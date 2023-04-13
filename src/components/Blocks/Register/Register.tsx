import React, { useEffect, useState } from 'react';
import Input from '../../../ui/Input/Input';
import Select from '../../../ui/Select/Select';
import Button from '../../../ui/Button/Button';
import LoadPhoto from '../../../ui/LoadPhoto/LoadPhoto';
import { validateEmail, validateName, validatePhoneNumber } from '../../../utils/validateInput';
import { usersPosition } from '../../../redux/register/types';
import { useAppDispatch } from '../../../redux/store';
import { fetchAsyncRegister } from '../../../redux/register/fetchAsyncRegister';

import './Register.scss';

interface RegisterType {
  usersPosition: usersPosition[];
}

const Register: React.FC<RegisterType> = ({ usersPosition }) => {
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
  const [isPhoto, setPhoto] = useState<File>(null!);

  const validateForm = () => {
    return Object.values(isValid).every((value) => value);
  };

  useEffect(() => {
    setButtonDisabled(!validateForm());
  }, [isValid, isName, isEmail, isPhone]);

  console.log(isValid);

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

  const onRegister = async () => {
    let userData = {
      name: isName,
      email: isEmail,
      phone: isPhone,
      position_id: position,
      photo: isPhoto,
    };

    dispatch(fetchAsyncRegister(userData));
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
          <LoadPhoto hadlePhoto={(photo) => setPhoto(photo)} />
        </div>
        <div className="register__send">
          <Button onClick={onRegister} disabled={isButtonDisabled} primary>
            Sing up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
