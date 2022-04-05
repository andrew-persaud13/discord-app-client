import React from 'react';
import { Tooltip } from '@mui/material';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';

const invalidFormMessage = () => 'Email or password not in valid format';

const validFormMessage = () => 'Email and password are in valid formats';

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  return (
    <>
      <Tooltip title={!isFormValid ? invalidFormMessage() : validFormMessage()}>
        <div>
          <CustomPrimaryButton
            label='Submit'
            onClick={handleLogin}
            disabled={!isFormValid}
            additionalStyles={{ marginTop: '30px' }}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Need an account? '
        redirectText='Register here'
        path='/register'
        additionalStyles={{ marginTop: '10px' }}
      />
    </>
  );
};

export default LoginPageFooter;
