export const chatTypes = {
  DIRECT: 'CHAT.DIRECT',
  GROUP: 'CHAT.GROUP',
};

export const chatActions = {
  SET_CHOSEN_CHAT_DETAILS: 'CHAT.SET_CHOSEN_CHAT_DETAILS',
  SET_MESSAGES: 'CHAT.SET_MESSAGES',
  SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE',
};

export const getActions = (dispatch) => ({
  setChosenChatDetails: (details, chatType) =>
    dispatch(setChosenChatDetails(details, chatType)),
});

export const setChosenChatDetails = (chatDetails, type) => ({
  type: chatActions.SET_CHOSEN_CHAT_DETAILS,
  chatType: type,
  chatDetails,
});

export const setMessages = (messages) => ({
  type: chatActions.SET_MESSAGES,
  messages,
});
