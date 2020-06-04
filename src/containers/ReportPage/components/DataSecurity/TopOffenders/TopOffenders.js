import React,{Component} from 'react'
import BarChart from './BarChart/Barchart'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {reportService} from '../../../../../services/report_service'
import {dataSecurityService} from '../../../../../services'
class TopOffenders extends Component{
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
                    this.setState({data:res.targetServer,weeklyData:res.targetServer})
                })
            }else{
                this.setState({data:this.state.weeklyData})
            }   
        }
        if(event.target.value==='Monthly'){
            this.setState({data:''})
            if(this.state.monthlyData===''){
                dataSecurityService.fetchTopOffendersRepository('Monthly').then(res=>{
                    this.setState({data:res.targetServer,monthlyData:res.targetServer})
                })
            }else{
                this.setState({data:this.state.monthlyData})
            }   
        }
    }
    render(){

        return(
            <div style={{textAlign:"center"}}>
                <Select value={this.state.selected} onChange={this.chooseType} style={{color:'white'}}>
                            <MenuItem value='Daily'>Daily</MenuItem>
                            <MenuItem value='Weekly'>Weekly</MenuItem>
                            <MenuItem value='Monthly'>Monthly</MenuItem>
                </Select>
                {this.state.data?<BarChart data={this.state.data}></BarChart>:null}
            </div>
        )
    }
}
export default TopOffenders