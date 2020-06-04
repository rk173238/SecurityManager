import React,{Component} from 'react';
import classes from './ChangePasswordPage.css';
import { userActions } from '../../actions';
import { userService } from '../../services';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Paper from 'material-ui/Paper'
import OldPasswordVerification from './components/OldPasswordVerification/OldPasswordVerification';
class ChangePasswordPage extends Component{
  constructor(props){
    super(props);
    this.state = {
         valid : false,
         clicked:false,
         similarity :false,
         validNP : false,
         clickedNP:false,
    }
  }
  onChange=(e)=>{
     this.setState({
       [e.target.name] : e.currentTarget.value
     });
   }
  handleClickChangePassword=(e)=>{
     this.setState({clickedNP: true})
     if(this.state.reNewPassword === this.state.newPassword){
       if(this.state.reNewPassword === this.state.oldPassword){
         this.setState({
         similarity : true,
         validNP:false
         })
       }
       else{
         this.setState({
         similarity : false,
         validNP :true
         })
         const { oldPassword, newPassword} = this.state;
         if (oldPassword && newPassword && oldPassword !== newPassword) {
             this.props.onChangePassword(this.props.user,oldPassword, newPassword);
         }
       }
     }
     else{
       this.setState({
       similarity : false,
       validNP :false
       })
     }
  }
  keyPress=(e)=>{
    if(e.key==='Enter'){
      this.handleClick(e)
    }
  }
  keyPressNewPassword=(e)=>{
    if(e.key==='Enter'){
      this.handleClickChangePassword(e)
    }
  }
  handleClick=(e)=>{
     this.setState({clicked: true})
     userService.checkOldPassword(this.props.user,this.state.oldPassword).then(res=>{
       console.log(res)
       if(res){
         this.setState({
         valid : true,
         })
       }
     })
  }
  render(){
    return(
      <Paper className={classes.flexContainer}>
        <OldPasswordVerification
          clicked={this.state.clicked}
          similarity={this.state.similarity}
          user={this.props.user}
          onChange={this.onChange}
          onKeyPress={this.keyPress}
          onKeyPressNP={this.keyPressNewPassword}
          valid={this.state.valid}
          validatingPass={this.props.validatingPass}
          changingPass={this.props.changingPass}
          handleClick={this.handleClick}
          clickedNP={this.state.clickedNP}
          error={this.props.error}
          handleClickChangePassword={this.handleClickChangePassword}
          validNP= {this.props.changedPass}/>
      </Paper>
    );
  }
}
const mapStateToProps=(state)=> {
    const { changedPass,changingPass,error } = state.changePassword;
    console.log(state);
    return {
        changingPass,
        changedPass,
        error,
        alert: state.alert,
        user:state.login.user
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onChangePassword: (user, oldPassword, newPassword) =>  dispatch(userActions.changePassword(user, oldPassword, newPassword))
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChangePasswordPage));
