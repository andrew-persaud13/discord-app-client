import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/system';

import PendingInvitationsListItem from './PendingInvitationsListItem';

const MainContainer = styled('div')({
  height: '22%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => (
        <PendingInvitationsListItem
          invitation={invitation}
          key={invitation._id}
        />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ friends }) => ({
  pendingFriendsInvitations: friends.pendingFriendsInvitations,
});

export default connect(mapStateToProps)(PendingInvitationsList);
