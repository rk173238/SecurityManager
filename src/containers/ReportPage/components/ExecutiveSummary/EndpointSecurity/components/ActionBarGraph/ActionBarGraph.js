import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class ActionBarGraph extends Component {

    getOption=()=>{
        let option = {
            xAxis: {
                type: 'category',
                data: ['Cleaned', 'Deleted', 'Quarantined', 'No Actions Taken'],
                axisLabel:{
                    rotate:20,
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                axisLine:{
                    lineStyle:{
                            color:'white'
                    }
                }
            },
            yAxis: {
                type: 'value'
            },
            textStyle: {
                color:"#fff"
            },
            series: [{
                data: [
                    {
                        value: 12,
                        itemStyle: {
                            color: 'rgb(42, 187, 67)'
                        }
                    }, 
                    {
                        value: 150,
                        itemStyle: {
                            color: 'rgb(59, 155, 216)'
                        }
                    }, 
                    { 
                        value: 200,
                        itemStyle: {
                            color: '#ffbf00'
                        }
                    }, 
                    {
                        value: 15,
                        itemStyle: {
                            color: '#e63c3c'
                        }
                    }
                ],
                type: 'bar',
                label: {
                    show: true,
                    position: 'inner',
                    textStyle: {
                        color:"#000"
                    }
                },
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        };        
        return option
    }

    render() {
        return (
            <ReactEcharts style={{height:350,width:'100%'}} option={this.getOption()} />
        )
    }
}
export default ActionBarGraph