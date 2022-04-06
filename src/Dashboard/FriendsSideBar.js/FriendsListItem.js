import { Button, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';

import Avatar from '../../shared/components/Avatar';
import { chatTypes, getActions } from '../../store/actions/chatActions';
import OnlineIndicator from './OnlineIndicator';

const FriendsListItem = ({ user, setChosenChatDetails }) => {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails(
      { id: user._id, name: user.username },
      chatTypes.DIRECT
    );
  };
  return (
    <Button
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
      onClick={handleChooseActiveConversation}
    >
      <Avatar username={user.username} />
      <Typography
        style={{
          marginLeft: '7px',
          fontWeight: '700',
          color: '#8e9297',
        }}
        variant='subtitle1'
        align='left'
      >
        {user.username}
      </Typography>
      {user.isOnline && <OnlineIndicator />}
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapDispatchToProps)(FriendsListItem);
