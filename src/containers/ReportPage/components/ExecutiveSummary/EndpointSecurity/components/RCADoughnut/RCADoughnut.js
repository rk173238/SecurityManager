import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class RCADoughnut extends Component {

    getOption=()=>{
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {d}%'
            },
            legend: {
                orient: 'vertical',
                left: 0,
                top:10,
                textStyle: {
                    color: '#fff'
                },
                data: ['8 Hrs', '4 Hrs', '> 8 Hrs']
            },
            series: [
                {
                    type: 'pie',
                    label: {
                        show: true,
                        position: 'inner',
                        textBorderColor:'#000',
                        textBorderWidth:'2'
                    },
                    radius: ['60%', '80%'],
                    data: [
                        {
                            value: 30, 
                            name: '8 Hrs',
                            itemStyle: {
                                color:'#ffbf00'
                            }
                        },
                        {
                            value: 60,
                            name: '4 Hrs',
                            itemStyle: {
                                color:'rgb(42, 187, 67)'
                            }
                        },
                        {
                            value: 10,
                            name: '> 8 Hrs',
                            itemStyle: {
                                color:'#e63c3c'
                            }
                        }
                    ]
                }
            ]
        };
               
        return option
    }

    render(){
        return(
            <ReactEcharts style={{height:350,width:'100%'}} option={this.getOption()} />
        )
    }
}
export default RCADoughnut