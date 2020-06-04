import React,{Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {dataService} from '../../../../services/data_service'
import { compose } from 'redux';
import CategoryTrendsLine from '../../../../common-components/echarts/CategoryTrendsLine/CategoryTrendsLine'
import classes from './CategoryTrendsDialog.css'
class CategoryTrends extends Component{

    state={
        type:'',
        data:''
    }
    chooseType=(event)=>{
        this.setState({type:event.target.value})
        console.log(event.target.value)
        var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
        var endDate= JSON.parse(localStorage.getItem('date'))[1];
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

        dataService.fetchDataWithDate(dateRange,'',true).then(res=>{
            this.filterByType(res,this.props.practice)
        })
    }
    filterByType=(data,practice)=>{
        console.log(data)
        var newData=[]
        var obj={},key1,key2,key3;
        if(practice==='Technology'){
            key1='Operational Risk';key2='Operational Reliability';key3='Operational Efficiency'
        }else if(practice==='People'){
            key1='Training';key2='Awareness';key3='Compliance';
        }
        data=data.filter(data=>new Date(data.time).getHours()===18)
        if(this.state.type==="Daily") {
            // data=data.reverse()
            this.setState({data:data});
        }
        else if(this.state.type==="Weekly"){
            for(var i=0;i<data.length;i=i+7){

                obj={
                    time:'',
                    values:{}
                }
                obj.values[key1]={score:0,sub_categories:''}
                obj.values[key2]={score:0,sub_categories:''}
                obj.values[key3]={score:0,sub_categories:''}

                var dataof7days=data.slice(i,i+7);
                var score=0
                obj['time']=dataof7days[0].time;
                // console.log(dataof7days[0].values[key1])
                dataof7days.map(d=>{score=score+d.values[key1].score});
                obj['values'][key1]["score"]=(score/7).toFixed(2);
                score=0;
                dataof7days.map(d=>{score=score+d.values[key2].score});
                obj['values'][key2]["score"]=(score/7).toFixed(2);
                score=0
                dataof7days.map(d=>{score=score+d.values[key3].score});
                obj['values'][key3]["score"]=(score/7).toFixed(2);

                newData.push(obj)
            }this.setState({data:newData})
            // newData.sort((a,b)=>new Date(a.time)-new Date(b.time))
        }else{
            for(var i=0;i<data.length;i=i+30){
                obj={
                    time:'',
                    values:{}
                }
                obj.values[key1]={score:0,sub_categories:''}
                obj.values[key2]={score:0,sub_categories:''}
                obj.values[key3]={score:0,sub_categories:''}

                var dataof30days=data.slice(i,i+30);
                var score=0
                obj['time']=dataof30days[0].time;
                dataof30days.map(d=>{score=score+d.values[key1].score});
                obj['values'][key1]["score"]=(score/30).toFixed(2);
                score=0;
                dataof30days.map(d=>{score=score+d.values[key2].score});
                obj['values'][key2]["score"]=(score/30).toFixed(2);
                score=0;
                dataof30days.map(d=>{score=score+d.values[key3].score});
                obj['values'][key3]["score"]=(score/30).toFixed(2);

                newData.push(obj)
            }this.setState({data:newData})
        }
        // data=newData;
        // console.log(data)
    }
    render(){
        return(
            <div style={{display:"none"}}>
                {/* {console.log(this.props)} */}
                <Dialog className={classes.dialog}  open={this.props.openCategoryTrendsDialog} onClose={this.props.closeCategoryTrendsDialog}>
                    <DialogTitle>Categories Trends</DialogTitle>
                    <DialogContent>
                        <Select value={this.state.type} onChange={this.chooseType}>
                            <MenuItem value='Daily'>Daily</MenuItem>
                            <MenuItem value='Weekly'>Weekly</MenuItem>
                            <MenuItem value='Monthly'>Monthly</MenuItem>
                        </Select>
                        {this.state.data?
                        <CategoryTrendsLine data={this.state.data} type={this.state.type}></CategoryTrendsLine>
                        :null}
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}
export default CategoryTrends;