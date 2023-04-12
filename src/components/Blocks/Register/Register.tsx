import React, { useEffect, useState } from 'react';
import Input from '../../../ui/Input/Input';
import Select from '../../../ui/Select/Select';
import Button from '../../../ui/Button/Button';
import LoadPhoto from '../../../ui/LoadPhoto/LoadPhoto';
import { validateEmail, validateName, validatePhoneNumber } from '../../../utils/validateInput';
import { usersPosition } from '../../../redux/users/types';

import './Register.scss';

interface RegisterType {
  usersPosition: usersPosition[];
}

const Register: React.FC<RegisterType> = ({ usersPosition }) => {
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
  const [position, setPosition] = useState<string | null>(null);

  const validateForm = () => {
    const isValidForm = Object.values(isValid).every((value) => value);
    setButtonDisabled(!isValidForm);
  };

  useEffect(() => {
    validateForm();
  }, [isValid, isName, isEmail, isPhone]);

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
    console.log(value);
    setValid((prevState) => ({ ...prevState, position: true, photo: true }));
    setPosition(value);
  };

  return (
    <div id="signUp" className="register">
      <h2 className="register__title">Working with POST request</h2>
      <form className="register__form">
        <div className="register__input">
          <Input
            value={isName}
            onChange={(e) => handleNameChange(e.target.value)}
            error={!isValid.name}
            helperText={!isValid.name ? 'Username should contain 2-60 characters' : ''}
            type="text"
            label="Your name"
          />
        </div>

        <div className="register__input">
          <Input
            value={isEmail}
            onChange={(e) => handleEmailChange(e.target.value)}
            error={!isValid.email}
            helperText={!isValid.email ? 'Email entered incorrectly' : ''}
            type="email"
            label="Email"
          />
        </div>

        <div className="register__input">
          <Input
            value={isPhone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            error={!isValid.phone}
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
          <LoadPhoto />
        </div>
        <div className="register__send">
          <Button disabled={isButtonDisabled} primary>
            Sing up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
