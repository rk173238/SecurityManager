import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const SessionTimeoutDialog=(props)=>{
  return (
        <Dialog
          open={props.open}
          onClose={props.handleContinueSession}
        >
          <DialogTitle id="alert-dialog-title">{"Session Expiry Warning!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your session expires in {props.timer} seconds!
              <br/>
              Do you wish to continue session?
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{pointerEvents: 'all'}}>
            <Button onClick={props.handleContinueSession} color="primary">
              Yes
            </Button>
            <Button onClick={props.handleDiscontinueSession} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      )
}
export default SessionTimeoutDialog;
