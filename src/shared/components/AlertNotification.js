import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/alertActions';

const AlertNotification = ({
  showAlertMessage,
  content,
  closeAlertMessage,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={7000}
    >
      <Alert severity='info'>{content}</Alert>
    </Snackbar>
  );
};

const mapStateToProps = ({ alert }) => ({
  showAlertMessage: alert.showAlertMessage,
  content: alert.alertMessageContent,
});

const mapDispatchToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertNotification);
