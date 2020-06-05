import React,{Component} from 'react';
import * as d3 from 'd3'
import ReactEcharts from 'echarts-for-react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { withRouter } from 'react-router';
import InfoIcon from '@material-ui/icons/Info';
import classes from '../../OperationalTracks.css';
import {cardTitle, cardIcon} from '../../OperationalTracks.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faTools} from '@fortawesome/free-solid-svg-icons';
import TechBarEchart from './TechBarEchart'

class TechBar extends Component{

    state={
        risk:0,
        reliability:0,
        efficiency:0,
    }
    reference = React.createRef();

    componentDidMount(){
        // setTimeout(() => {
        //     this.drawChart()
        //     // console.log(this.props.data)
        // }, 200);
    }
    componentWillReceiveProps=(props)=>{
        this.setState({
            risk:80,
            reliability:60,
            efficiency:100
        })
    }

    drawChart=()=>{
        let Risk=this.state.risk
        let Reliability=this.state.reliability
        let Efficiency=this.state.efficiency?this.state.efficiency:80
        console.log("Techbar Scores", Risk,Reliability,Efficiency)
        let svg=d3.select('#operationaltrackstechbar'+this.props.id).append('svg').attr('width','100%').attr('height',190)

        var yAxisScale = d3.scaleLinear().domain([100,0]).range([0,140])
        var xAxisScale = d3.scaleBand().domain(['Risk','Reliability','Efficiency']).range([0,this.reference.current.clientWidth])
        var xAxis = d3.axisBottom(xAxisScale)
        // var yAxisGrid = d3.axisBottom(yAxisScale)
        // .tickSizeInner(-200, 0);
        var mainGroup=svg.append('g').attr('height','100%').attr('width','100%')
        let rectDiff=((xAxisScale('Reliability')-xAxisScale('Risk'))/2)-10
        
        //Responsive Font
        let textFontSize = window.matchMedia("(min-width:768px)").matches?"1.18vw":"15px";

        
        //text
        // mainGroup.append('text').attr('x',xAxisScale('Reliability')-10).attr('y',20).text('Technology').attr('fill','white').attr('font-size',25)
        // mainGroup.append('path').attr('transform',`translate(${xAxisScale('Efficiency')+rectDiff},${5})`).attr('d','M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z')
        // .style('stroke-width','5').style('stroke','white').style('cursor','pointer')
        //     .on('click',()=>{
        //         this.props.clickedTrend();
        //     })
        //xaxis for bars
        

        //Bars
        mainGroup.append("g").attr('id','operationaltrackstechbarxAxis').call(xAxis).attr('transform','translate(0,161)')
        .style("font-size", textFontSize).style('color','#fff').style('font-family', 'inherit');
        // mainGroup.append("g").attr('id','operationaltrackstechbarxAxis').call(yAxisGrid).attr('transform','translate(0,220)')
        // .style("font-size","13px").style('color','#00bbff');
        

        

        let riskBar = mainGroup.append('rect').attr('x',(rectDiff)).attr('y',yAxisScale(Risk)+20).attr('width',20)
            .attr('fill','transparent')
            .style('stroke-width','1.5').style('stroke','yellow').style('cursor','pointer').style("filter", "url(#glow)")
            .on('click',()=>{
                this.props.onTechClickHandler('Risk')
                })
            .transition().duration(2000)
            .attr('height',140-yAxisScale(Risk))
        mainGroup.append('text').text(Risk.toFixed(0)+'%').attr('x',rectDiff).attr('y',yAxisScale(Risk)+10).attr('fill','white').style('font-size', textFontSize)
        // mainGroup.append('path').attr('transform',`translate(${rectDiff},${yAxisScale(Risk)+20})`).attr('d','M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z')
        // .style('stroke-width','1').style('stroke','yellow').style('cursor','pointer')
        // .on('click',()=>{
        //     // console.log('dsajhgjhsagjhdg')
        //     this.props.clickedTrend('Risk');
        // })


        
        mainGroup.append('rect').attr('x',xAxisScale('Reliability')+rectDiff).attr('y',yAxisScale(Reliability)+20).attr('width',20)
            .attr('fill','transparent')
            .style('stroke-width','1.5').style('stroke','red').style('cursor','pointer').style("filter", "url(#glow)")
            .on('click',()=>{
                this.props.onTechClickHandler('Reliability')
                })
            .transition().duration(2000)
            .attr('height',140-yAxisScale(Reliability))
        mainGroup.append('text').text(Reliability.toFixed(0)+'%').attr('x',xAxisScale('Reliability')+rectDiff).attr('y',yAxisScale(Reliability)+10).attr('fill','white').style('font-size', textFontSize)
        


        mainGroup.append('rect').attr('x',xAxisScale('Efficiency')+rectDiff).attr('y',yAxisScale(Efficiency)+20).attr('width',20)
            .attr('fill','transparent')
            .style('stroke-width','1.5').style('stroke','green').style('cursor','pointer').style("filter", "url(#glow)")
            .on('click',()=>{
                this.props.onTechClickHandler('Efficiency')
                })
            .transition().duration(2000)
            .attr('height',140-yAxisScale(Efficiency))
        mainGroup.append('text').text(Efficiency.toFixed(0)+'%').attr('x',xAxisScale('Efficiency')+rectDiff).attr('y',yAxisScale(Efficiency)+10).attr('fill','white').style('font-size', textFontSize)
       
        
        var defs = svg.append("defs");
        var filter = defs.append("filter")
              .attr("id","glow")
              .attr('width','500%').attr('height','500%')
              .attr('x','-50%')
              .attr('y','-50%');
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

    render(){

        return(
            <div 
                id={'operationaltrackstechbar'+this.props.id} 
                className={classes.chartCards} 
                style={{position:"relative"}} 
                ref={this.reference}
            >
                {/* <h3 style={{paddingLeft:"10px",fontSize:"1.55rem",color:"#7ed8f3",textAlign:"left", paddingBottom:"5px", borderBottom:"1px solid rgb(165,165,165)"}}> */}
                <div
                    style={{
                        position:"relative",
                        borderBottom:"1px solid rgb(165,165,165)"
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faTools} 
                        className={cardIcon} 
                    />
                    <p className={cardTitle}> 
                        Technology
                    </p>
                    <InfoIcon style={infoIconStyle} />
                    
                    <TrendingUpIcon 
                        onClick={() => this.props.clickedTrend('Technology')} 
                        style={trendingUpIconStyle} 
                    />
                </div>

                <div 
                    style={{width:"100%",height:"100%"}}
                    onClick={()=>{this.props.history.push({pathname:'/home/details/technology/scoredetails'})}}
                >
                    <TechBarEchart 
                        scores={{
                            'Risk':[this.state.risk.toFixed(0), 'red'],
                            'Reliability':[this.state.reliability.toFixed(0), 'green'],
                            'Efficiency':[this.state.efficiency.toFixed(0), 'green'],
                        }} 
                    />
                </div>
            </div>
        )
    }
}

/*
    These are global styles imported by 
    PeopleDonut.js, 
    ProcessBar.js,
    Top5fUsecase.js, 
    ServerLocation.js, 
    DataSecChart.js

    The reason why these inline styles are applied instead of css file is
    to replace pre-applied MUI based inline styles.
*/
export const infoIconStyle = {
    position:"absolute",
    right:"10px",
    cursor:"pointer",
    fontSize:window.matchMedia("(min-width: 768px)").matches?"1.3vw":"18px",
    color: "#fff",
    top:"50%",
    transform:"translateY(-50%)"
}
    
export const trendingUpIconStyle = {
    position:"absolute",
    right:"10%",
    cursor:"pointer",
    fontSize:window.matchMedia("(min-width: 768px)").matches?"1.5vw":"22px",
    color:"#fff",
    top:"50%",
    transform:"translateY(-50%)"
}

export default withRouter(TechBar);