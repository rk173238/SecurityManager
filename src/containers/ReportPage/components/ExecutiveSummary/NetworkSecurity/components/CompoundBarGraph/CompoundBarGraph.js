import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class CompoundBarGraph extends Component {

    getOption=()=>{
        let option = {
            // title: {
            //     text: 'Data Security',
            //     textStyle: {
            //         color:"rgb(0, 187, 255)"
            //     }
            // },
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
                data: ['N-1','N-2','N-3','N-4','N-5'],
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    }
                },
            },
            yAxis: [
                {
                    type: 'value',
                    // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        }
                    },
                }
            ],
            series: [
                {
                    name: 'Antivirus',
                    type: 'bar',
                    data: [12,25,5,30,11],
                    itemStyle: {
                        color:"#136ebd"
                    }
                },
                {
                    name: 'Antispyware',
                    type: 'bar',
                    data: [8,30,12,7,22],
                    itemStyle: {
                        color:"#fb9b15"
                    }
                },
                {
                    name: 'Wildfire',
                    type: 'bar',
                    data: [25,14,7,19,12],
                    itemStyle: {
                        color:"#e61c1e"
                    }
                }
            ]
        };  
        return option
    }

    render() {
        return (
            <ReactEcharts style={{height:350,width:'100%'}} option={this.getOption()} />
        )
    }
}
export default CompoundBarGraph