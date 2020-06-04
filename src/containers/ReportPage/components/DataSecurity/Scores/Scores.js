import React,{Component} from 'react'
import { Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import {Row, Col} from 'react-bootstrap';
import {dataSecurityService} from '../../../../../services/data_security_service'
import DlpConfigDialog from './DlpConfigDialog/DlpConfigDialog'
class Scores extends Component{

    state={
        data:'',
        dlpConfigData:'',
    }
    componentDidMount=()=>{
        dataSecurityService.dlpConfigData().then(res=>{
            // console.log(res)
            this.setState({
                totalAgents:res.totalAgents,
                totalApplications:res.totalApplications,
                totalEnforceVersion:res.totalEnforceVersion,
                totalInformationMonitors:res.totalInformationMonitors,
                totalPolicies:res.totalPolicies,
                totalScanAssignments:res.totalScanAssignments,
                agents:res.agents,
                informationMonitors:res.informationMonitors,
                enforceVersion:res.enforceVersion,
                policies:res.policies,
                applications:res.applications,
                scanAssignments:res.scanAssignments
            })
        })
    }
    openDlpConfigDialog=(type)=>{
        // console.log(type)
        var dlpConfigData='';
        if(type==='Agents'){
            dlpConfigData=this.state.agents;
        }
        else if(type==="Enforce Version") dlpConfigData=this.state.enforceVersion
        else if(type==='Scan Assignments') dlpConfigData=this.state.scanAssignments
        else if(type==="Policies") dlpConfigData=this.state.policies
        // console.log(dlpConfigData,this.state)
        this.setState({openDlpConfigDialog:true,dlpConfigData:dlpConfigData,type:type});
    }
    closeDlpConfigDialog=()=>{
        this.setState({openDlpConfigDialog:false});
    }
    render(){
        return(
            <React.Fragment>
                <Col md={6} style={{marginBottom:"10px"}}>
                 <div onClick={()=>this.openDlpConfigDialog('Agents')} style={{width:"48%",float:"left",marginRight:"2%",display:'flex',justifyContent: 'space-between',backgroundColor:'#3b9bd8',padding:10,textShadow:'1px 1px 3px black'}}>
                    <CloudQueueIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloudQueueIcon>
                    <div style={{width:'50%',fontSize:22}}>
                        <div style={{display: 'flex',justifyContent: 'space-between'}}>
                            <div>Agents</div>
                            <div>{this.state.totalAgents}</div>
                        </div>
                        {/* <div style={{display: 'flex',justifyContent: 'space-between',marginTop:10}}>
                            <div>S3</div>
                            <div>67</div>
                        </div> */}
                    </div>  
                 </div>
                 <div onClick={()=>this.openDlpConfigDialog("Enforce Version")} style={{width:"48%", display:'flex',justifyContent:'space-between',backgroundColor:this.state.totalEnforceVersion<0?'#e63c3c':'rgba(42, 187, 67, 1)',padding:10,textShadow:'1px 1px 3px black'}}>
                     <div style={{marginLeft:'1%'}}>
                         {this.state.totalEnforceVersion<0?
                         <CloseIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                         <CheckIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                     </div>
                    <div style={{marginRight:'1%'}}>
                        <div style={{color:'white'}}>Enforce Version</div>
                        <div style={{display:'flex'}}>
                            {/* {console.log(this.props.encryptionScore)} */}
                           <Typography style={{fontSize:15,color:'white',alignSelf:'flex-end',marginBottom:8}}>({this.state.totalEnforceVersion})</Typography>
                            {/* <Typography style={{fontSize:30,color:'white'}}>{this.state.enforce_version}%</Typography> */}
                       </div>
                        {/* <Typography style={{fontSize:20,color:'white',marginTop:-5}}>Passed</Typography> */}
                   </div>
                </div>
                </Col>
                <Col md={6}>
                <div onClick={()=>this.openDlpConfigDialog('Policies')} style={{width:"48%",float:"left",display:'flex',marginRight:"2%",justifyContent:'space-between',backgroundColor:this.state.totalPolicies<0?'#e63c3c':'rgba(42, 187, 67, 1)',padding:10,textShadow:'1px 1px 3px black'}}>
                     <div style={{marginLeft:'1%'}}>
                         {this.state.totalPolicies<0?
                         <CloseIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                         <CheckIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                     </div>
                     <div style={{marginRight:'1%'}}>
                         <div style={{color:'white'}}>Policies</div>
                         <div style={{display:'flex'}}>
                           <Typography style={{fontSize:15,color:'white',alignSelf:'flex-end',marginBottom:8}}>({this.state.totalPolicies})</Typography>
                            {/* <Typography style={{fontSize:30,color:'white'}}>{this.state.totalPolicies}%</Typography> */}
                         </div>
                     </div>
                </div>
                <div onClick={()=>this.openDlpConfigDialog('Scan Assignments')} style={{width:"48%",display:'flex',justifyContent:'space-between',backgroundColor:this.state.totalScanAssignments<0?'#e63c3c':'rgba(42, 187, 67, 1)',padding:10,textShadow:'1px 1px 3px black'}}>
                     <div style={{marginLeft:'1%'}}>
                     {this.state.totalScanAssignments<0?
                         <CloseIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                         <CheckIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                    </div>
                    <div style={{marginRight:'1%'}}>
                        <div style={{color:'white'}}>Scan Assignment</div>
                        <div style={{display:'flex'}}>
                           <Typography style={{fontSize:15,color:'white',alignSelf:'flex-end',marginBottom:8}}>({this.state.totalScanAssignments})</Typography>
                            {/* <Typography style={{fontSize:30,color:'white'}}>{this.state.totalScanAssignments}%</Typography> */}
                         </div>
                        
                    </div> 
                 </div>
                 </Col>
                 {this.state.openDlpConfigDialog?
                    <DlpConfigDialog open={this.state.openDlpConfigDialog} close={this.closeDlpConfigDialog} 
                        data={this.state.dlpConfigData} type={this.state.type}/>

                    :null}
              </React.Fragment>
        )
    }
}
export default Scores;