import React,{Component,Fragment} from 'react';


import LoginPage from './LoginPage/LoginPage';
import {Route,Redirect,Switch} from 'react-router';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {userService,weightageService} from '../services';
import { dataActions,deviceActions } from '../actions';
import Main2 from './Main2'
import LogoutPage from './LogoutPage/LogoutPage';


class MainContent extends Component{
  constructor(props){
    super(props);
    const min=new Date('2018-09-20');
    const max=new Date();
    this.state={
      timer:300,
      open:true,
      anchorEl: null,
      
      showModal:false,
      showDeviceDetails:false,
      moreDetails:false,
      devData:null,
      minDate:min,
      maxDate:max,
      currDate:localStorage.date?new Date(JSON.parse(localStorage.date)[0]):max,
      
      locationValue:localStorage.location||"Bangalore",
    }
  }
  componentDidMount(){
    if(sessionStorage.reloadAfterPageLoad&&!sessionStorage.user){
      sessionStorage.reloadAfterPageLoad = false;
      alert('Session Expired')
    }
    this.events = [
      'load',
      'mousedown',
      'click',
      'keypress'
    ];
    for (var i in this.events) {
      window.addEventListener(this.events[i], function(){
          window.lastActivity = Date.now();
      });
    }
    var TIMEOUT = 30000000 //5 mins
    setInterval(()=>  {
      this.startSession(TIMEOUT)
    },1000)

  }
  startSession=(TIMEOUT)=>{
    if(this.props.login){
      var currentTime = Date.now();
      if (currentTime - window.lastActivity > TIMEOUT-30000) {
        this.setState({timer: Math.round((TIMEOUT-(currentTime - window.lastActivity))/1000)});
      }
    }
  }
  componentDidUpdate(){
    if(this.state.timer===0){
      localStorage.removeItem('data');
      sessionStorage.removeItem('user');
      window.location.reload()
      sessionStorage.reloadAfterPageLoad = true;
    }
  }
  handleContinueSession=()=>{
    window.lastActivity = Date.now();
    this.setState({timer:300})
  }
  handleDiscontinueSession=()=>{
    this.setState({open:false})
    userService.logout()
    window.location.reload();
  }
  updateSession=()=>{
    if(!this.state.open){
      this.setState({open:true})
    }
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render(){
    return(
      <Fragment>
                 
          <Switch>
            
            <Route path='/login' exact render={() => (!this.props.login ? (<LoginPage locationValue={this.state.locationValue}
                                                                                    handleLocationChange={this.handleLocationChange}
                                                                        />) :(<Redirect to="/home/dashboard"/>))} />
            <Route path='/home' render={() => (this.props.login ? (<Main2 login={this.props.login}/>):(
                                                                                      <Redirect to="/login"/>))} />
            <Route path='/logout' component={LogoutPage}></Route>  
            <Route path='/' render={() => (this.props.login ? (<Redirect to="/home/dashboard"/>) :(<Redirect to="/login"/>))}/>                                                                     
          </Switch>
          
      </Fragment>

    );
  }
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
};
const mapStateToProps = state => {
    // console.log(state);
    return {
        login: state.login.isAuthenticated,
        user: state.login.user,
        isAdmin:state.login.isAdmin,
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainContent))
