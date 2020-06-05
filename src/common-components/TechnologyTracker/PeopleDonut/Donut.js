import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import classes from './Donut.css';


export default class Donut extends Component {

    constructor(props) {
        super(props);
        this.donutHeight = React.createRef();
    }

    state = {
        donutHeight:''
    }

    componentDidMount() {
        // console.log("theHeight",this.donutHeight.current.clientWidth)
        this.setState({donutHeight:this.donutHeight.current.clientWidth * 0.895})
    }
    
    getOption = ()=> {
    
    var placeHolderStyle = {
        normal:{
            label:{formatter: function (params){
                return params.name!=='other'?'\n'+(params.value).toFixed(0)+'%':''
                },
                position:'center',
                textStyle:{
                    fontWeight:400,
                    fontSize:20,
                    color:"white",
                },
                padding:[0,0,0,0]   
            },
            labelLine: {show:false},
            
            color: function(params) {
                // build a color map as your need.
                // console.log('asjdgajhsgdjha')
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
        // option.series.radius=this.props.radius
        option.series.radius= ["57%","70%"]
        option.series.data[0]=this.props.data
        option.series.data[1]={name:"other",value:100-this.props.data.value}
        return option;
    };

    render(){
        return (
            <div 
                ref={this.donutHeight}
                className={classes.donutWrapper}
            >
                <ReactEcharts
                    option={this.getOpts()}
                    // className={classes.donut}
                    style={{
                        width:"100%",
                        height:this.state.donutHeight?this.state.donutHeight:'170px'
                    }}
                />
                <p className={classes.donutName}>
                    { 
                        this.props.data.name === 'Information Security' ? 'InfoSec' : 
                        this.props.data.name.split(' ').length>1 ? 
                        this.props.data.name.split(' ').length>2 ?
                        this.props.data.name.split(' ')[2] :
                        this.props.data.name.split(' ')[1] : 
                        this.props.data.name
                    }
                </p>
            </div>
        );
      }
    }
        