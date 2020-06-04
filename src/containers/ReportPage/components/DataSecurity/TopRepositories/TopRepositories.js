import React,{Component} from 'react'
import BarChart from './BarChart/BarChart'
import { timeHour } from 'd3'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {reportService} from '../../../../../services/report_service'
import IncidentListDialog from './IncidentListDialog/IncidentListDialog';
import {deviceService} from '../../../../../services'
import {dataSecurityService} from '../../../../../services'
import IncidentModal from '../IncidentModal/IncidentModal'
class TopRepositories extends Component{
    state={
        dailyData:'',
        selected:'Daily',
        data:'',
        weeklyData:'',
        monthlyData:'',
    }
    componentWillMount=()=>{
        if(this.props.data){
            this.setState({dailyData:this.props.data,data:this.props.data})
        }
    }
    chooseType=(event)=>{
        console.log(event.target.value)
        this.setState({selected:event.target.value})
        if(event.target.value==='Daily'){
            this.setState({data:''})
            this.setState({data:this.state.dailyData})
        }
        if(event.target.value==='Weekly'){
            this.setState({data:''})
            if(this.state.weeklyData===''){
                dataSecurityService.fetchTopOffendersRepository('Weekly').then(res=>{
                    this.setState({data:res.repository,weeklyData:res.repository})
                })
            }else{
                this.setState({data:this.state.weeklyData})
            }   
        }
        if(event.target.value==='Monthly'){
            this.setState({data:''})
            if(this.state.monthlyData===''){
                dataSecurityService.fetchTopOffendersRepository('Monthly').then(res=>{
                    this.setState({data:res.repository,monthlyData:res.repository})
                })
            }else{
                this.setState({data:this.state.monthlyData})
            }   
        }
    }
    openIncidentListDialog=(props)=>{
        this.setState({openIncidentListDialog:true,incidentList:props.data})
    }
    closeIncidentListDialog=()=>{
        this.setState({openIncidentListDialog:false});
    }
    openIncidentModal=(props)=>{
        var startDate=(JSON.parse(localStorage.getItem('date'))[0]);
        var endDate= JSON.parse(localStorage.getItem('date'))[1];
        var dateRange=[startDate,endDate]
        deviceService.fetchDevices('DLPDiscover-Symantec','','all',dateRange,props.incident).then(res=>{
            
            this.setState({incidentModalData:res,openIncidentModal:true})
            console.log(res)
        })
    }
    closeIncidentModal=()=>{this.setState({openIncidentModal:false})}
    render(){

        return(
            <div style={{width:'100%', textAlign:"center"}}>
                <Select value={this.state.selected} onChange={this.chooseType} style={{color:'white'}}>
                            <MenuItem value='Daily'>Daily</MenuItem>
                            <MenuItem value='Weekly'>Weekly</MenuItem>
                            <MenuItem value='Monthly'>Monthly</MenuItem>
                </Select>
                {this.state.data?<BarChart data={this.state.data} showIncidentList={this.openIncidentListDialog}></BarChart>:null}
                {this.state.openIncidentListDialog?
                    <IncidentListDialog open={this.state.openIncidentListDialog} 
                                    close={this.closeIncidentListDialog} 
                                    data={this.state.incidentList}
                                    openIncidentModal={this.openIncidentModal}></IncidentListDialog>
                :null}
                {this.state.openIncidentModal?
                    <IncidentModal open={this.state.openIncidentModal} close={this.closeIncidentModal} 
                    data={this.state.incidentModalData}></IncidentModal>:null}
                
            </div>
        )
    }
}
export default TopRepositories