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
  socket = io('http://localhost:3001', {
    auth: {
      token: userDetails.token,
    },
  });

  socket.on('connect', () => {
    console.log('Successfully connected with socketio server');
    console.log(socket.id);
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

  socket.on('direct-chat-history', (data) => {
    console.log('Direct chat historuy');
    console.log(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  socket.emit('direct-chat-history', data);
};
