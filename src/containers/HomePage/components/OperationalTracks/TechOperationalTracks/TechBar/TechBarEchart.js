import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class TechBarEchart extends Component{

    options = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['One', 'Two', 'Three'],
                axisLine:{
                    lineStyle:{
                        color:"#fff"
                    }
                },
                axisLabel:{
                    fontSize:15,
                    fontFamily: "Ubuntu Mono, monospace"
                }
            },
            yAxis: {
                show:false
            },
            grid:{
                top:20,
                bottom:30,
                left:0,
                right:0
            },
            itemStyle:{
                color:'transparent',
                barBorderColor:'red',
                barBorderWidth:2,
                shadowColor: 'red',
                shadowBlur: 10,
            },
            series: {
                // data: [50, 100, 88],
                data: [
                  {
                    value:50,
                    itemStyle:{
                        barBorderColor:'red',
                        shadowColor: 'red',
                    },
                  },
                  {
                    value:100,
                    itemStyle:{
                        barBorderColor:'green',
                        shadowColor: 'green',
                    },
                  } ,
                  {
                    value:80,
                    itemStyle:{
                        barBorderColor:'green',
                        shadowColor: 'green',
                    },
                  } 
                ],
                type: 'bar',
                barWidth:30,
                label: {
                    show:true,
                    position:'top',
                    color:'#fff',
                    formatter:'{c}%',
                    textStyle:{
                        fontSize:15,
                        fontFamily: "Ubuntu Mono, monospace"
                    }
                }
            }
        };
    }
    getOpts = () => {
        let opt = this.options();
        opt.xAxis.data = Object.keys(this.props.scores)
        Object.keys(this.props.scores).map((name, i) => {
            opt.series.data[i].value = this.props.scores[name][0]
            opt.series.data[i].itemStyle.barBorderColor = this.props.scores[name][1]
            opt.series.data[i].itemStyle.shadowColor = this.props.scores[name][1]
        })
        
        //Responsive font size
        let labelFontSize = window.matchMedia("(min-width:768px)").matches?(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))/100*1:15
        opt.series.label.textStyle.fontSize = labelFontSize
        opt.xAxis.axisLabel.fontSize = labelFontSize
        return opt;
    }
    render(){
        return(
            <ReactEcharts
                option={this.getOpts()}
                opts={{renderer: 'canvas'}}
                style={{
                    height:"100%",
                    fontFamily:"inherit"
                }}
            />
        )
    }
}
export default TechBarEchart;