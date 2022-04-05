import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { styled } from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar.js/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../utils/auth';
import { getActions } from '../store/actions/authActions';
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (!userDetails) {
      logout();
    } else {
      const parsedUser = JSON.parse(userDetails);
      setUserDetails(parsedUser);
      connectWithSocketServer(parsedUser);
    }
  }, [setUserDetails]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapDispatchToProps)(Dashboard);
