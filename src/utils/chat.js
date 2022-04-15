import store from '../store';
import { setMessages } from '../store/actions/chatActions';

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      messages,
      usersInConversation,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  messages,
  usersInConversation,
}) => {
  const isActiveChat = participants.every((participant) =>
    usersInConversation.includes(participant)
  );

  if (isActiveChat) store.dispatch(setMessages(messages));
};
