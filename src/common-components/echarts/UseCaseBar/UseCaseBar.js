import React,{Component} from 'react'
import * as d3 from "d3";
import {connect} from 'react-redux'
import {deviceActions} from '../../../actions'
import InfoButton from '../../InfoButton/InfoButton'
import { dataConstants } from '../../../constants';
import classes from './UseCaseBar.css';
class UseCaseBar extends Component{

    componentDidMount(){
        this.drawChart()
    }
    nameConverter=(name)=>{
        var s=""
        name.split('_').map(d=>{
           s=s+" "+ d.split('')[0].toUpperCase()+d.split('').splice(1).join('')
        })
        return s;
    }
   
    // componentWillUnmount=()=>{
    //     console.log('sajdgajhsgdjagjdgajh')
    // }
    drawChart(){
        // let compliance =this.props.compliance
        console.log(this.props)
        var low=this.props.usecaseData.count.low
        var medium=this.props.usecaseData.count.medium
        var critical=this.props.usecaseData.count.critical
        var usecase=this.props.name
        var scale = d3.scaleLinear().domain([0,(low+medium+critical)]).range([0,140])
        // console.log(compliance)
        var yScale=d3.scaleLinear().domain([1,20]).range([74,0])
        let svg=d3.select('#bar'+this.props.id).append('svg').attr('height',160).attr('width',150).style('background-color','transparent')
            .style('margin-left',10)
            .style('margin-right',10)
            .style('margin-top',15)
        
        let greenBar=svg.append('rect')
            .attr('x',60)
            .attr('y',10)
            .attr('width',35)
            .attr('height',scale(low))
            .style('fill','rgb(36, 176, 44)')
            .attr('rx',5)
            .style("filter", "url(#glow)")
            .on("mouseover", function() {		
                greenBar.transition()		
                    .duration(1)		
                    .style("opacity", .8);		
                greenBar.style('width',35)		
                    .style("top", (2) + "px")
                    .attr('x',59);	
                svg.select('#lowtooltip'+usecase).style('visibility','visible')
                    	
                })
            .on("mouseout", function(d) {		
                    greenBar.transition()		
                        .duration(1)		
                        .style("opacity", 1);
                    greenBar.style('width',35)
                        .attr('x',60);
                    svg.select('#lowtooltip'+usecase).style('visibility','hidden')
                })	
            .on('click',()=>{
                if(this.props.type!=='Process'){
                var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
                this.props.onFetchDevices(this.props.technology,this.props.name,'low',dateRange,'')
                this.props.showDeviceList(this.props.technology,this.props.name,((low*100)/(low+medium+critical)).toFixed(2))}
            })
        let yellowBar=svg.append('rect')
            .attr('x',60)
            .attr('y',scale(low)+11)
            .attr('width',35)
            .attr('height',scale(medium))
            .style('fill','yellow')
            .attr('rx',5)
            .style("filter", "url(#glow)")
            .on("mouseover", function() {		
                yellowBar.transition()		
                    .duration(1)		
                    .style("opacity", .8);		
                yellowBar.style('width',35)		
                    .style("top", (2) + "px")
                    .attr('x',59);	
                svg.select('#mediumtooltip'+usecase).style('visibility','visible')
                
                })
            .on("mouseout", function(d) {		
                    yellowBar.transition()		
                        .duration(1)		
                        .style("opacity", 1);
                    yellowBar.style('width',35)
                        .attr('x',60);
                    svg.select('#mediumtooltip'+usecase).style('visibility','hidden')
                    
                })	
            .on('click',()=>{
                if(this.props.type!=='Process'){
                var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
                this.props.onFetchDevices(this.props.technology,this.props.name,'medium',dateRange,'')
                this.props.showDeviceList(this.props.technology,this.props.name,((medium*100)/(low+medium+critical)).toFixed(2))}
            })				
        let redBar=svg.append('rect')
            .attr('x',60)
            .attr('y',scale(low+medium)+11)
            .attr('width',35)
            .attr('height',scale(critical))
            .attr('fill','rgb(205, 24, 24)')
            .attr('rx',5)
            .style("filter", "url(#glow)")
            .on("mouseover", function() {		
                redBar.transition()		
                    .duration(1)		
                    .style("opacity", .8);		
                redBar.style('width',35)		
                    .style("top", (2) + "px")
                    .attr('x',59);	
                svg.select('#criticaltooltip'+usecase).style('visibility','visible')
                   	
                })
            .on("mouseout", function(d) {		
                    redBar.transition()		
                        .duration(1)		
                        .style("opacity", 1);
                    redBar.style('width',35)
                        .attr('x',60);
                    svg.select('#criticaltooltip'+usecase).style('visibility','hidden')     	
                })
            .on('click',()=>{
                if(this.props.type!=='Process'){
                    var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
                    this.props.onFetchDevices(this.props.technology,this.props.name,'critical',dateRange,'')
                    this.props.showDeviceList(this.props.technology,this.props.name,((critical*100)/(low+medium+critical)).toFixed(2))}
                })
        
        //TOOLTIP AND TEXT
        if(low!==0){
            svg.append('text')
                .attr('x',60)
                .attr('y',scale(low)/2+18)
                .text(((low*100)/(low+medium+critical)).toFixed(0)+'%')
                .attr('fill','white')
                .style('font-size',15)
                .style('text-shadow', '1px 1px 2px #000')
            svg.append('text')
                .attr('x',40)
                .attr('y',10)
                .attr('id','lowtooltip'+this.props.name)
                .text(low+this.classifySource())
                .attr('fill','white')
                .style('font-size',15)
                .style('visibility','hidden')
        }
        if(medium!==0){
            svg.append('text')
                .attr('x',60)
                .attr('y',scale(low)+scale(medium)/2+18)
                .text(((medium*100)/(low+medium+critical)).toFixed(0)+'%')
                .attr('fill','black')
                .style('font-size',15)
                .style('text-shadow', '1px 1px 2px #fff')
            svg.append('text')
                .attr('x',40)
                .attr('y',10)
                .attr('id','mediumtooltip'+this.props.name)
                .text(medium+this.classifySource())
                .attr('fill','white')
                .style('font-size',15)
                .style('visibility','hidden')
        }
        if(critical!==0){
            svg.append('text')
                .attr('x',60)
                .attr('y',scale(low)+scale(medium)+scale(critical)/2+18)
                .text(((critical*100)/(low+medium+critical)).toFixed(0)+'%')
                .attr('fill','white')
                .style('font-size',15)
                .style('text-shadow', '1px 1px 2px #000')
            svg.append('text')
                .attr('x',40)
                .attr('y',10)
                .attr('id','criticaltooltip'+this.props.name)
                .text(critical+this.classifySource())
                .attr('fill','white')
                .style('font-size',15)
                .style('visibility','hidden')
        }
        // svg.append('text')
        //     .attr('x',yScale(this.props.name.length)+30)
        //     .attr('y',175)
        //     .text(this.nameConverter(this.props.name))
        //     .attr('fill','white')
        //     .style('font-size',12)
        var defs = svg.append("defs");
	    var filter = defs.append("filter")
            .attr("id","glow")
            .attr('width','200%').attr('height','500%')
            .attr('x','-10%')
            .attr('y','-100%');
	    filter.append("feGaussianBlur")
		    .attr("class", "blur")
		    .attr("stdDeviation","5")
            .attr("result","coloredBlur");

	    var feMerge = filter.append("feMerge");
	    feMerge.append("feMergeNode")
		    .attr("in","coloredBlur");
	    feMerge.append("feMergeNode")
		    .attr("in","SourceGraphic");
    }
    classifySource=()=>{
        if(this.props.type==='Technology') return ' Devices'
        if(this.props.type==='Process') return ' Sources'
        return ' Resources'
    }
    showInfoIcon = () => {
        document.getElementById("info"+this.props.id).style.display = "block";
    }
    hideInfoIcon = () => {
        document.getElementById("info"+this.props.id).style.display = "none";
    }
    
    render()
    {
        // console.log(this.props)
        return(
            <div 
                style={{
                    position:"relative",
                    width: "100%"
                }}
                onMouseEnter={this.showInfoIcon} 
                onMouseLeave={this.hideInfoIcon}
            >
                <div id={"info"+this.props.id} style={{display:"none"}}>
                    {this.props.name?<InfoButton description={this.props.name}></InfoButton>:null}
                </div>
                <div 
                    id={"bar"+this.props.id}
                    style={{
                        margin:"0 auto",
                        width:"fit-content"
                    }}
                >
                </div>
                <p className={classes.usecaseName}>
                    {dataConstants.usecaseNameMap[this.props.name]?dataConstants.usecaseNameMap[this.props.name]:this.nameConverter(this.props.name)}
                </p>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        onFetchDevices:(technology,usecase,type,dateRange,systemName)=>dispatch(deviceActions.fetchDevices(technology,usecase,type,dateRange,systemName))
    }
}
const mapStateToProps=state=>{
    return state
}
export default connect(mapStateToProps,mapDispatchToProps)(UseCaseBar);