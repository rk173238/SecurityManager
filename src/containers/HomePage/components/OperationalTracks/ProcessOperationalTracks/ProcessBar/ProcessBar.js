import React,{Component} from 'react';
import { withRouter } from 'react-router';
import * as d3 from 'd3';
import classes from '../../OperationalTracks.css';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import {cardTitle, cardIcon} from '../../OperationalTracks.css';
import {infoIconStyle, trendingUpIconStyle} from '../../TechOperationalTracks/TechBar/TechBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faListAlt} from '@fortawesome/free-solid-svg-icons';
import TechBarEchart from '../../TechOperationalTracks/TechBar/TechBarEchart';

class ProcessBar extends Component{

    state={
        management:50,
        governance:40,
        framework:90,
    }
    reference = React.createRef();
    componentDidMount(){
        // setTimeout(() => {
        //     this.drawChart()
           
        // }, 2);
    }
    // componentWillReceiveProps=(props)=>{
    //     this.setState({
    //         risk:props.data['Operational Risk']['score'],
    //         reliability:props.data['Operational Reliability']['score'],
    //         efficiency:props.data['Operational Efficiency']['score']})
    // }

    drawChart=()=>{
        let Management=this.state.risk
        let Governance=this.state.reliability
        let Framework=this.state.efficiency
        let svg=d3.select('#operationaltracksprocessbar'+this.props.id).append('svg').attr('width','100%').attr('height', "100%")
        var yAxisScale = d3.scaleLinear().domain([100,0]).range([0,140])
        var xAxisScale = d3.scaleBand().domain(['Management','Governance','Framework']).range([0,this.reference.current.clientWidth])
        var xAxis = d3.axisBottom(xAxisScale)
        var mainGroup=svg.append('g').attr('height','100%').attr('width','100%')
        
        //Responsive Font
        let textFontSize = window.matchMedia("(min-width:768px)").matches ? "1.18vw" : "15px";

        //text
        // mainGroup.append('text').attr('x',xAxisScale('Governance')-10).attr('y',20).text('Process').attr('fill','white').attr('font-size',25)

        //xaxis for bars
        

        //Bars
        mainGroup.append("g")
        .attr('id','operationaltracksprocessbarxAxis')
        .call(xAxis)
        .attr('transform','translate(0,161)')
        .style("font-size", textFontSize)
        .style('color','#fff')
        .style('font-family', 'inherit');

        let rectDiff=((xAxisScale('Governance')-xAxisScale('Management'))/2)-10

        let riskBar = mainGroup.append('rect').attr('x',(rectDiff)).attr('y',yAxisScale(Management)+20).attr('width',20)
            .attr('fill','transparent')
            .style('stroke-width','2').style('stroke','yellow').style('cursor','pointer').style("filter", "url(#glow)")
            .on('click',()=>{
                this.props.onTechClickHandler('Management')
                })
            .transition().duration(2000)
            .attr('height',140-yAxisScale(Management))
        mainGroup.append('text').text(Management+'%').attr('x',rectDiff).attr('y',yAxisScale(Management)+10).attr('fill','white').style('font-size',textFontSize)


        
        mainGroup.append('rect').attr('x',xAxisScale('Governance')+rectDiff).attr('y',yAxisScale(Governance)+20).attr('width',20)
            .attr('fill','transparent')
            .style('stroke-width','2').style('stroke','red').style('cursor','pointer').style("filter", "url(#glow)")
            .on('click',()=>{
                this.props.onTechClickHandler('Governance')
                })
            .transition().duration(2000)
            .attr('height',140-yAxisScale(Governance))
        mainGroup.append('text').text(Governance+'%').attr('x',xAxisScale('Governance')+rectDiff).attr('y',yAxisScale(Governance)+10).attr('fill','white').style('font-size',textFontSize)
        


        mainGroup.append('rect').attr('x',xAxisScale('Framework')+rectDiff).attr('y',yAxisScale(Framework)+20).attr('width',20)
            .attr('fill','transparent')
            .style('stroke-width','2').style('stroke','green').style('cursor','pointer').style("filter", "url(#glow)")
            .on('click',()=>{
                this.props.onTechClickHandler('Framework')
                })
            .transition().duration(2000)
            .attr('height',140-yAxisScale(Framework))
        mainGroup.append('text').text(Framework+'%').attr('x',xAxisScale('Framework')+rectDiff).attr('y',yAxisScale(Framework)+10).attr('fill','white').style('font-size',textFontSize)

    }

    render(){
        return(
            <div 
                className={classes.chartCards} 
                style={{position:"relative"}} 
                ref={this.reference}
            >
                {/* <h3 style={{paddingLeft:"10px",fontSize:"1.55rem",color:"#7ed8f3",textAlign:"left", paddingBottom:"5px", borderBottom:"1px solid rgb(165,165,165)"}}> */}
                <div
                    style={{
                        position:"relative",
                        zIndex:"2",
                        borderBottom:"1px solid rgb(165,165,165)"
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faListAlt} 
                        className={cardIcon} 
                    />
                    <p className={cardTitle}> 
                        Process
                    </p>
                    <InfoIcon style={infoIconStyle} />

                    <TrendingUpIcon 
                        style={trendingUpIconStyle} 
                        // onClick={() => this.props.clickedTrend('Efficiency')} 
                    />
                </div>

                {/* <div 
                    id={'operationaltracksprocessbar'+this.props.id}
                    style={{
                        position:"relative",
                        height:"200px"
                    }}
                ></div> */}

                <div 
                    style={{width:"100%",height:"100%"}}
                    onClick={()=>{this.props.history.push({pathname:'/home/details/process/scoredetails'})}}
                >
                    <TechBarEchart 
                        scores={{
                            'Management':[this.state.management.toFixed(0), 'red'],
                            'Governance':[this.state.governance.toFixed(0), 'red'],
                            'Framework':[this.state.framework.toFixed(0), 'green']
                        }} 
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(ProcessBar);