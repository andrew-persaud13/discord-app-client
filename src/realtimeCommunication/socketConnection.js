import io from 'socket.io-client';
import store from '../store/';
import { setPendingFriendsInvitations } from '../store/actions/friendsActions';

let socket = null;

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
    console.log('got pending inv');
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
};
