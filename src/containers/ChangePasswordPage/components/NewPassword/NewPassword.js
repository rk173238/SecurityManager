import React from 'react';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputField from '../InputField/InputField'
import Loading from '../../../../common-components/Loading/Loading';
const NewPassword=(props)=>{
  return(
     <div>
       <InputField inputName='newPassword'
                   inputLabel='New Password'
                   placeholder="Enter New Password"
                   type='password'
                   disabled={false}
                   onChange={props.onChange}
                   style={{
                    fontFamily:"\"Ubuntu Mono\", monospace"
                  }}
                   />
       <InputField inputName='reNewPassword'
                   inputLabel='Re-Enter Password'
                   placeholder="Re-Enter New Password"
                   type='password'
                   disabled={false}
                   onChange={props.onChange}
                   onKeyPress={props.onKeyPress}
                   style={{
                    fontFamily:"\"Ubuntu Mono\", monospace"
                  }}
                   />
       <Button 
          onClick = {props.handleClick} 
          variant="contained"
          style={{
            fontFamily:"\"Ubuntu Mono\", monospace"
          }}
        >
          change password
        </Button>
       {props.changingPass &&<Loading/>}
       {props.error.map((e,i)=><FormHelperText key={i} style={{color:'red'}}>{e}</FormHelperText>)}
       {(props.clicked&&props.valid)?<FormHelperText style={{color:'red'}}>Password Changed Successfully</FormHelperText>:
        (props.similarity&&props.clicked)?(<FormHelperText style={{color:'red'}}>Please Enter a Different Password</FormHelperText>):
        (props.clicked)?(<FormHelperText style={{color:'red'}}>Passwords do not match</FormHelperText>):null }
     </div>
  );
}
export default NewPassword;
