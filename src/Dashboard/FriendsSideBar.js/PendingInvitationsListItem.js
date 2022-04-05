import { Box, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

import Avatar from '../../shared/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons ';

const PendingInvitationsListItem = ({
  invitation,
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id: invitation._id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id: invitation._id });
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
            acceptHandler={handleAcceptInvitation}
            rejectHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapDispatchToProps)(PendingInvitationsListItem);
