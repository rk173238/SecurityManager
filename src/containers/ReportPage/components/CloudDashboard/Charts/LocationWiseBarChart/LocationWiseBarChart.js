import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
class BarChart extends Component{

    getOption=()=>{
        let option = {
            title: {
                text: 'Location-Wise Instances',
                textStyle: {
                    color: '#ffffff'
                },
                show:false
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {           
                    type : 'shadow'        
                },
            },
            grid:{
                top:10  
            },
            xAxis : [
                {
                    type : 'category',
                    data : [],
                      axisLabel:{
                          rotate:45,
                          textStyle: {
                              color: '#ffffff'
                                    }
                                },
                          axisLine:{
                          lineStyle:{
                                color:'white'
                            }
                         }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                        lineStyle:{
                            color:'white'
                        }
                    }

                
                
                }
            ],
             series : [ 
             
                {
                    type:'bar',
                    name:'ec2',
                    stack: 'a',
                    color:'#e5515d',
                    data:[],
        
                },
                {
                    type:'bar',
                    name:'s3',
                    color:'#2abb9a',
                    stack: 'a',
                    data:[ ]
                },
                  
         
            ]
        };

        return option
    }
    makeData=()=>{
        var option=this.getOption();
        Object.keys(this.props.data).map(location=>{
            option.series[0].data.push(this.props.data[location].ec2)
            option.series[1].data.push(this.props.data[location].s3)
            option.xAxis[0].data.push(location)
        })
        console.log(this.props.data)
        return option;
    }
    render(){
        return(
            <div >
                <ReactEcharts style={{height:370,width:'100%'}} option={this.makeData()} />
            </div>
        )
    }
}
export default BarChart;