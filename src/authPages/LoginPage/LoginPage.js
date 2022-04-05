import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getActions } from '../../store/actions/authActions';

import AuthBox from '../../shared/components/AuthBox';
import { validateLogin } from '../../utils/validators';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsFormValid(validateLogin({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    login({ email, password }, history);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(null, mapDispatchToProps)(LoginPage);
