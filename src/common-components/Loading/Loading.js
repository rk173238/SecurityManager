import React from 'react';
import ReactLoading from "react-loading";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from 'material-ui/Paper';

import classes from './Loading.css'
const Loading = (props)=>(
  <Paper className={classes.flexContainer} >
    <div className={classes.modal}>
    </div>
    <Dialog
        className={classes.dialog}
        open={true}
        onClose={()=>{}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="simple-dialog-title">
          <ReactLoading height={'100%'} width={'100%'} type={"spinningBubbles"} color="#000" />
          Loading
        </DialogTitle>
    </Dialog>
  </Paper>
)
export default Loading;
