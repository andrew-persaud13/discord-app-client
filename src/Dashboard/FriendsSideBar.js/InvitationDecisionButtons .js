import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

const InvitationDecisionButtons = ({
  disabled,
  acceptHandler,
  rejectHandler,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={acceptHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={rejectHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
