import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';
import Message from './Message';

import MOCK_MESSAGES from './mock_messages';

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {MOCK_MESSAGES.map((message, idx) => (
        <Message message={message} key={message._id} />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => ({
  ...chat,
});

export default connect(mapStateToProps)(Messages);
