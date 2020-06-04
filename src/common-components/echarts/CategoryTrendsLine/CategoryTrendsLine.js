import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

 class CategoryTrendsLine extends Component {

    getOption = () => {
      return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Risk',
                type: 'line',
                smooth: true,
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top'
                //     }
                // },
                data: []
            },
            {
                name: 'Reliability',
                type: 'line',
                smooth: true,
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top'
                //     }
                // },
                data: []
            },
            {
                name: 'Efficiency',
                type: 'line',
                smooth: true,
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top'
                //     }
                // },
                data: []
            }
        ]
        }
    
    };
    // componentWillUpdate=()=>{

    // }
    getOpts = () => {
      let option= this.getOption();
    //   if(this.props.type==='Daily'){
    //     option.series[0].label.normal.show=false;option.series[1].label.normal.show=false;option.series[2].label.normal.show=false;
    //     console.log(option)
    //   }
      this.props.data.map(data=>{
          option.xAxis[0].data.push(data.time)
          option.series[0].data.push(data.values['Operational Risk']['score'])
          option.series[1].data.push(data.values['Operational Reliability']['score'])
          option.series[2].data.push(data.values['Operational Efficiency']['score'])
      })
      console.log(this.props.data)
      return option;
    };
  
  
    render(){
      return (
        //   <div style={{height:'100%',width:'100%'}}>
            <ReactEcharts
                option={this.getOpts()}
                style={{width:'1500px'}}
                opts={{renderer: 'svg'}}
            />
        //   </div>
      );
    }
  }
export default CategoryTrendsLine;