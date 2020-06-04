import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import classes from './LinePlot.css';
export default class LinePlot extends Component {

getOption = () =>{
  return ({
    backgroundColor: 'rgba(255, 255, 255, 0)',
    textStyle:{
      color:'#fff'
    },
    color:['#f19066','#63cdda','#778beb','rgb(192, 57, 43)','#f39c12'],
    tooltip : {
       trigger: 'item',
       formatter:function (param){
         return param.seriesName +'\n' +param.name+' : ' + param.data.toFixed(2)
         
       }
    },
    legend: {
     orient : 'horizontal',
     y:'bottom',
     data:[],
     textStyle: {color: '#fff',}
    },

    xAxis : [
        {
            type : 'category',
            axisLine:{
              lineStyle:{color:'#fff'}
            },
            data : ['Week 1',' Week 2','Week 3','Week 4','Week 5']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
              lineStyle:{color:'#fff'}
            },
            splitLine:{show:false},
            min:0,
            max:100,
            scale: true
        },
    ],
    series :[]
    })
  };
  getOpts = () => {
    let option= this.getOption();
    option.series.name=this.props.name;
   
    Object.keys(this.props.data).forEach(t=>{
     
      option.series.push({
        name:t,
        type:'line',
        lineStyle:{
          width:2
        },
        areaStyle:this.props.area?{}:null,
        data:this.props.data[t],
      })
      option.legend.data.push(t)
    })
    option.xAxis[0].data=this.props.xAxis?this.props.xAxis:option.xAxis[0].data
    return option;
  };
  render() {
    return (
      <ReactEcharts
        option={this.getOpts()}
        style={{ width: '100%'}}
        className={classes.linePlot}
        opts={{renderer: 'svg'}}/>
    );
  }
}
