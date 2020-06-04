import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import classes from './Pie.css';
export default class Pie extends Component {

  getOption = () => {
    return {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        type: 'plain',
        orient: 'vertical',
        right: 0,
        top: 10,
        textStyle: {
          color: "#fff"
        }
      },
      series: [
          {
              name: 'ABC',
              type: 'pie',
              radius: '55px',
              center: ["100px", "80px"],
              avoidLabelOverlap: false,
              selectedMode:'single',
              legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
            },
              label: {
                  normal: {
                      show: false,
                      position: 'inside'
                  },
                  emphasis: {
                      show: false,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  // {
                  //   value: 1, 
                  //   name: 'abc',
                  //   itemStyle: {
                  //     color: 'rgb(220, 18, 10)'
                  //   }
                  // },
                  // {
                  //   value: 2, 
                  //   name: 'def',
                  //   itemStyle: {
                  //     color: 'rgb(10, 210, 130)'
                  //   }
                  // }
              ]
          }
      ]
  };
  
  };

  colors = ['rgb(255,50,30)', 'rgb(75,185,0)', 'rgb(255,75,0)', 'rgb(0,175,255)','rgb(255,0,220)']

  getOpts = () => {
    let option= this.getOption();
    Object.keys(this.props.pieData).map( (key,i) => {
      let date = ''
      if (this.props.usecaseName === 'last_update') {
        date = new Date(Date.parse(key))
        date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
      }
      option.series[0].data.push({
        value: this.props.pieData[key].value,
        name: date ? date:key,
        itemStyle: {
          color: this.colors[i]
        }
        // deviceData: this.props.pieData[key].deviceData
      })
    })
    option.series[0].name = this.props.usecaseName;
    return option;
  };

  render(){
    return (
      <ReactEcharts
        option={this.getOpts()}
        style={{ width: 250, height: 170, display:'inline-block'}}
        className={classes.KPIPie}
        opts={{renderer: 'canvas'}}/>
    );
  }
}
