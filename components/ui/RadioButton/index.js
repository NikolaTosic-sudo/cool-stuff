import React from "react";
import { StyledRadio } from "./style";

const RadioBtn = ({
  value,
  onClick,
  label,
  labelPosition,
  id,
  onChange,
  disabled,
  name,
}) => {
  return (
    <StyledRadio
      labelPosition={labelPosition}
      onClick={onClick}
      disabled={disabled}
    >
      <input
        value={value}
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id} className="radio-label">
        {label}
      </label>
    </StyledRadio>
  );
};

export default RadioBtn;
