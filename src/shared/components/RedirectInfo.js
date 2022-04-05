import { Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { styled } from '@mui/system';

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor: 'pointer',
});

const RedirectInfo = ({ text, redirectText, additionalStyles, path }) => {
  const history = useHistory();
  return (
    <Typography
      style={additionalStyles ? additionalStyles : {}}
      sx={{
        color: '#72767d',
      }}
      variant='subtitle2'
    >
      {text}
      <RedirectText onClick={() => history.push(path)}>
        {redirectText}
      </RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
