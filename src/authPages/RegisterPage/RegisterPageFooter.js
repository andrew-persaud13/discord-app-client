import React from 'react';
import { Tooltip } from '@mui/material';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';

const invalidFormMessage = () => 'Email or password not in valid format';

const validFormMessage = () =>
  'Email and password and username are in valid formats';

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  return (
    <>
      <Tooltip title={!isFormValid ? invalidFormMessage() : validFormMessage()}>
        <div>
          <CustomPrimaryButton
            label='Submit'
            onClick={handleRegister}
            disabled={!isFormValid}
            additionalStyles={{ marginTop: '30px' }}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Already registered? '
        redirectText='Login here'
        path='/login'
        additionalStyles={{ marginTop: '10px' }}
      />
    </>
  );
};

export default RegisterPageFooter;
