import React, {Component} from 'react';
import Pie from '../../../../../common-components/echarts/Pie/Pie';
import classes from './TechnologyReportRow.css';
import { dataConstants } from '../../../../../constants/data_constants';
import {fetchKPIData} from '../../../../../services/report_service';
import {slideDownAnimation} from '../../../../../commonfiles/animations.css';

var techNameMap = {
  "AV-McAfee": 'Antivirus',
  "SecurityManager-Firemon" : 'Firewall',
  "SystemsManagement-Solarwinds": 'Monitoring',
  "LoadBalancer-F5": 'Load Balancer'
}

class TechnologyReportRow extends Component {
/*  Processing of Top 4 technologies will be done in this component.
    And data will be passed on to each Pie component through props.
*/

  state = {
    techData:'',
    load: false,
    slideDownAnimation: ''
  }

  componentWillMount() {
    fetchKPIData(this.props.techName, this.props.usecases).then(res=>{
      this.setState({techData:res}, () => {
        this.setState({load:true})
      })
    })
    this.setState({slideDownAnimation: slideDownAnimation})
  }

  render() {
    return (
      <div className={this.state.slideDownAnimation}>
        {this.state.load ? 
      <div style={{color:"#fff", margin:"0 auto", width:"fit-content", marginBottom:"15px", boxShadow:"0 2px 10px #000", paddingBottom:"15px"}}>
        <div style={{marginBottom:"5px", borderBottom:"2px solid #024bb9"}}>
            <div style={{display:"inline", fontSize:"24px", padding:"10px"}}>{techNameMap[this.props.techName]}</div>
            <div style={{float:"right"}}>Download</div>
        </div>
        <div style={{display:"flex"}}>
        {
          this.state.techData ?
          Object.keys(this.state.techData).map((key, i) =>(
            <div className={classes.techRow} key={i}>
              <Pie pieData={this.state.techData[key]} usecaseName={key} />
              <p className={classes.techName}>{dataConstants.usecaseNameMap[key]}</p>
            </div>
          ))
          : null
        }
        </div>
      </div>
        :null}
      </div>
    )
  }
}
export default TechnologyReportRow