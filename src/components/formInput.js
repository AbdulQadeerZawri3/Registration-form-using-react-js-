import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputPorps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {/* <label htmlFor="">UserName</label> */}
      <label> {label} </label>
      <input
        className="eachInput"
        {...inputPorps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus = {() => {
          inputPorps.name === "confirmPassword" && setFocused(true)
        }}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
