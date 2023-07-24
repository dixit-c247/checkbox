import React, { FC, InputHTMLAttributes } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <label className="checkbox-container">
      {label}
      <input type="checkbox" {...rest} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
