import React from 'react';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import PropTypes from 'prop-types';
const jssStyles = theme => ({
  root: {
    margin:0,
    width: '70%',
    color:'#fff'
  },
  cssFocused: {},
  cssUnderline: {
    '&:before': {
      borderBottomColor: 'rgb(224, 224, 224)',
    },
    '&$disabled:before': {
      borderBottom: '1px dotted #fff' ,
    },
    '&:hover:not($disabled):not($error):not($focused):before': {
      borderBottomColor: 'rgb(0,188,212)',
    },
    '&:after': {
      borderBottomColor: 'rgb(0,188,212)',
    },
  },
  disabled: {
    color:'#fff',
    '&:before': {
      borderBottomColor: 'rgb(224, 224, 224)',
    },
  },
  error: {},
  focused: {},
  cssInput:{
    color:'#fff'
  },
  '@media (min-width: 768px)': {

  }

});
const NewPassword=(props)=>{
  const {classes}=props
  return(


         <Input
           type={props.type}
           classes={{
             root:classes.root,
             underline: classes.cssUnderline,
             disabled:classes.disabled
           }}
           placeholder={props.placeholder}
           name={props.name}
           onChange={props.onChange}
           disabled={props.disabled}
           value={props.value}
         />

  );
}


export default withStyles(jssStyles)(NewPassword);
