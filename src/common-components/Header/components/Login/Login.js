import React,{Fragment} from 'react';
// import FlatButton from 'material-ui/FlatButton';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import classes from './Login.css';


const Login =(props)=>{
  return (
    <Fragment>

      <Button component={Link} to="/help"
              className={classes.loginBtn}
              >Help</Button>
    </Fragment>
  );
}
export default Login;
