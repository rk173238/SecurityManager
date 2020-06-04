import React,{Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {dataService} from '../../../../services/data_service'
import SubCategoryTrendsLine from './SubCategoryTrendsLine'
import classes from './SubCategoryTrendsDialog.css'
class SubCategoryTrends extends Component{

    state={
        type:'',
        data:'',
        dailyData:'',
        selected:'Daily',
        data:'',
        weeklyData:'',
        monthlyData:'',
    }
    componentWillMount=()=>{
        var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
        var endDate= JSON.parse(localStorage.getItem('date'))[1];
        startDate.setDate(startDate.getDate()-30)
        var year=startDate.getFullYear()
        var month=startDate.getMonth()+1;if(month<10) month='0'+month
        var day=startDate.getDate();if(day<10) day='0'+day
        var dateRange=[year+'-'+month+'-'+day+' '+'00:00:00',endDate]
        dataService.fetchDataWithDate(dateRange,'',true).then(res=>{
            console.log(res)
            this.makeData(res,'Daily',this.props.category,this.props.subCategory)
        })
    }
    
    makeData=(res,type,category,subCategory)=>{
        res=res.filter(res=>new Date(res.time).getHours()===18)
        var data=[];
        if(type=='Daily'){
            res.map(d=>{
                var obj={time:'',values:''}
                obj.time=d.time;obj.values=d.values[category]['sub_categories'][subCategory]
                data.push(obj);
                this.setState({data:data,dailyData:data})
            },e=>console.log(e),a=>console.log(a))
        }
        else if(type==="Weekly"){
            for(var i=0;i<res.length;i=i+7){
                var obj={
                    time:'',
                    values:''
                }
                var dataof7days=res.slice(i,i+7);
                var score=0
                obj['time']=dataof7days[0].time;
                dataof7days.map(d=>{score=score+d.values[category]['sub_categories'][subCategory]});
                obj['values']=(score/7).toFixed(2);
                data.push(obj)
            }this.setState({data:data,weeklyData:data})
        }else if(type=='Monthly'){
            for(var i=0;i<res.length;i=i+30){
                var obj={
                    time:'',
                    values:''
                }
                var dataof30days=res.slice(i,i+30);
                var score=0
                obj['time']=dataof30days[0].time;
                dataof30days.map(d=>{score=score+d.values[category]['sub_categories'][subCategory]});
                obj['values']=(score/30).toFixed(2);
                data.push(obj)
            }this.setState({data:data,monthlyData:data})
        }
    }
    chooseType=(event)=>{
        this.setState({selected:event.target.value})
        var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
        var endDate= JSON.parse(localStorage.getItem('date'))[1];
        if(event.target.value=="Daily"){
            this.setState({data:this.state.dailyData})
            // this.makeData(this.state.dailyData,'Daily',this.props.category,this.props.subCategory)
            return
        }
        else if(event.target.value=="Weekly"){
            if(this.state.weeklyData==''){
                startDate.setDate(startDate.getDate()-90)
            }
            else {this.setState({data:this.state.weeklyData});return;}
            
        }
        else if(event.target.value=="Monthly"){
            if(this.state.monthlyData==''){
                startDate.setDate(startDate.getDate()-360)
            }
            else {this.setState({data:this.state.monthlyData});return;}
        }
        var year=startDate.getFullYear()
        var month=startDate.getMonth()+1;if(month<10) month='0'+month
        var day=startDate.getDate();if(day<10) day='0'+day
        var dateRange=[year+'-'+month+'-'+day+' '+'00:00:00',endDate]
        dataService.fetchDataWithDate(dateRange,'',true).then(res=>{
            this.makeData(res,event.target.value,this.props.category,this.props.subCategory)
        })
    }
    render(){
        return(
            <div>
                {/* {console.log(this.props)} */}
                {console.log(this.state.data)}
                <Dialog className={classes.dialog}  open={this.props.openSubCategoryTrendsDialog} onClose={this.props.closeSubCategoryTrendsDialog}>
                    <DialogTitle>SubCategories Trends : {this.props.subCategory}</DialogTitle>
                    <DialogContent>
                        <Select value={this.state.selected} onChange={this.chooseType}>
                            <MenuItem value='Daily'>Daily</MenuItem>
                            <MenuItem value='Weekly'>Weekly</MenuItem>
                            <MenuItem value='Monthly'>Monthly</MenuItem>
                        </Select>
                        {this.state.data?<SubCategoryTrendsLine data={this.state.data}></SubCategoryTrendsLine>:null}
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}
export default SubCategoryTrends;