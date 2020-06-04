import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import {ECharts} from 'echarts/lib/echarts'
import * as echarts from 'echarts'
class TopOffenders extends Component{
    getOption=()=>{
        return{
            title:{
                // text:'Top 10 Offenders',
                // textStyle:{color:'rgb(0, 187, 255)'}
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'        
                },
                formatter: function (params) {
                    var t = params[0];
                    var r="Top 10 offenders for this Quarter <br/>"+
                    'a'+':'+3+'<br/>'+
                    'bar'+':'+4+'<br/>'+
                    'c'+':'+5+'<br/>'+
                    'visualMap'+':'+6+'<br/>'+
                    'formatter'+':'+32+'<br/>'+
                    'grid'+':'+2+'<br/>'+
                    'formatter'+':'+3+'<br/>'+
                    'heatmap'+':'+4+'<br/>'+
                    'tooltip'+':'+6+'<br/>'+
                    'radar'+':'+7+'<br/>';
                    if(t.name==='Top 10') return r;
                    return t.value;
                }
            },
            xAxis: {
                type: 'category',
                data: ['Top 10', 'Others',],
                axisLabel:{
                    color:'white'
                },
                axisLine:{
                    lineStyle:{color:'white'}
                }
            },
            yAxis: {
                show:false,
                type: 'value'
            },
            series: [
                {
                name:'Top Offenders',
                type: 'bar',
                
                data: [
                    {name:'Top 10',value:120,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#1786c8'},
                                {offset: 0.5, color: '#1166bb'},
                                {offset: 1, color: '#0a42a9'}
                            ]
                            )
                        },
                    },
                    {name:'others',value:150,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#fcb521'},
                                {offset: 0.5, color: '#fb9d15'},
                                {offset: 1, color: '#fa9b27'}
                            ]
                            )
                        },
                    },
                    
                ],
                },
            ]
        }
    }
    getOpts=()=>{
        // console.log(this.props)
        let option=this.getOption();
        var topTotal=0;var formatt='';var othersTotal=0;
        var topPercent=0,OtherPercent;
        var data=[];
        Object.keys(this.props.data).map(server=>{
            data.push({targetServer:server,value:this.props.data[server]})
        })
        data.sort((a,b)=>b.value-a.value)
        var top10=data.slice(0,10);var others=data.slice(10)
        top10.map((server,i)=>{
            formatt=formatt+(+i+1)+').'+server.targetServer+' : '+server.value+'<br/>'
            topTotal+=server.value
        })
        others.map(server=>{
            formatt=formatt+server.targetServer+' : '+server.value+'<br/>'
            othersTotal+=server.value
        })
        topPercent=((topTotal*100)/(topTotal+othersTotal)).toFixed(0);
        OtherPercent=100-topPercent;
        formatt='Top 10 Target Server : '+topPercent+'% <br/>'+formatt
        option.tooltip.formatter=(params)=>params[0].name==='Top 10'?formatt:'Others : '+othersTotal;
        option.series[0].data[0].value=topTotal;
        option.series[0].data[1].value=othersTotal;
        return option;
    }
    render(){
        return(
            <ReactEcharts
            option={this.getOpts()}
            style={{height:350}}
            opts={{renderer: 'svg'}}/>
        )
    }
}
export default TopOffenders;
