import React,{Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import cssClasses from '../../LoginPage.css'
const jssStyles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    width: '80%'

  },
  cssLabel: {
    color: 'rgb(152, 167, 169)',
    '&$cssFocused': {
      color: 'rgb(0,188,212)',
    },

  },
  cssFocused: {},
  cssUnderline: {
    '&:before': {
      borderBottomColor: 'rgb(224, 224, 224)',
    },
    '&:hover:not($disabled):not($error):not($focused):before': {
      borderBottomColor: 'rgb(0,188,212)',
    },
    '&:after': {
      borderBottomColor: 'rgb(0,188,212)',
    },
  },
  disabled: {},
  error: {},
  focused: {},
  cssInput:{
    color:'#fff'
  },
  '@media (min-width: 768px)': {
    margin: {
      width: '60%'

    }

  }

});
//<img src="C:\Users\asinha\Desktop\SMC Workplace\smc-demo-wip\ED8.jpeg"/>
const NewFields=(props)=>{
  const {classes}=props
  return (<Fragment>
  <FormControl className={classes.margin} >
      <InputLabel
        FormLabelClasses={{
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }}
      >
      <svg xmlns="http://www.w3.org/2000/svg"  width="22" height="22" fill="white" viewBox="0 0 18 18"><path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z"/></svg>

      </InputLabel>
      <Input
        classes={{
          root:classes.cssInput,
          underline: classes.cssUnderline
        }}
        placeholder=""
        name='username'
        value={props.username}
        onChange={props.handleChange}
      />
      {props.submitted && !props.username &&<FormHelperText className={cssClasses.helpBlock}>Username is required</FormHelperText>

                 }
  </FormControl>

  <br/>
  <FormControl className={classes.margin}>
      <InputLabel
        FormLabelClasses={{
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
      </InputLabel>
      <Input
        classes={{
          underline: classes.cssUnderline
        }}
        style={{color:'#fff'}}
        type='password'
        placeholder=""
        name='password'
        value={props.password}
        onChange={props.handleChange}
      />
      <br/>
      {props.submitted && !props.password &&<FormHelperText className={cssClasses.helpBlock}>Password is required</FormHelperText>
    }
  </FormControl>

  <br/>
  </Fragment>
)};
NewFields.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(jssStyles)(NewFields);
