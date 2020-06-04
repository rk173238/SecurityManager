import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class BarChart extends Component {

    getOption = () => {
    return {
        title: {
            text: 'Severity',
            textStyle: {
                color:"rgb(0, 187, 255)"
            },
            show:false
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: { 
            show: true ,
            textStyle: {
                color:"#fff"
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: {
            type: 'category',
            // data: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
            data: [],
            axisLabel: {
                textStyle: {
                    color: "#fff"
                }
            },
        },
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    }
                },
            }
        ],
        series: [
            {
                name: 'Low',
                type: 'bar',
                // data: [20, 4.9, 7.0, 23.2, 25.6, 76.7, 98.6],
                data: [],
                itemStyle: {
                    color:"#136ebd"
                }
            },
            {
                name: 'Medium',
                type: 'bar',
                data: [],
                // data: [30, 5.9, 9.0, 26.4, 28.7, 70.7, 85.6],
                itemStyle: {
                    color:"#fb9b15"
                }
            },
            {
                name: 'High',
                type: 'bar',
                data: [],
                // data: [30, 5.9, 9.0, 26.4, 28.7, 70.7, 90.6],
                itemStyle: {
                    color:"#e61c1e",
                    barBorderRadius:20,
                }
            },
            {
                name:'Low',
                type:'line',
                itemStyle: {
                    color:"#136ebd"
                },
                data:[]
            },
            {
                name:'Medium',
                type:'line',
                itemStyle: {
                    color:"#fb9b15"
                },
                data:[]
            },
            {
                name:'High',
                type:'line',
                itemStyle: {
                    color:"#e61c1e",
                    barBorderRadius:20,
                },
                data:[]
            }
        ]
    };
    };

//   colors = ['rgb(255,50,30)', 'rgb(75,185,0)', 'rgb(255,75,0)', 'rgb(0,175,255)','rgb(255,0,220)']

  getOpts = () => {
    let option = this.getOption();
    Object.keys(this.props.data).map(date => {
        option.xAxis.data.push(date);
        option.series[0].data.push(this.props.data[date].low);
        option.series[1].data.push(this.props.data[date].medium);
        option.series[2].data.push(this.props.data[date].high);
        option.series[3].data.push((this.props.data[date].low))
        option.series[4].data.push((this.props.data[date].medium))
        option.series[5].data.push((this.props.data[date].high))
    })

    // Object.keys(this.props.pieData).map( (key,i) => {
    //   let date = ''
    //   if (this.props.usecaseName === 'last_update') {
    //     date = new Date(Date.parse(key))
    //     date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    //   }
    //   option.series[0].data.push({
    //     value: this.props.pieData[key].value,
    //     name: date ? date:key,
    //     itemStyle: {
    //       color: this.colors[i]
    //     }
    //     // deviceData: this.props.pieData[key].deviceData
    //   })
    // })
    // option.series[0].name = this.props.usecaseName;
    return option;
  };

  render(){
    return (
      <ReactEcharts
        option={this.getOpts()}
        style={{ width:'100%', height: 400, display:'inline-block'}}
        // className={classes.KPIPie}
        opts={{renderer: 'svg'}}/>
    );
  }
}
