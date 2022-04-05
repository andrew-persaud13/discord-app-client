import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
}) => {
  return (
    <>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        type='text'
        placeholder='Enter your username...'
        label='Username'
      />
      <InputWithLabel
        value={email}
        setValue={setEmail}
        type='text'
        placeholder='Enter your email...'
        label='Email'
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        type='password'
        label='Password'
        placeholder='Enter your passord'
      />
    </>
  );
};

export default RegisterPageInputs;
