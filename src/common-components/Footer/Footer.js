import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import classes from './footer.css';
class Footer extends Component {
  render() {
    return (
      <Paper className={classes.footer}>
        <img src={require("../../assets/logo.png")} alt="Logo" className={classes.logo}/><p>Developed by <strong>Wipro Ltd.</strong></p>
      </Paper>
    );
  }
}
export default Footer;
