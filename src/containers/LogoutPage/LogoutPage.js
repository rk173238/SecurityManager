import React,{Component} from 'react';
import classes from './LogoutPage.css';
import Paper from 'material-ui/Paper';
import { userActions } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
class LogoutPage extends Component{
  componentDidUpdate(){
    setTimeout(()=>this.props.history.push('/login'),2500);
  }
  componentDidMount(){
    this.props.onLogout();
  }
  render(){
    return(
      <Paper className={classes.flexContainer}>
        <h1 style={{padding:'0 33%'}}>Logged Out Successfully</h1>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () =>  dispatch(userActions.logout())
    }
};
export default withRouter(connect(null,mapDispatchToProps)(LogoutPage));
