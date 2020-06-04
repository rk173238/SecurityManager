import React, {Component} from 'react';
import TechnologyReportRow from './TechnologyReportRow/TechnologyReportRow';
import classes from './KPIDashboard.css'
/*
firewall - firemon - [risky_rules], unused rules, regulatory_compliance, disabled_rules
monitoring - solar winds - cpu usage, memory usage, node availability
load balancer - f5 - node_logging_disabled, product_version, memory_used

*/

let technologies = {
  "AV-McAfee": 'dat_ver,last_update,agent_version,engine_ver',
  "SecurityManager-Firemon" : 'unused_rules,regulatory_compliance,disabled_rules',
  "SystemsManagement-Solarwinds": 'cpu_usage,memory_usage,node_availability,average_response_time',
  "LoadBalancer-F5": 'node_logging_disabled,product_version,memory_used,snat_enabled'
}

class KPIDashboard extends Component {

  // printDiv = () => { 
  //   let kpi = document.getElementById("kpi").innerHTML;
  //   var a = window.open('', '', 'height=1000, width=1000'); 
  //   a.document.write('<html>'); 
  //   a.document.write('<body><div style="background:blue">'); 
  //   a.document.write(kpi); 
  //   a.document.write('</div></body></html>'); 
  //   a.document.close(); 
  //   a.print(); 
  // } 

  render() {
    return (
      <div id="kpi">
        {/* <button onClick={this.printDiv}>CLICK</button> */}
        <React.Fragment>
          <TechnologyReportRow techName={"SystemsManagement-Solarwinds"} usecases={"cpu_usage,memory_usage,node_availability,average_response_time"} />
          <TechnologyReportRow techName={"AV-McAfee"} usecases={"dat_ver,last_update,agent_version,engine_ver"} />
          <TechnologyReportRow techName={"SecurityManager-Firemon"} usecases={"unused_rules,regulatory_compliance,disabled_rules,snmp_compliance"} />
          <TechnologyReportRow techName={"LoadBalancer-F5"} usecases={"node_logging_disabled,product_version,memory_used,snat_enabled"} />
        </React.Fragment>
      </div>
      // <div>
      //   <Pie />
      // </div>
    )
  }
}
export default KPIDashboard