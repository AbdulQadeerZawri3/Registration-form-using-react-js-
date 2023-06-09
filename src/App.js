import React, { useState } from 'react';
import './style.css';
import FormInput from './components/formInput.js';
export default function App() {
  const [value, setValue] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const input = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      placeholder: 'UserName',
      label: 'UserName',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'birthday',
      label: 'birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      placeholder: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      label: 'Password',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'ConfirmPassword',
      errorMessage: "Passwords don't match!",
      label: 'ConfirmPassword',
      pattern: value.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);
  return (
    <div className="app">
      <form action="" className="wholeForm" onSubmit={handleSubmit}>
        <h1>Badmaash Game</h1>
        {input.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
