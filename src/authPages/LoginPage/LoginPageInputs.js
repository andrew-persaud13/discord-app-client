import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({
  email,
  setEmail,
  password,
  setPassword,
  isFormValid,
}) => {
  return (
    <>
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

export default LoginPageInputs;
