import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import InfoIcon from '@material-ui/icons/Info';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {bottomCardIcon, bottomTitle} from '../../OperationalTracks.css';
import {infoIconStyle} from '../../TechOperationalTracks/TechBar/TechBar';

class LineChart extends Component {
    
    getOpts = ()=>{ 
        return {
        title:{
            // text:'OverAll Score'
        },
        legend: {
            show:true,
            data:['Tech','People','Process'],
            textStyle:{color:'#fff'}
        },
        grid: {
            top:30,
            bottom:35,
            right:15,
        },
        textStyle: {
            color:"#fff"
        },
        xAxis: {
            // name: 'Week',
            nameLocation: 'middle',
            type: 'category',
            boundaryGap: false,
            data: ['W1','W2','W3','W4']
        },
        yAxis: {
            type: 'value',
            splitLine:{
                lineStyle:{
                    type:'dotted'
                }
            }
        },
        series: [{
            name:'Tech',
            data: [50,60,75,75],
            type: 'line',
            color:'#32f732',
            lineStyle: {
                // color:"#32f732",
                width:3,
                shadowBlur: 2,
                shadowColor: "#32a732"
            },
            showSymbol: false,
        },
        {
            name:'People',
            data: [80,85,90,95],
            type: 'line',
            color:"yellow",
            lineStyle: {
                width:3,
                shadowBlur: 2,
                shadowColor: "#32a732"
            },
            showSymbol: false,
        },
        {
            name:'Process',
            data: [50,55,45,60],
            type: 'line',
            color:"blue",
            lineStyle: {
                width:3,
                shadowBlur: 2,
                shadowColor: "#32a732"
            },
            showSymbol: false,
        }
        ]
        }
    }
    getOption=()=>{
        let option=this.getOpts();
        // option.series[0].data=this.props.tech;
        // option.series[1].data=this.props.people;
        // option.series[2].data=this.props.process;
        // console.log(option,this.props)
        return option;
    }
    render() {
        return (
            <React.Fragment>
                <div 
                    style={{
                        paddingTop:"5px", 
                        borderBottom:"1px solid rgb(165,165,165)",
                        position:"relative"
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faChartLine}
                        className={bottomCardIcon}
                    />
                    <p className={bottomTitle}>Overall Compliance Trend</p>
                    <InfoIcon style={infoIconStyle} />
                </div>
                <ReactEcharts
                option={this.getOption()}
                style={{width: "100%",height:"100%",display:'inline-block'}}
                opts={{renderer: 'canvas'}}
                />
                
            </React.Fragment>
        )
    }
}
export default LineChart;
