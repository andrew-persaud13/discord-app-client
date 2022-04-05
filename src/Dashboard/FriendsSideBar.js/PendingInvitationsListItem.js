import { Box, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';

import Avatar from '../../shared/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons ';

const PendingInvitationsListItem = ({
  invitation,
  acceptFriend,
  rejectFriend,
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriend({ id: invitation._id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriend({ id: invitation._id });
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={invitation.senderId.email}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar username={invitation.senderId.username} />
          <Typography
            sx={{
              marginLeft: '7px',
              fontWeight: 700,
              color: '#8e9297',
              flexGrow: 1,
            }}
            variant='subtitle2'
          >
            {invitation.senderId.username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptHandler={acceptFriend}
            rejectHandler={rejectFriend}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
