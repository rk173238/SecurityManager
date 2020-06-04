import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class AVCoverage extends Component {

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
                data: ['Compliance', 'Non Compliance']
            },
            series: [
                {
                    type: 'pie',
                    label: {
                        show: false,
                        position: 'center'
                    },
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: '{b}: {d}%'
                    },
                    data: [
                        {
                            value: 85, 
                            name: 'Compliance',
                            itemStyle: {
                                color: 'rgb(42, 187, 67)'
                            }
                        },
                        {
                            value: 15,
                            name: 'Non Compliance',
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
export default AVCoverage