import React from 'react';
import NewPassword from '../NewPassword/NewPassword'
import Button from '@material-ui/core/Button';
import InputField from '../InputField/InputField'
import FormHelperText from '@material-ui/core/FormHelperText';
import classes from './OldPasswordVerification.css'
const OldPasswordVerification=(props)=>{
  return (
  <div className={classes.App}>
    <form>
      <h4 className={classes.App}>Change Password</h4>
      <InputField 
        inputName='username'
        inputLabel='Username'
        placeholder="Username"
        type='text'
        disabled={true}
        value={props.user}
        onChange={props.onChangeOne}
        style={{
          color: 'rgba(255, 255, 255, 0.56)',
          fontFamily:"\"Ubuntu Mono\", monospace"
        }}
      />
      <InputField 
        inputName='oldPassword'
        inputLabel='Current Password'
        placeholder="Enter Current Password"
        type='password'
        // disabled={props.valid}
        value={props.enteredPass}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        style={{
          fontFamily:"\"Ubuntu Mono\", monospace"
        }}
      />
      <Button 
        onClick = {props.handleClick}
        disabled = {props.valid}
        variant="contained" 
        style={{
          fontFamily:"\"Ubuntu Mono\", monospace"
        }}
      >
          Validate
      </Button>
            {props.validatingPass &&
              <img alt='none' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
            {props.valid ? (<NewPassword clicked={props.clickedNP}
                                  error={props.error}
                                  similarity={props.similarity}
                                  onChange= {props.onChange}
                                  handleClick={props.handleClickChangePassword}
                                  onKeyPress={props.onKeyPressNP}
                                  changingPass={props.changingPass}
                                  valid= {props.validNP}/>) : props.clicked?<FormHelperText style={{color:'red'}}>Please Enter Correct Password</FormHelperText>:null}
    </form>
  </div>
  )
}
export default OldPasswordVerification;
