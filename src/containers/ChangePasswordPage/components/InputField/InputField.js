import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
const jssStyles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    width: '80%'

  },
  cssLabel: {
    color: 'rgba(255, 255, 255, 0.56)',
    '&$cssFocused': {
      color: 'rgb(0,188,212)',
    },
    '&:before': {
      color: 'rgba(255, 255, 255, 0.56)',
    },
    '&:hover:not($disabled):not($error):not($focused):before': {
      color: 'rgba(255, 255, 255, 0.56)',
    },
    '&:after': {
      color: 'rgba(255, 255, 255, 0.56)',
    },
    '&$disabled:after': {
      color: 'rgba(255, 255, 255, 0.56)',
    },
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
  textField:{

  },
  cssInput:{
    color:'#fff'
  },
  '@media (min-width: 768px)': {
    margin: {
      width: '100%'

    }
  }

});

const InputField=(props)=>{
    const {classes}=props
  return (
      <FormControl className={classes.margin} disabled = {props.disabled}>
          <InputLabel
            style={props.style}
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            disabled={props.disabled}
          >
            {props.inputLabel}
          </InputLabel>
          <Input
            type={props.type}
            classes={{
              root:classes.cssInput,
              underline: classes.cssUnderline,
              disabled:classes.disabled
            }}
            placeholder={props.placeholder}
            name={props.inputName}
            value={props.value}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
          />
      </FormControl>
  )
}
export default withStyles(jssStyles)(InputField);
