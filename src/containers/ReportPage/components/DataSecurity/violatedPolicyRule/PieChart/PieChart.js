import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class PieChart extends Component{
    getOption=()=>{
        let option = {
            title: {
                // text: 'Violated Policy Rule',
                // textStyle: {
                //     color: '#ffffff'
                // }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                type:'scroll',
                orient: 'vertical',
                x: 'left',
                top:'10%',
                data:[],
                textStyle: {
                    color: '#ffffff'
                }
            },
        
            series : [
                {
                    name:'s',
                    type:'pie',
                    labelLine:{
                        show:false,
                    },
                    
                    label:{
                        show:true,
                        position:'inside',
                        formatter: 'Rule:-{b} \n Count: {c}',
                        textStyle:{fontSize:15}
                    },
                    radius : '90%',
                    center: ['50%', '50%'],
                    data:[
                       
                    ],
                    // roseType: 'radius',
                    
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 500;
                    }
                }
            ]
        };

        return option
    }
    getOpts=()=>{
        let option=this.getOption()
        Object.keys(this.props.data).map((repo,i)=>{
            option.legend.data.push(repo)
            option.series[0].data.push(
                {name:repo,value:this.props.data[repo].value,
                data:this.props.data[repo].data,
                itemStyle:{color:colorList[i],barBorderRadius:25},
                emphasis:{itemStyle:{color:'white'}}
                }
            )
        })
        // console.log(this.props)

        return option;
    }
    onChartClick=(params)=>{
        // console.log(params.data)
        this.props.showIncidentList(params.data);
    }
    render(){

        return(
            <div >
                
                <ReactEcharts renderer={'svg'} option={this.getOpts()} onEvents={{'click':this.onChartClick}}></ReactEcharts>
             
            </div>
        )
    }
}
export default PieChart;
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