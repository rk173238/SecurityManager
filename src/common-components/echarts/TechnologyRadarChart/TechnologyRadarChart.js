import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';


export default class TechnologyRadarChart extends Component {
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
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: 'white',
                    backgroundColor: '',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
              
            ],
            splitArea: {
                areaStyle: {
                    color: ['rgba(255, 0, 0,0.5)',
                    'rgba(255, 80, 80,0.5)', 'rgb(255, 255, 0,0.5)',
                    '#00b300', '#004d00'],
                    shadowColor: 'rgba(172, 209, 15, 1)',
                    shadowBlur: 10
                }
            },
        },
        series: [{
            name: 'radar chart',
            type: 'radar',
            areaStyle: {normal: {color:'rgba(0,0,255,0.8)'}},
            data : [
                 {
                    value :[] ,
                    name : 'radar chart'
                }
            ]
        }]
        };
}
    getOpts = () => {
        // console.log(this.props.data)
        if(this.props.data){
            let usecase=Object.keys(this.props.data.usecase_compliance)
            let score=[]
            Object.keys(this.props.data.usecase_compliance).map(usecase=>{
                score.push(this.props.data.usecase_compliance[usecase].compliance_score)
            })
            let option= this.getOption();
            for(let u of usecase){
                option.radar.indicator.push({name:u,max:100})
                
            }
            option.series[0].data[0].value=score
            
            return option;
        }
        return {}
    };
    onChartClick=(param, echarts) => {
        console.log(param);
        
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
            style={{width:'100%'}}
            />
        );
      }
    }
        