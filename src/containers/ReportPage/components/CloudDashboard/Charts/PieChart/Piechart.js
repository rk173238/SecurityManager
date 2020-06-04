import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class PieChart extends Component{
    getOption=()=>{
        let option = {
            title: {
                text: 'Failure By Saverity',
                textStyle: {
                    color: '#ffffff'
                },
                show:false
            },
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                type:'scroll',
                orient: 'vertical',
                x: 'right',
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
                        show:false,
                        // position:'inside',
                        // formatter: '{b}: {c}'
                    },
                    radius : '80%',
                    center: ['50%', '50%'],
                    data:[
                       
                    ],
                    roseType: 'radius',
                    
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
        Object.keys(this.props.data).map(key=>{
            option.series[0].data.push({value:this.props.data[key].value,name:key,data:this.props.data[key].deviceData})
            option.legend.data.push(key);
            option.series[0].center=this.props.center;
            option.title.text=this.props.title
        })
        console.log(option,this.props)

        return option;
    }

    render(){

        return(
            <div >
                
                <ReactEcharts renderer={'svg'} option={this.getOpts()} style={{height:370}}></ReactEcharts>
             
            </div>
        )
    }
}
export default PieChart;