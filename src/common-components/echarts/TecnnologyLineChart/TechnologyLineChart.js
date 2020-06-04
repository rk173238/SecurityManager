import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';


export default class TechnologyLineChart extends Component {
  getOption = ()=>{
    var placeHolderStyle = {
        normal:{
            color: function(params) {
                // build a color map as your need.
                var colorList = ['#C1232B','rgba(0,0,0,0)'];
                var finalList=params.value<30?'#C1232B':params.value<60?'yellow':'green';
                return finalList;
            },
            barBorderRadius:5,
            
        },
        emphasis:{
            
        }
    };
    return {
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            
            
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {   
                    type : 'category',
                    boundaryGap : false,
                    data : [],
                    axisLine:{
                        lineStyle:{color:'#fff'}
                    },
                }
            ],
            yAxis : [
                {
                    axisLine:{
                        lineStyle:{color:'#fff'}
                    },
                    type : 'value'
                }
            ],
            series : [
                {
                    type:'line',
                    areaStyle: {normal:{color:'#007acc'}},
                    data:[]
                },
                
                
            ]
                     
        
        };
    }
    getOpts = () => {
        
        let option= this.getOption();
        // console.log(option)  
        let data=this.props.data
        if(data.length>0){
            data.map((data,i)=>{
                option.series[0].data.push(data.technology_compliance)
                option.xAxis[0].data.push('day'+i)
            })
            
        }
        // console.log(data)      
        return option;
      };
      onChartClick=(param, echarts) => {
        // console.log(param);
        
    }
    render(){
        let onEvents = {
        'click': this.onChartClick
        
        }
        
        return (
            
          <ReactEcharts
            option={this.getOpts()}
            //className={classes.processBar}
            // className={classes.donut}
            //onEvents={onEvents}
            //opts={{renderer: 'svg'}}
            style={{width:'100%', height:280}}
            />
        );
      }
    }
        