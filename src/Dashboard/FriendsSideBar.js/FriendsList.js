import React from 'react';
import { styled } from '@mui/system';

import FriendsListItem from './FriendsListItem';

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: 'Mapleton',
    isOnline: true,
  },
  {
    id: 2,
    username: 'Chickadee',
    isOnline: true,
  },
  {
    id: 3,
    username: 'Teddy',
    isOnline: false,
  },
];

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendsListItem user={friend} key={friend.id} />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
