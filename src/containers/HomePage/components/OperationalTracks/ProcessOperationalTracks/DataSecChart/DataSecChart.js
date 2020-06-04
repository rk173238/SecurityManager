import React,{Component} from 'react'
import LineChart from './LineChart'
import {dataService} from '../../../../../../services'
class DataSecChart extends Component{
    state={
        tech:[],
        people:[],
        process:[],
    }
    componentWillMount=()=>{
        var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
        var endDate= JSON.parse(localStorage.getItem('date'))[1];
        startDate.setDate(startDate.getDate()-300)
        var year=startDate.getFullYear()
        var month=startDate.getMonth()+1;if(month<10) month='0'+month
        var day=startDate.getDate();if(day<10) day='0'+day
        var dateRange=[year+'-'+month+'-'+day+' '+'00:00:00',endDate]
        dataService.fetchDataWithDate(dateRange,'',true).then(res=>{
            this.makeData(res)
        })
    }
    makeData=(res)=>{
        res=res.filter(res=>new Date(res.time).getHours()===6)
        res.sort((a,b)=>new Date(a.time)>new Date(b.time))
        var tech=[],people=[],process=[]
        var count=0;
        for(var i=0;i<res.length;i=i+1){
            var dataof7days=res.slice(i,i+1);

            var obj={time:'',values:''}
            obj['time']=dataof7days[0].time;
            obj['value']=(dataof7days[0].values['Operational Risk'].score+dataof7days[0].values['Operational Reliability'].score+dataof7days[0].values['Operational Efficiency'].score)/3;
            tech.push(obj);

            obj={time:'',values:''}
            if(res.values.hasOwnProperty('Training and Awareness')&&res.values.hasOwnProperty('Information Security')&&res.values.hasOwnProperty('Compliance')){
                obj['time']=dataof7days[0].time;
                // obj['value']=40;
                obj['value']=(dataof7days[0].values['Training and Awareness'].score+dataof7days[0].values['Information Security'].score+dataof7days[0].values['Compliance'].score)/3; 
                people.push(obj);
            }
            // else people.push(people[people.length-1])

            //we do not have data so Constant values for process
            obj={time:'',values:''}
            obj['time']=dataof7days[0].time;
            obj['value']=40;
            process.push(obj);
            count++;if(count>=5) break;
        }
        // console.log(people)
        this.setState({people:people,tech:tech,process:process})
    }
    render(){
        return(
            <React.Fragment>
                {this.state.tech&&this.state.people&&this.state.process?
                <LineChart tech={this.state.tech} people={this.state.people} process={this.state.process}></LineChart>:null}
                {/* {console.log(this.state.people)} */}
            </React.Fragment>
        )
    }
}
export default DataSecChart;