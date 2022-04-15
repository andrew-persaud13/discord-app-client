import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';
import Message from './Message';
import DateSeparator from './DateSeparator';
import { dividerClasses } from '@mui/material';

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

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
      {messages.map((message, index) => {
        message.sameAuthor =
          index > 0 &&
          messages[index].author._id === messages[index - 1].author._id;

        message.sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy') ===
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              'dd/mm/yy'
            );
        return (
          <div key={message._id} style={{ width: '97%' }}>
            {(!message.sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  'dd/mm/yy'
                )}
              />
            )}
            <Message message={message} key={message._id} />
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => ({
  ...chat,
});

export default connect(mapStateToProps)(Messages);
