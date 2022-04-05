import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { validateAddFriendDialog } from '../../utils/validators';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateAddFriendDialog(email));
  }, [email, setIsFormValid]);

  const handleSendInvitation = () => {
    sendFriendInvitation({ targetEmail: email }, closeDialogHandler);
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography> Invite a Friend! </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContent>
            {/* <Typography>Enter email address of friend to invite!</Typography> */}
            <InputWithLabel
              value={email}
              setValue={setEmail}
              placeholder='Enter email...'
              type='text'
              label='Email'
            />
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label='Send'
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapDispatchToProps)(AddFriendDialog);
