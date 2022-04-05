export const validateLogin = ({ email, password }) =>
  validateEmail(email) && validatePassword(password);

export const validateRegister = ({ email, password, username }) =>
  validateLogin({ email, password }) && validateUsername(username);

export const validateAddFriendDialog = (email) => validateEmail(email);

const validatePassword = (password) => {
  return password && password.length > 5 && password.length <= 12;
};

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return email && emailPattern.test(email);
};

const validateUsername = (username) =>
  username && username.length > 2 && username.length < 13;
