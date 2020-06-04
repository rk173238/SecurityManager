import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class CpuUsagePie extends Component {

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
                data: ['0-39%', '40-69%', '70-100%']
            },
            series: [
                {
                    type: 'pie',
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: '{b}: {d}%',
                        textBorderColor:'#000',
                        textBorderWidth:'2'
                    },
                    data: [
                        {
                            value: 70, 
                            name: '0-39%',
                            itemStyle: {
                                color: 'rgb(42, 187, 67)'
                            }
                        },
                        {
                            value: 25,
                            name: '40-69%',
                            itemStyle: {
                                color: '#ffbf00'
                            }
                        },
                        {
                            value: 5,
                            name: '70-100%',
                            itemStyle: {
                                color: '#e63c3c'
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
export default CpuUsagePie