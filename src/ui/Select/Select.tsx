import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import './Select.scss';

interface SelectType {
  label: string;
  radioLabels: string[];
}

const Select: React.FC<SelectType> = ({ label, radioLabels }) => {
  return (
    <FormControl className="select">
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={radioLabels[0]}
        name="radio-buttons-group">
        {radioLabels.map((radioLabel) => (
          <FormControlLabel value={radioLabel} control={<Radio />} label={radioLabel} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Select;
