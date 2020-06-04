import React,{Component} from 'react';
import * as d3 from "d3";
import InfoButton from '../../InfoButton/InfoButton';
import classes from './TechnologyMeter.css'

class TechnologyMeter extends Component{

    state={
        score:0
    }

    componentDidMount(){
        console.log(this.props)
        this.setState({score:this.props.score})
        setTimeout(() => {
            this.drawChart()
        }, 1);
        
        
    }

    drawChart() {
        
        let svg=d3.select('#meter'+this.props.id).append('svg').attr('width',200).attr('height',172).style('background-color','transparent')
        //vertical one line
        let heightOffset = 25;
        let line=svg.append('line').attr('x1',90).attr('y1',50-heightOffset).attr('x2',90).attr('y2',190-heightOffset).attr('stroke-width',2).attr('stroke','white')
        let yAxisScale=d3.scaleLinear().domain([0,100]).range([170,50])
        // horizontal 4 line
        svg.append('line').attr('x1',85).attr('y1',50-heightOffset).attr('x2',95).attr('y2',50-heightOffset).attr('stroke-width',2).attr('stroke','white')
        svg.append('line').attr('x1',85).attr('y1',85-heightOffset).attr('x2',95).attr('y2',85-heightOffset).attr('stroke-width',2).attr('stroke','white')
        svg.append('line').attr('x1',85).attr('y1',120-heightOffset).attr('x2',95).attr('y2',120-heightOffset).attr('stroke-width',2).attr('stroke','white')
        svg.append('line').attr('x1',85).attr('y1',155-heightOffset).attr('x2',95).attr('y2',155-heightOffset).attr('stroke-width',2).attr('stroke','white')
        svg.append('line').attr('x1',85).attr('y1',190-heightOffset).attr('x2',95).attr('y2',190-heightOffset).attr('stroke-width',2).attr('stroke','white')
        
        let score=yAxisScale(this.state.score)
        //circle cy and color should be dynamic
        let circle=svg.append('circle')
        .attr('cx',90)
        .attr('cy',score)
        .attr('r',15)
        .attr('fill',this.state.score<30?'rgba(214, 16, 16,0.7)':this.state.score<60?'rgba(255, 255, 0,0.7)':'rgba(36, 176, 44,0.7)')
        
        // attr y should be dynamic
        let value=svg.append('text')
        .attr('x',120)
        .attr('y',score)
        .text(this.state.score+'%')
        .attr('fill','white')

        // let techName=svg.append('text')
        // .attr('x',50)
        // .attr('y',30)
        // .text(this.props.id)
        // .attr('fill','#00bbff')
       
      
      }
    render(){


        return(
            <div style={{position:"relative"}}>
                <InfoButton></InfoButton>
                <div id={"meter"+this.props.id} 
                    // onClick={()=>this.props.showTechOnTracker(this.props.id)}
                    >
                </div>
                <p className={classes.usecaseName}>{this.props.id}</p>
            </div>
        )
    }
}

export default TechnologyMeter