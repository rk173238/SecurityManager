import React,{Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { Paper } from 'material-ui';
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import {deviceService} from '../../services/device_service'
import { deviceActions } from '../../actions';
import {commonService} from '../../services/common_Service'
import classes from './DeviceList.css';
import DeviceModal from './DeviceModal/DeviceModal'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import UsecaseTrendsDialog from './UsecaseTrendsDialog/UsecaseTrendsDialog'
import DeviceTrendsDialog from './DeviceTrendsDialog/DeviceTrendsDialog'
class DeviceList extends Component{

    state={
        openDeviceDetail:false,
        deviceData:'',
        openUsecaseTrendsDialog:false,
        systemName:'',
        isDesktop: window.matchMedia("(min-width:768px)").matches
    }
    componentWillUnmount=()=>{
        this.props.onClearDeviceData()
    }
    
    capitalizeFirstLetter = (string) => {
        let str='';
        string = string.split("_")
        string.map(string=>{
            str+=string.charAt(0).toUpperCase() + string.slice(1)+' ';
        })
        return str;
    }
    openDeviceDetail=(data)=>{
        // var dateRange=[JSON.parse(localStorage.getItem('date'))[0],JSON.parse(localStorage.getItem('date'))[2]]
        deviceService.fetchDevices(this.props.techName,'','all','dateRange',data[this.classifySystemName()]).then(res=>{
            console.log(res);
            this.setState({deviceData:res,openDeviceDetail:true})
        },e=>alert('error while fetching device data'))
    }
    closeDeviceDetail=()=>{
        this.setState({openDeviceDetail:false,deviceData:''})
    }
    classifySystemName=()=>{
        // if(this.props.techName==="EC2-AWS") return 'instance_name'
        // else if(this.props.techName==='S3-AWS') return 'bucket_name'
        // else if(this.props.techName==='Ticketing-ServiceNow') return 'engineer_name'
        // else if(this.props.techName==='DLPDiscover-Symantec') return 'incident_id'
        // else if(this.props.techName==='DLPEndpoint-Symantec') return 'incident_id'
        // else if(this.props.techName==='People-People') return 'username'
        // else if(this.props.techName==='DLP-Symantec') return 'ip_address'
        // else if(this.props.techName==='AV-McAfee') return 'nodename'
        // else if(this.props.techName==='CMDB-ServiceNow') return 'name'
        // else 
        return 'system_name'
    }
    //this.capitalizeFirstLetter(this.props.usecase) | this.props.usecaseScore
    openUsecaseTrendsDialog=()=>{
        this.setState({openUsecaseTrendsDialog:true})
    }
    closeUsecaseTrendsDialog=()=>{
        this.setState({openUsecaseTrendsDialog:false})
    }
    openDeviceTrendDialog=(systemName)=>{
        this.setState({openDeviceTrendDialog:true,systemName:systemName})
    }
    closeDeviceTrendsDialog=()=>{
        this.setState({openDeviceTrendDialog:false})
    }
    render(){

        return(
            <React.Fragment>
            <div 
                style={{
                    width:'100%',
                    height:'fit-content',
                    display:'flex',
                    alignItems:'center', 
                    color:"white",
                    background:"rgba(255, 255, 255, 0.1)",
                    borderRadius:"2px"
                }}
            >
                    {commonService.arrowCheck(2,3, classes)}
                    <p className={classes.usecaseScore}>{this.props.usecaseScore}%</p>
                    <p className={classes.usecaseName}>{this.capitalizeFirstLetter(this.props.usecase)}</p>
                    <div style={{textAlign:'right',margin:"0 15px"}}>
                        <TrendingUpIcon style={{fontSize:40,cursor:'pointer'}} onClick={this.openUsecaseTrendsDialog}></TrendingUpIcon>
                    </div>
                    
            </div>
            <div className={classes.deviceDetails}>               
                <div style={{width:'100%', backgroundColor:'transparent',}}>
                    {this.props.fetchedDeviceData?
                    <Table style={{fontFamily:"inherit"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell 
                                    style={{
                                        color:'white',
                                        fontFamily:"inherit",
                                        fontSize: this.state.isDesktop ? "1.25vw" : "17px"
                                    }}
                                >
                                    {this.capitalizeFirstLetter(this.classifySystemName())}
                                </TableCell>
                                {this.props.deviceList[0].hasOwnProperty('ip_address')?
                                    <TableCell 
                                        style={{
                                            color:'white',
                                            fontFamily:"inherit",
                                            fontSize: this.state.isDesktop ? "1.25vw" : "17px"
                                        }}
                                    >
                                        IP Address
                                    </TableCell>
                                :null}
                                {/* <TableCell style={{color:'white',fontSize:17}}>{this.props.usecase}</TableCell> */}
                                <TableCell 
                                    style={{
                                        color:'white',
                                        fontFamily:"inherit",
                                        fontSize: this.state.isDesktop ? "1.25vw" : "17px"
                                    }}
                                >
                                    Compliance Score
                                </TableCell>
                                {/* <TableCell style={{color:'white'}}>Compliance</TableCell> */}
                            </TableRow>
                        </TableHead>
                        {console.log(this.props)}
                        
                        <TableBody>
                            {this.props.deviceList.map((data,i)=>(
                                
                                <TableRow key ={i} style={i%2?{backgroundColor:'transparent'}:{backgroundColor:'#2a2a3c'}}>
                                    {/* {console.log(this.props.d,this.props.usecase,data)} */}
                                    <TableCell 
                                        onClick={()=>this.openDeviceDetail(data)} 
                                        style={{
                                            color:"white",
                                            fontFamily:"inherit",
                                            fontSize: this.state.isDesktop ? "1.18vw" : "14px"
                                        }}
                                    >
                                        {data[this.classifySystemName()]}
                                    </TableCell>      

                                    {data.hasOwnProperty('ip_address')?
                                    <TableCell 
                                        onClick={()=>this.openDeviceDetail(data)} 
                                        style={{
                                            color:"white",
                                            fontFamily:"inherit",
                                            fontSize: this.state.isDesktop ? "1.18vw" : "14px"
                                        }}
                                    >
                                        {data['ip_address']}
                                    </TableCell>:null}

                                    {/* <TableCell style={{color:'white'}}>{data['time']}</TableCell> */}
                                    
                                    <TableCell 
                                        onClick={()=>this.openDeviceDetail(data)} 
                                        style={{
                                            color:"white",
                                            fontFamily:"inherit",
                                            fontSize: this.state.isDesktop ? "1.18vw" : "14px"
                                        }}
                                    >
                                        {data['compliance_score']}
                                    </TableCell>
                                    {/* <TableCell style={{color:'white',fontSize:14}}>{data['Risk Contribution']}</TableCell> */}
                                    <TableCell>
                                        <div style={{textAlign:'right',marginLeft:15}}>
                                            <TrendingUpIcon 
                                                style={{fontSize:30,cursor:'pointer',color:'white'}} 
                                                onClick={()=>this.openDeviceTrendDialog(data[this.classifySystemName()])} 
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            
                        </TableBody>
                        
                    </Table>:null}
                </div>    
            </div>
            {this.state.openDeviceDetail?
            <DeviceModal open={this.state.openDeviceDetail} close={this.closeDeviceDetail} data={this.state.deviceData} techName={this.props.techName} useCaseName={this.props.usecase}></DeviceModal>:null}
            {this.state.openUsecaseTrendsDialog?
            <UsecaseTrendsDialog open={this.state.openUsecaseTrendsDialog} close={this.closeUsecaseTrendsDialog} techName={this.props.techName} usecase={this.props.usecase}></UsecaseTrendsDialog>:null}
            {this.state.openDeviceTrendDialog?
            <DeviceTrendsDialog open={this.state.openDeviceTrendDialog} close={this.closeDeviceTrendsDialog} techName={this.props.techName} usecase={this.props.usecase} systemName={this.state.systemName}></DeviceTrendsDialog>:null}
            </React.Fragment>
        )
    }
}
const mapStateToProps=state=>{
    return {
        deviceList:state.fetchDeviceData.devData,
        fetchedDeviceData:state.fetchDeviceData.fetchedDeviceData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onClearDeviceData:()=>dispatch(deviceActions.clearDeviceData())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DeviceList);