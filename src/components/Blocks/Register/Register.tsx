import React from 'react';
import Input from '../../../ui/Input/Input';
import Select from '../../../ui/Select/Select';
import Button from '../../../ui/Button/Button';
import LoadPhoto from '../../../ui/LoadPhoto/LoadPhoto';

import './Register.scss';

const inputInfo = [
  { type: 'text', label: 'Your name' },
  { type: 'email', label: 'Email' },
  { type: 'tel', label: 'Phone', helperText: '+38 (XXX) XXX - XX - XX' },
];

const Register: React.FC = () => {
  return (
    <div className="register">
      <h2 className="register__title">Working with POST request</h2>
      <form className="register__form">
        {inputInfo.map((input) => (
          <div className="register__input">
            <Input {...input} />
          </div>
        ))}
        <div className="register__position">
          <Select
            label="Select your position"
            radioLabels={['Frontend developer', 'Backend developer', 'Designer', 'QA']}
          />
        </div>
        <div className="register__photo">
          <LoadPhoto />
        </div>
				<div className='register__send'>
					<Button primary disabled >Sing up</Button>
				</div>
      </form>
    </div>
  );
};

export default Register;
