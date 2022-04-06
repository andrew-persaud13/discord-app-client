import io from 'socket.io-client';
import store from '../store/';
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from '../store/actions/friendsActions';

let socket = null;

/*

Listen for events from the server here and dispatch the data

*/

export const connectWithSocketServer = (userDetails) => {
  console.log('here');
  socket = io('http://localhost:3001', {
    auth: {
      token: userDetails.token,
    },
  });

  socket.on('connect', () => {
    console.log('Successfully connected with socketio server');
    console.log(socket.id);

    //dispatch stuff
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on('friends-list', (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });
};
