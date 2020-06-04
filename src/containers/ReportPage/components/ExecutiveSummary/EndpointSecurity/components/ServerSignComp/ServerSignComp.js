import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class ServerSignComp extends Component {

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
                data: ['n-1', 'n-2', '> n-2']
            },
            series: [
                {
                    type: 'pie',
                    // label: {
                    //     show: false,
                    //     position: 'center'
                    // },
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: '{d}%',
                        textBorderColor:'#000',
                        textBorderWidth:'2'
                    },
                    data: [
                        {
                            value: 10, 
                            name: 'n-1',
                            itemStyle: {
                                color: 'rgb(59, 155, 216)'
                            }
                        },
                        {
                            value: 85,
                            name: 'n-2',
                            itemStyle: {
                                color: 'rgb(42, 187, 67)'
                            }
                        },
                        {
                            value: 5,
                            name: '> n-2',
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
export default ServerSignComp