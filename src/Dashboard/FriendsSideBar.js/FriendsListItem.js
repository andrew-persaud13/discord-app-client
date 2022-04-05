import { Button, Typography } from '@mui/material';
import React from 'react';

import Avatar from '../../shared/components/Avatar';
import OnlineIndicator from './OnlineIndicator';

const FriendsListItem = ({ user }) => {
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

export default FriendsListItem;
