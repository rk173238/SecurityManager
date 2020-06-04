import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import classes from './Donut.css';
import {Card,CardHeader} from 'material-ui/Card';
import { withRouter } from 'react-router';


class Donut extends Component {
  getColor=(value)=>{
    return value<30?'rgb(205, 24, 24)':value<60?'yellow':'rgba(36, 176, 44,1)'
  }
  getOption = ()=>{
    
    var placeHolderStyle = {
        normal:{
            label:{
                formatter: function (params){
                    return params.name!=='other'?'\n'+(params.value).toFixed(0)+'%':''
                },
                position:'center',
                textStyle:{
                    color:"white",
                    fontSize:15,
                },
                padding:[20,0,0,0],
            },
            labelLine: {show:false},
            
            color: function(params) {
                // build a color map as your need.
                var finalList=params.name==='other'?'rgba(255,255,255,0.2)':params.value<30?'rgb(205, 24, 24)':params.value<60?'yellow':'rgba(36, 176, 44,1)';
                return finalList;
            },
            
        },
        
        
    };
    return {
            tooltip:{
                trigger:'item'
            },
           
            calculable:true,
            series:
                {
                    type:'pie',
                    center:['50%', '50%'],
                    selectedMode:'single',
                    hoverAnimation:false,
                    // label:{normal: {
                    //     show: false,
                    //     position: 'center'
                    // },},
                    itemStyle:placeHolderStyle,
                    // textColor:'red  ',
                    //itemStyle:labelShow,
                    data:[
                        {name:'Leakage', value:26},
                        {name:'other', value:74},
                    ]
                }, 
        };
}
    getOpts = () => {
        // console.log(this.props.radius)
        let option= this.getOption();
        var color=this.getColor(this.props.data.value)
        var itemstyle={shadowColor:color,shadowBlur: 10}
        
        //Responsive font size for centered label 
        let labelFontSize = window.matchMedia("(min-width:768px)").matches?(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))/100*1.18:15
        option.series.itemStyle.normal.label.textStyle.fontSize = labelFontSize
        
        option.series.center=this.props.center
        option.series.radius=this.props.radius
        option.series.data[0]=this.props.data
        option.series.data[1]={name:"other",value:100-this.props.data.value}
        option.series.data[0].itemStyle=itemstyle
        
        //overwriting colors
        option.series.data[0].itemStyle = 
            {
                shadowBlur: 8,
                color: this.props.data.color,
                shadowColor:this.props.data.color,
            }

        return option;
      };
      onChartClick=(param, echarts) => {
        this.props.history.push({pathname:'/home/details/people/scoredetails'})
    }
    render(){
        let onEvents = {
        'click': this.onChartClick
        
        }
        return (
  
            <div 
                onClick={()=>this.props.history.push({pathname:'/home/details/people/scoredetails'})}
                style={{
                    marginLeft:"0%",
                    backgroundColor:'transparent',
                    ...this.props.propStyle
                }} 
            >
                {/* <InfoButton description={this.props.data.name}></InfoButton> */}
                <ReactEcharts
                    option={this.getOpts()}
                    //className={classes.gauge}
                    className={classes.donut}
                    // onEvents={onEvents}
                    opts={{renderer: 'svg'}}
                    />
                <p 
                    style={{
                        color:'#fff',
                        fontSize:window.matchMedia("(min-width:768px)").matches?"1.18vw":"15px",
                        marginTop:'10%',
                        marginBottom:"0",
                        textAlign:'center',
                        ...this.props.textStyle
                    }}
                >
                    {this.props.data.name}
                </p>                
             </div>
                
                 
        );
      }
    }
export default withRouter(Donut)