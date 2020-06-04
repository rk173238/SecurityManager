import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';

export default class SubCategoryTrendsLine extends Component{

    getOption=()=>{
        return{
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [],
                type: 'line',
                smooth: true,
                areaStyle: {}
            }]
        }
    }
    getOpts=()=>{
        let option =this.getOption()
        this.props.data.map(d=>{
            option.series[0].data.push(d.values)
            option.xAxis.data.push(d.time)
        })
        return option
    }
    render(){

        return(
            <div>
                <ReactEcharts
                option={this.getOpts()}
                style={{width:'1500px'}}
                opts={{renderer: 'svg'}}
                />
            </div>
        )
    }
}