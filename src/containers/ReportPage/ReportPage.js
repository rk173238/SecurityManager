import React,{Component} from 'react';
import { withRouter } from 'react-router';
import {Route,Redirect,Switch} from 'react-router';
import classes from './ReportPage.css';
import Covid19 from './components/Covid19/Covid19'
import {scrollbar} from '../../commonfiles/scrollbar.css';
import CloudDashboard from './components/CloudDashboard/CloudDashboard';
import KPIDashboard from './components/KPIDashboard/KPIDashboard';
import DataSecurity from './components/DataSecurity/DataSecurity';
import ExecutiveSummary from './components/ExecutiveSummary/ExecutiveSummary';
import NetworkSecurity from './components/ExecutiveSummary/NetworkSecurity/NetworkSecurity';
import EndpointSecurity from './components/ExecutiveSummary/EndpointSecurity/EndpointSecurity';

class ReportPage extends Component{

  state={
    piechartData:'',
    filterBy:'',
    usecaseWeightage:'',
    techWeightage:''
  }
  // componentDidMount=()=>{
  //   analysisService.fetchAllTechnologyData().then(res=>{
  //     this.setState({piechartData:res})
  //     // console.log("report will mount",this.state.piechartData)
  //   })
  //   weightageService.getWeightage('usecase').then(res=>{
  //     this.setState({usecaseWeightage:res.data.usecase_weightage})
  //   })
  //   weightageService.getWeightage('tech').then(res=>{
  //     this.setState({techWeightage:res.data.tech_weightage})
  //   })
  // }
  // componentDidMount=()=>{
  //   analysisService.fetchAllTechnologyData().then(res=>{
  //     this.setState({piechartData:res})
  //     console.log(res.data)
  //     // console.log("report will mount",this.state.piechartData)
  //   })
  //   weightageService.getWeightage('usecase').then(res=>{
  //     console.log(res.data)
  //     this.setState({usecaseWeightage:res.data.usecase_weightage})
  //   })
  //   weightageService.getWeightage('tech').then(res=>{
  //     this.setState({techWeightage:res.data.tech_weightage})
  //   })
  // }

  // showExecSummaryMenu = () => {
  //   document.getElementById("execSummaryMenu").style.display = "block";
  // }
  // hideExecSummaryMenu = () => {
  //   document.getElementById("execSummaryMenu").style.display = "none";
  // }

  render(){
    let activeUrl = this.props.location.pathname.split('/')[3];
    return(
          <div style={{overflowY:"auto", height:"100%", overflowX:"hidden"}} className={scrollbar}>
            <div className={classes.tabs}>

              <div onClick={()=>this.props.history.push({pathname:'/home/report/endpointsecurity/'})}>
                <span style={{borderBottom:activeUrl==="endpointsecurity"?"2px solid #0881dd":""}}>Endpoint Security</span>
              </div>
              <div onClick={()=>this.props.history.push({pathname:'/home/report/networksecurity/'})}>
                <span style={{borderBottom:activeUrl==="networksecurity"?"2px solid #0881dd":""}}>Network Security</span>
              </div>
              <div onClick={()=>this.props.history.push({pathname:'/home/report/clouddashboard/'})}>
                <span style={{borderBottom:activeUrl==="clouddashboard"?"2px solid #0881dd":""}}>Cloud Security</span>
              </div>
              <div onClick={()=>this.props.history.push({pathname:'/home/report/analystdashboard/'})}>
                <span style={{borderBottom:activeUrl==="analystdashboard"?"2px solid #0881dd":""}}>Data Security</span>
              </div>
              <div onClick={()=>this.props.history.push({pathname:'/home/report/covid19protection/'})}>
                <span style={{borderBottom:activeUrl==="covid19protection"?"2px solid #0881dd":""}}>Covid 19 Protection</span>
              </div>
              {/* <div onClick={()=>this.props.history.push({pathname:'/home/report/kpidashboard/'})}>
                <span style={{borderBottom:activeUrl==="kpidashboard"?"2px solid #0881dd":""}}>KPI Dashboard</span>
              </div> */}
              {/* <div 
                // onClick={()=>this.props.history.push({pathname:'/home/report/executivesummary/'})} 
                style={{position:"relative"}}
                onMouseEnter={this.showExecSummaryMenu}
                onMouseLeave={this.hideExecSummaryMenu}
              >
                <span style={{borderBottom:activeUrl==="executivesummary"?"2px solid #0881dd":""}}>Executive Summary</span>
                <div id="execSummaryMenu" className={classes.execSummaryMenu}>
                  <div onClick={()=>this.props.history.push({pathname:'/home/report/endpointsecurity/'})}>Endpoint Security</div>
                  <div onClick={()=>this.props.history.push({pathname:'/home/report/networksecurity/'})}>Network Security</div>
                </div>
              </div> */}

            </div>
            <Switch>
              <Route exact path='/home/report/' render={()=><Redirect to='/home/report/covid19protection/'></Redirect>}></Route>
              <Route path='/home/report/kpidashboard/' render={()=> <KPIDashboard /> }/>
              <Route path='/home/report/clouddashboard/' render={()=> <CloudDashboard /> }/> 
              <Route path='/home/report/analystdashboard/' render={()=> <DataSecurity /> }/>
              <Route path='/home/report/executivesummary/' render={()=> <ExecutiveSummary /> }/>
              <Route path='/home/report/endpointsecurity/' render={()=> <EndpointSecurity /> }/>
              <Route path='/home/report/networksecurity/' render={()=> <NetworkSecurity /> }/>
              <Route path='/home/report/covid19protection/' render={()=> <Covid19 /> }/>
            </Switch>
                                  
          </div>
    )
  }
}

export default withRouter(ReportPage);