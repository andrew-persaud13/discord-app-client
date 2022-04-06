import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/system';

import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';

const MainContainer = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393f',
  marginTop: '48px',
  display: 'flex',
});

const Messenger = ({ chosenChatDetails }) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => ({
  ...chat,
});

export default connect(mapStateToProps)(Messenger);
