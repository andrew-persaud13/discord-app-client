import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthBox from '../../shared/components/AuthBox';
import { getActions } from '../../store/actions/authActions';
import { validateRegister } from '../../utils/validators';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';

const RegisterPage = ({ register }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsFormValid(validateRegister({ email, password, username }));
  }, [email, password, username, setIsFormValid]);

  const handleRegister = () => {
    register({ email, password, username }, history);
  };

  return (
    <AuthBox>
      <Typography variant='5' sx={{ color: 'white' }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
