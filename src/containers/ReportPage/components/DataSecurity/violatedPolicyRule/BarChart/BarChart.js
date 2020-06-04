import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import {ECharts} from 'echarts/lib/echarts'
import * as echarts from 'echarts'
class BarChart extends Component{
    getOption=()=>{
        return{
            title:{
                // text:'Violated Policy Rules',
                // textStyle:{color:'rgb(0, 187, 255)'},
                // top:'25px'
            },
            legend: {
                orient:'horizontal',
                type:'scroll',
                data: [],
                textStyle:{color:'white'},
                bottom:'5%',
                pageIconColor:'red'
                
            },
            // grid:{
            //     left:'-10%',
            //     right:'10%'
            // },
            tooltip: {
                formatter: function (params) {
                    // console.log(params)
                    return 'Rule : '+params.seriesName+'<br/> count : '+params.value
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel:{
                    color:'white'
                },
                axisLine:{
                    lineStyle:{color:'white'}
                }
            },
            yAxis: {
                show:true,
                type: 'value',
                axisLabel:{
                    color:'white'
                },
                axisLine:{
                    lineStyle:{color:'white'}
                }
            },
            series: [
                {
                type: 'bar',
                data: [],
                },
            ]
        }
    }
    getOpts=()=>{
        // console.log(this.props.data)
        let option=this.getOption();
        // console.log(this.props)
        Object.keys(this.props.data).map((repo,i)=>{
            // option.xAxis.data.push(repo);
            option.legend.data.push(repo)
            // option.series[0].data.push({name:repo,value:this.props.data[repo]})
            option.series.push({
                name:repo,type:'bar',
                itemStyle:{color:colorList[i],barBorderRadius:25},
                emphasis:{itemStyle:{color:'white'}},
                data:[this.props.data[repo]]})
        })
        return option;
    }
    onChartClick=(params)=>{
        // console.log(params.data)
        this.props.showIncidentList(params.data);
    }
    render(){
        return(
            <div>
                <ReactEcharts
                option={this.getOpts()}
                style={{height:350}}
                onEvents={{'click':this.onChartClick}}
                // opts={{renderer: 'svg'}}
                >
                </ReactEcharts>
            </div>
        )
    }
}
export default BarChart;
var colorList=[
    '#66CDAA',
    '#FF1493',
    '#FF6347',
    '#00BFFF',
    '#663399',
    '#4682B4',
    '#F4A460',
    '#A52A2A',
    '#FF8C00',
    '#ADFF2F',
    '#DC143C',
    '#00FA9A',
    '#228B22',
    '#20B2AA',
    '#00FFFF',
    '#483D8B',
    '#4169E1',
    '#2F4F4F',
    '#00CED1',
    '#00FF00',


]