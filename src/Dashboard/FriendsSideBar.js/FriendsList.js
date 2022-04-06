import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/system';

import FriendsListItem from './FriendsListItem';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ friends, onlineUsers }) => {
  const checkOnlineUsers = () => {
    const onlineIds = onlineUsers.map((user) => user.userId);
    const updatedFriends = friends.map((friend) => {
      return onlineIds.includes(friend._id)
        ? { ...friend, isOnline: true }
        : { ...friend, isOnline: false };
    });

    return updatedFriends;
  };
  return (
    <MainContainer>
      {checkOnlineUsers().map((friend) => (
        <FriendsListItem user={friend} key={friend._id} />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ friends }) => ({
  friends: friends.friends,
  onlineUsers: friends.onlineUsers,
});

export default connect(mapStateToProps)(FriendsList);
