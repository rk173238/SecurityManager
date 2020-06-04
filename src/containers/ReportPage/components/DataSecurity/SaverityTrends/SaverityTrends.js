import React,{Component} from 'react';
import {deviceService} from '../../../../../services';
import BarChart from './BarChart';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

/*
    Array = [{
                time: "2020-02-22T07:14:22.839271Z",
                incident_id: 1,
                severity:{
                    data: "high",
                    compliance_score: 0
                }
            }
    ]
*/
class SaverityTrends extends Component{

    state={
        type:'Daily',
    }

    processData = (barData) => {
        let barChartData = {}
        barData.map(data => {
            let date = new Date(data.time)
            date = date.getDate()+'-'+parseInt(date.getMonth()+1)+'-'+date.getFullYear()
            if (!barChartData.hasOwnProperty(date)){
                barChartData[date] = {
                    low: data.severity.data==='low' ? 1 : 0,
                    medium: data.severity.data==='medium' ? 1 : 0,
                    high: data.severity.data==='high' ? 1 : 0
                }
            } else {
                if (data.severity.data==='low') {
                    barChartData[date].low++;
                }
                else if (data.severity.data==='medium') {
                    barChartData[date].medium++;
                }
                else barChartData[date].high++;
            }
        })
        return barChartData;
    }

    componentWillMount=()=>{
        var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
        var endDate= JSON.parse(localStorage.getItem('date'))[1];
        startDate.setDate(startDate.getDate()-30)
        var year=startDate.getFullYear()
        var month=startDate.getMonth()+1;if(month<10) month='0'+month
        var day=startDate.getDate();if(day<10) day='0'+day
        var dateRange=[year+'-'+month+'-'+day+' '+'00:00:00',endDate]
        deviceService.fetchDevices('DLPDiscover-Symantec','severity','all',dateRange,'').then(res=>{
            this.filterByType(res)
        })
    }
    chooseType=(event)=>{
        this.setState({type:event.target.value})
        console.log(event.target.value)
        var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
        var endDate= JSON.parse(localStorage.getItem('date'))[1];
        endDate = '2020-03-03 00:00:00';
        if(event.target.value=="Daily"){
            startDate.setDate(startDate.getDate()-30)
        }
        else if(event.target.value=="Weekly"){
            startDate.setDate(startDate.getDate()-90)
        }
        else if(event.target.value=="Monthly"){
            startDate.setDate(startDate.getDate()-360)
        }
        var year=startDate.getFullYear()
        var month=startDate.getMonth()+1;if(month<10) month='0'+month
        var day=startDate.getDate();if(day<10) day='0'+day
        var dateRange=[year+'-'+month+'-'+day+' '+'00:00:00',endDate]

        deviceService.fetchDevices('DLPDiscover-Symantec','severity','',dateRange,'').then(res=>{
            console.log(res)
            // this.filterByType(res)
        })
    }
    filterByType=(data)=>{
        var newData=[]
        var obj={}
        // console.log(data)
        // data=data.filter(data=>new Date(data.time).getHours()===18)  uncomment when enough data for every day
        // console.log(data)
        if(this.state.type==="Daily") {
            // data=data.reverse()
            // data.map()
            this.setState({data:data});
        }
        
        // data=newData;
        // console.log(data)
    }
    render(){
        return(
            <div>
                {/* {console.log("BARDATA",this.state.data)} */}
                {/* {this.state.data ? console.log("BARCHART DATA:::", this.processData(this.state.data)) : null} */}
                {this.state.data ? 
                        <BarChart data={this.processData(this.state.data)} />
                : 
                    <div style={loaderStyles}>
                        <FontAwesomeIcon icon={faSpinner} size="2x" spin />
                    </div>
                }
            </div>
        )
    }
}
const loaderStyles = {
    display: "inline",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
}
export default SaverityTrends;