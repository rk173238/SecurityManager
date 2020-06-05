import React, { Component, Fragment } from 'react';
import Header from '../common-components/Header/NewHeader';

import HomePage from './HomePage/HomePage';

import DetailsPage from './DetailsPage/DetailsPage';
import RegisterPage from './RegisterPage/RegisterPage';
import AdminConfigPage from './AdminConfigPage/AdminConfigPage';
import AnalysisPage from './AnalysisPage/AnalysisPage'
import HomeTracker from '../common-components/HomeTracker/HomeTracker'
import { Route, Redirect, Switch } from 'react-router';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SessionTimeoutDialog from '../common-components/SessionTimeoutDialog/SessionTimeoutDialog'
import { userService, weightageService } from '../services';
import { dataActions, deviceActions } from '../actions';
import { Paper } from '@material-ui/core';
import ReportPage from './ReportPage/ReportPage';
import UserPage from './UserPage/UserPage';
import WeightagePage from './UserPage/Weightage/WeightagePage';
import mediaScreen from '../commonfiles/media.css';
import MobileMenu from '../common-components/MobileMenu/MobileMenu';
import InventoryPage from './InventoryPage/InventoryPage';
import HelpPage from './HelpPage/HelpPage'
import ChangePassword from './ChangePasswordPage/ChangePasswordPage'
import Test from './TEST/test';

