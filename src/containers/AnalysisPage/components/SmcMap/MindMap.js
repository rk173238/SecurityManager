import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react'
import classes from './MindMap.css'
// import {dataService} from '../../services'
class MindMap extends Component{
    state={
        dataCollected:{},
        mapData:'',
        option:'',
    }
    getOption=()=>{
        return{
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series:[
        
                {
                    type: 'tree',
                    symbol:'circle',
                    data: [],
                    // layout:'radial',
                    top: '2%',
                    left: '10%',
                    bottom: '2%',
                    right: '20%',
                    symbolSize: 35,
                    itemStyle:{
                        normal: {
                            color: '#2c3e50',
                            borderColor: '#fff',
                            borderWidth: 0,
                            borderType: 'solid',
  
                        },
                        emphasis: {
                            color: '#ccc',
                            borderColor: 'blue',
                            borderWidth: 1.5,
                            borderType: 'solid',
                        }
                    },
                    label: {
                        normal: {
                            position: 'top',
                            verticalAlign: 'middle',
                            align: 'center',
                            fontSize:15,
                            color:'#fff',
                            padding: [0, 0, 2.5, 0]

                        },
                        emphasis: {
                            color: '#fff',
                            // borderColor: '#ccc',
                            // borderWidth: 1.5,
                            // borderType: 'solid',
                            textShadow:'3px 18px 10px red'
                        }
                    },
                    lineStyle:{
                        color: '#ccc',
                        width: 1.5,
                        curveness: .5,

                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
        
                    expandAndCollapse: true,
        
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        }
    }
    getOpts=()=>{
        console.log(this.props)
        var option=this.getOption()
        option.series[0].data[0]=this.props.data
        return option;
    }
    onChartClick=(param, echarts) => {
        this.props.onChartClick(param.data)
    }
    render(){

        return(
            <div style={{width:'100%'}} id="mindMap">
                {console.log(this.state.mapData)}
                <ReactEcharts className={classes.mindMap} option={this.getOpts()} onEvents={{'click':this.onChartClick}}>

                </ReactEcharts>
            </div>
        )
    }

}
export default MindMap