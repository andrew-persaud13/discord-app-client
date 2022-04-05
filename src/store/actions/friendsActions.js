import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_FRIENDS: 'FRIENDS.SET_ONLINE_FRIENDS',
};

export const getActions = (dispatch) => ({
  sendFriendInvitation: (data, closeDialogHandler) =>
    dispatch(sendFriendInvitation(data, closeDialogHandler)),
});

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => ({
  type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
  pendingFriendsInvitations,
});

export const sendFriendInvitation =
  (data, closeDialogHandler) => async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.isError) {
      dispatch(openAlertMessage(response.error.response.data));
    } else {
      dispatch(openAlertMessage('Invitation has been sent'));
      closeDialogHandler();
    }
  };