const getUTCDateRange = () => {
  var today = new Date();
  var dd = today.getUTCDate();
  var mm = today.getUTCMonth() + 1;
  if (mm < 10) {
    mm = '0' + mm
  }
  var yyyy = today.getUTCFullYear();
  var r = [];
  let h = today.getUTCHours();
  if (dd < 10) {
    dd = '0' + dd
  }
  today = yyyy + '-' + mm + '-' + dd;
  switch (true) {
    case h >= 0 && h < 6: r = [today + 'T00:00:00Z', today + 'T06:00:00Z']; break;
    case h >= 6 && h < 12: r = [today + 'T06:00:00Z', today + 'T12:00:00Z']; break;
    case h >= 12 && h < 18: r = [today + 'T12:00:00Z', today + 'T18:00:00Z']; break;
    case h >= 18 && h < 24: r = [today + 'T18:00:00Z', today + 'T23:59:59Z']; break;
    default: r = [today, today]; break;
  }
  return r;
}
const initValue = (date) => {
  let h = date.getHours();
  switch (true) {
    case h >= 0 && h <= 6: return 1;
    case h > 6 && h <= 12: return 2;
    case h > 12 && h <= 18: return 3;
    case h > 18 && h < 24: return 4;
    default: return 0;
  }
}
class MainContent extends Component {
  constructor(props) {
    super(props);
    const min = new Date('2018-09-20');
    const max = new Date();
    this.state = {
      timer: 300,
      open: true,
      anchorEl: null,
      dateRange: getUTCDateRange(),
      showModal: false,
      showDeviceDetails: false,
      moreDetails: false,
      devData: null,
      minDate: min,
      maxDate: max,
      currDate: localStorage.date ? new Date(JSON.parse(localStorage.date)[1]) : max,
      value: localStorage.date ? initValue(new Date(JSON.parse(localStorage.date)[1])) : initValue(max),
      locationValue: localStorage.location || "Bangalore",
      
      //default display of mobile menu, none for mobile and block for dekstop
      mobileSidebar: window.matchMedia("(min-width: 768px)").matches,
    }
  }
  componentDidMount() {
    if (sessionStorage.reloadAfterPageLoad && !sessionStorage.user) {
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
      window.addEventListener(this.events[i], function () {
        window.lastActivity = Date.now();
      });
    }
    var TIMEOUT = 30000000 //5 mins
    setInterval(() => {
      this.startSession(TIMEOUT)
    }, 1000)

  }
  startSession = (TIMEOUT) => {
    if (this.props.login) {
      var currentTime = Date.now();
      if (currentTime - window.lastActivity > TIMEOUT - 30000) {
        this.setState({ timer: Math.round((TIMEOUT - (currentTime - window.lastActivity)) / 1000) });
      }
    }
  }
  componentDidUpdate() {
    if (this.state.timer === 0) {
      localStorage.removeItem('data');
      sessionStorage.removeItem('user');
      window.location.reload()
      sessionStorage.reloadAfterPageLoad = true;
    }
  }
  handleContinueSession = () => {
    window.lastActivity = Date.now();
    this.setState({ timer: 300 })
  }
  handleDiscontinueSession = () => {
    this.setState({ open: false })
    userService.logout()
    window.location.reload();
  }
  updateSession = () => {
    if (!this.state.open) {
      this.setState({ open: true })
    }
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  setDateRange = () => {
    localStorage.data = []
    this.props.onFetchDataWithDate(this.getDataByTime(), this.state.locationValue);
  }
  getDataByTime1 = () => {
    let today = this.state.currDate
    // console.log(today,this.state.value)
    var dd = today.getDate();
    if (dd < 10) {
      dd = '0' + dd
    }
    var mm = today.getMonth() + 1;
    if (mm < 10) {
      mm = '0' + mm
    }
    var yyyy = today.getFullYear();
    var r = [];
    today = yyyy + '-' + mm + '-' + dd;
    switch (this.state.value) {
      case 1: r = [today + 'T00:00:00Z', today + 'T06:00:00Z']; break;
      case 2: r = [today + 'T06:00:00Z', today + 'T12:00:00Z']; break;
      case 3: r = [today + 'T12:00:00Z', today + 'T18:00:00Z']; break;
      case 4: r = [today + 'T18:00:00Z', today + 'T23:59:59Z']; break;
      default: r = [today, today]; break;
    }
    localStorage.setItem('date', JSON.stringify(r));
    today = new Date(r[1])
    // console.log(today);
    if (today.getTimezoneOffset() < 0) {
      today.setTime(today.getTime() + (today.getTimezoneOffset() * 60000))
    }
    else {
      today.setTime(today.getTime() - (today.getTimezoneOffset() * 60000))
    }
    dd = today.getUTCDate();
    mm = today.getUTCMonth() + 1;
    yyyy = today.getUTCFullYear();
    let h = today.getUTCHours();
    let yd = today.getUTCDate() - 1
    if (mm < 10) {
      mm = '0' + mm
    }
    if (dd < 10) {
      dd = '0' + dd
    }
    today = yyyy + '-' + mm + '-' + dd;
    if (yd < 10) {
      yd = '0' + yd
    }
    let yesterday = yyyy + '-' + mm + '-' + yd;
    console.log(today, h)
    var rn = [];
    switch (true) {
      case h >= 0 && h < 6: rn = [yesterday + 'T18:00:00', today + 'T06:00:00']; break;
      case h >= 6 && h < 12: rn = [today + 'T00:00:00', today + 'T12:00:00']; break;
      case h >= 12 && h < 18: rn = [today + 'T06:00:00', today + 'T18:00:00']; break;
      case h >= 18 && h < 24: rn = [today + 'T12:00:00', today + 'T23:59:59']; break;
      default: rn = [today, today]; break;
    }
    localStorage.setItem('date', JSON.stringify(rn));

    console.log(rn);
    return rn;
  }
  getDataByTime = () => {
    var currDate = localStorage.date ? new Date(JSON.parse(localStorage.date)[1]) : new Date()
    console.log(currDate)
    var dd = currDate.getUTCDate();
    var mm = currDate.getUTCMonth() + 1;
    var yyyy = currDate.getUTCFullYear();
    let h = currDate.getUTCHours();
    let yd = currDate.getUTCDate() - 1
    if (mm < 10) {
      mm = '0' + mm
    }
    if (dd < 10) {
      dd = '0' + dd
    }
    var today = yyyy + '-' + mm + '-' + dd;
    if (yd < 10) {
      yd = '0' + yd
    }
    let yesterday = yyyy + '-' + mm + '-' + yd;
    var rn = [];
    // switch(true){
    //   case h>=0&&h<6: rn=[yesterday+' 18:00:00',today+' 00:00:00',today+' 06:00:00']; break;
    //   case h>=6&&h<12: rn=[today+' 00:00:00',today+' 06:00:00',today+' 12:00:00']; break;
    //   case h>=12&&h<18: rn=[today+' 06:00:00',today+' 12:00:00',today+' 18:00:00']; break;
    //   case h>=18&&h<24: rn=[today+' 12:00:00',today+' 18:00:00',today+' 23:59:59']; break;
    //   default: rn=[today,today]; break;
    // }
    switch (true) {
      case h >= 0 && h < 6: rn = ['2020-04-14' + ' 18:00:00', '2020-04-15' + ' 00:00:00', '2020-04-15' + ' 06:00:00']; break;
      case h >= 6 && h < 12: rn = ['2020-04-14' + ' 18:00:00', '2020-04-15' + ' 00:00:00', '2020-04-15' + ' 06:00:00']; break;
      case h >= 12 && h < 18: rn = ['2020-04-14' + ' 18:00:00', '2020-04-15' + ' 00:00:00', '2020-04-15' + ' 06:00:00']; break;
      case h >= 18 && h < 24: rn = ['2020-04-14' + ' 18:00:00', '2020-04-15' + ' 00:00:00', '2020-04-15' + ' 06:00:00']; break;
      default: rn = [today,today, today]; break;
    }
    localStorage.setItem('date', JSON.stringify(rn));
    console.log(rn)
    return rn

  }
  onChange = (a, date) => {
    this.setState({ currDate: date });
  }
  handleChange = (event, index, value) => {
    this.setState({ value })
  };
  handleLocationChange = (event, index, value) => {
    this.setState({ locationValue: value })
  };
  devTrendHandler = (tech, dev) => {
    this.setState({ showDeviceDetails: false, moreDetails: false, showModal: false });
    this.props.onClearDeviceData()
    this.props.onClearUseCaseData()
    this.props.history.push({ pathname: '/deviceTrends', search: '?' + tech + '&' + dev })
  }
  moreDetailsHandler = () => {
    const moreDetails = !this.state.moreDetails
    this.setState({ moreDetails: moreDetails })
  }
  donutClickHandler = (mainName, subCatName, techName, useCaseName, devType, type) => {
    // console.log(this.getDataByTime())
    this.props.onFetchUseCaseData(mainName, subCatName, techName, useCaseName, devType, this.props.data, this.getDataByTime(), type, this.state.locationValue)
    if (devType !== 'All' || type === 'bubble') {
      this.setState({ showModal: true });
    }
  }
  devClickHandler = (devName, techName) => {
    if (!this.props.fetchingDeviceData) {
      this.props.onFetchDeviceDataWithDate(devName, techName, this.getDataByTime())
    }
    setTimeout(() => {
      if (this.props.fetchedDeviceData) {
        this.setState({ showDeviceDetails: true });
      }
    }, 2000);
  }
  handleToggleDevDetailsModal = () => {
    this.props.onClearDeviceData();
    this.setState({ showDeviceDetails: false, moreDetails: false });
  }
  handleToggleModal = () => {
    this.props.onClearUseCaseData()
    this.setState({ showModal: false });
  }
  toggleMobileSidebar = () => {
    this.setState({mobileSidebar: !this.state.mobileSidebar});
  }

  render() {
    // setTimeout(() => {
    //   var  tried=0;
    //   if(tried<=3){
    //   if (this.props.login && !this.props.fetchingData && !this.props.fetchedData) 
    //     this.props.onFetchDataWithDate([this.getDataByTime()[0], this.getDataByTime()[2]], this.state.locationValue);  
    //     tried=tried+1; }else     
    //   alert("Tried "+tried+" times:  Data not found")
    // }, 1000);
    return (
      <div 
        className={mediaScreen.mainContentClearance}
        style={{
          fontFamily: "\"Ubuntu Mono\", monospace", 
          height:"100%", 
          position:"absolute",
          top:"0", left:"0", bottom:"0", right:"0",
        }}
      >

        <Header 
          handleMenu={this.handleMenu}
          menuOpen={Boolean(this.state.anchorEl)}
          handleClose={this.handleClose}
          anchorEl={this.state.anchorEl}
          loginStatus={this.props.login}
          user={this.props.user}
          admin={this.props.isAdmin}
          toggleMobileSidebar={this.toggleMobileSidebar} 
        />
        {/* <div style={{ width: '100%', height: '100%', display: 'flex', backgroundImage: 'linear-gradient(to bottom right,#000102, #072758)' }}> */}
        <div style={{ width: '100%', height:"100%", display: 'flex', paddingTop:"20px"}}>
          <div className={mediaScreen.sidebarArea} style={{display:this.state.mobileSidebar?"block":"none"}}>
            <div className={mediaScreen.mobileMenu}>
              <MobileMenu />
            </div>
            <HomeTracker />
          </div>
          <div className={mediaScreen.mainContentArea} style={{color:"#fff"}}>
            <Switch>
              <Route path='/home/' exact render={() => (this.props.login ? <Redirect to="/home/dashboard" /> : <Redirect to="/login" />)} />
              <Route path='/home/dashboard/' exact render={() => (this.props.login
                ? (<HomePage login={this.props.login}
                  newData={this.props.data} fetchedData={this.props.fetchedData}/>)
                : (<Redirect to="/login" />))} />

              <Route path='/home/details/' render={() => (this.props.login ? (<DetailsPage login={this.props.login}
                newData={this.props.data} />) : (
                  <Redirect to="/login" />))} />
              <Route path='/home/analysis/' render={() => (this.props.login ? (<AnalysisPage></AnalysisPage>) :
                <Redirect to="/login" />)} />
              <Route path='/home/report/' render={() => (this.props.login ? (<ReportPage></ReportPage>) :
                <Redirect to="/login" />)} />
              <Route path='/home/admin/' render={() => (this.props.login ? (<UserPage></UserPage>) :
                <Redirect to="/login" />)} />
              <Route path='/home/inventory/' render={() => (this.props.login ?<InventoryPage/>:
                <Redirect to="/login" />)} />
              <Route path='/home/config/' render={() => (this.props.login ?<WeightagePage />:
                <Redirect to="/login" />)} />
              <Route path='/home/changepassword/' render={() => (this.props.login ?<ChangePassword />:
                <Redirect to="/login" />)} />
              <Route path='/home/help/' render={() => (this.props.login ? <HelpPage /> :
                <Redirect to="/login" />)} />
              <Route path='/home/test/' render={() => (this.props.login ? (this.props.data ? <Test /> : null) :
                <Redirect to="/login" />)} />
            </Switch>


          </div>
        </div>

        {(this.state.timer - 30 < 0 && this.state.timer > 0) ? (
          <SessionTimeoutDialog
            timer={this.state.timer}
            open={this.state.open}
            handleContinueSession={this.handleContinueSession}
            handleDiscontinueSession={this.handleDiscontinueSession} />
        ) : this.updateSession()}
      </div>

    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchUseCaseData: (mainName, subCatName, techName, useCaseName, devType, data, date, location) => dispatch(dataActions.fetchUseCaseData(mainName, subCatName, techName, useCaseName, devType, data, date, location)),
    onFetchDataWithDate: (dateRange, location) => dispatch(dataActions.fetchDataWithDate(dateRange, location)),
    onFetchDeviceDataWithDate: (devName, techName, dateRange) => dispatch(deviceActions.fetchDeviceDataWithDate(devName, techName, dateRange)),
    onFetchWeightage: (weightageType) => dispatch(dataActions.getWeightage(weightageType)),
    onClearDeviceData: () => dispatch(deviceActions.clearDeviceData()),
    onClearUseCaseData: () => dispatch(dataActions.clearUseCaseData()),
  }
};
const mapStateToProps = state => {
  console.log(state);
  const { fetchingDeviceData, devData, fetchedDeviceData } = state.fetchDeviceData;

  return {
    login: state.login.isAuthenticated,
    user: state.login.user,
    isAdmin: state.login.isAdmin,
    data: state.fetchData.data,
    fetchingData: state.fetchData.fetchingData,
    fetchedData: state.fetchData.fetchedData,
    fetchingDeviceData,
    deviceData: devData,
    fetchedDeviceData,



    weightageData: state.fetchWeightage.weightageData
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContent))
