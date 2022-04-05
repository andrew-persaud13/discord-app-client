import { friendsActions } from '../actions/friendsActions';

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case friendsActions.SET_FRIENDS:
      return { ...state, friends: action.friends };
    case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: action.pendingFriendsInvitations,
      };
    case friendsActions.SET_ONLINE_FRIENDS:
      return { ...state, onlineUsers: action.onlineUsers };
    default:
      return state;
  }
};

export default friendsReducer;
