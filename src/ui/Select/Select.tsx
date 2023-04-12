import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import './Select.scss';
import { usersPosition } from '../../redux/users/types';

interface SelectType {
  onChange: (e: any) => void;
  label: string;
  radioLabels: usersPosition[];
}

const Select: React.FC<SelectType> = ({ onChange, label, radioLabels }) => {
  return (
    <FormControl className="select">
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        onChange={onChange}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group">
        {radioLabels.map((radioLabel) => (
          <FormControlLabel
            key={radioLabel.id}
            value={radioLabel.id}
            control={<Radio />}
            label={radioLabel.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Select;
