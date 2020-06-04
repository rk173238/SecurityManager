import React,{Component} from 'react';
import * as d3 from 'd3';
import classes from '../../OperationalTracks.css';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import {cardTitle, cardIcon} from '../../OperationalTracks.css';
import {infoIconStyle, trendingUpIconStyle} from '../../TechOperationalTracks/TechBar/TechBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';

export default class TechBar extends Component {
 
    state={
      training:0,
      awareness:0,
      compliance:0
    }
    reference = React.createRef();
    
    componentDidMount(){
        setTimeout(() => {
            this.drawChart()
        }, 200);
        
    }
    componentWillReceiveProps=(props)=>{
      console.log(props)
      this.setState({
          'Training and Awareness':props.data['Training and Awareness']['score'],
          'Information Security':props.data['Information Security']['score'],
          'compliance':props.data['Compliance']['score']})
  }

    polarToCartesian=(centerX, centerY, radius, angleInDegrees)=> {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
      
        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
    }
    describeArc=(x, y, radius, startAngle, endAngle)=>{
      
          var start = this.polarToCartesian(x, y, radius, endAngle);
          var end = this.polarToCartesian(x, y, radius, startAngle);
            // console.log(start,end)
          var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      
          var d = [
              "M", start.x, start.y, 
              "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
          ].join(" ");
      
          return d;       
    }

    drawChart=()=>{

        let training=this.state['Training and Awareness']
        let leakage=this.state['Information Security']
        let awareness=this.state.compliance
        // let training=5
        // let leakage=40
        // let awareness=7

        let scoreToDegreeScale=d3.scaleLinear().domain([0,100]).range([0,359])
        var yAxisScale = d3.scaleLinear().domain([100,0]).range([0,150])
        var xAxisScale = d3.scaleBand().domain(['zero','Training and Awareness','Information Security','Compliance',]).range([0,this.reference.current.clientWidth])

        let svg=d3.select('#operationalTrackPeopleDonut').append('svg').attr('width','100%').attr('height',190)

        //Responsive Font
        let textFontSize = window.matchMedia("(min-width:768px)").matches?"1.18vw":"15px";

        // svg.append('text').attr('x',xAxisScale('leakage')-30).attr('y',20).text('People').attr('fill','white').attr('font-size',25)
        
        
        //Training Donut
        svg.append('path')
                    .attr('d',this.describeArc(xAxisScale('Training and Awareness')-20, 60, 35, 0, 359))
                    .style('fill','transparent')
                    .style('stroke','grey')
                    .style('stroke-width',5)
        let trainingDonut=svg.append('path')
                    .attr('d',this.describeArc(xAxisScale('Training and Awareness')-20, 60, 35, 0, scoreToDegreeScale(training)))
                    .style('fill','transparent')
                    .style('stroke','yellow')
                    .style('stroke-width',15)
                    .style("filter", "url(#glow)")
                    .style('cursor','pointer')
        svg.append('text').attr('x',xAxisScale('Training and Awareness')-35).attr('y',65).text(training+'%').attr('fill','white').style('font-size',15)
        svg.append('text').attr('x',xAxisScale('Training and Awareness')-55).attr('y',130).text('Training').attr('fill','#fff').style('font-size',15)
        
        //Leakage Donut
        svg.append('path')
                    .attr('d',this.describeArc(xAxisScale('Information Security'), 120, 35, 0, 359))
                    .style('fill','transparent')
                    .style('stroke','grey')
                    .style('stroke-width',5)
        let leakageDonut=svg.append('path')
                    .attr('d',this.describeArc(xAxisScale('Information Security'), 120, 35, 0, scoreToDegreeScale(leakage)))
                    .style('fill','transparent')
                    .style('stroke','green')
                    .style('stroke-width',15)
                    .style("filter", "url(#glow)")
                    .style('cursor','pointer')
        svg.append('text').attr('x',xAxisScale('Information Security')-15).attr('y',125).text(leakage.toFixed(0)+'%').attr('fill','white').style('font-size',15)
        svg.append('text').attr('x',xAxisScale('Information Security')-25).attr('y',185).text('Security').attr('fill','#fff').style('font-size',15)
            
        //Awareness Donut
        svg.append('path')
                    .attr('d',this.describeArc(xAxisScale('Compliance')+20, 60, 35, 0, 359))
                    .style('fill','transparent')
                    .style('stroke','grey')
                    .style('stroke-width',5)
        let awarenessDonut=svg.append('path')
                    .attr('d',this.describeArc(xAxisScale('Compliance')+20, 60, 35, 0, scoreToDegreeScale(awareness)))
                    .style('fill','transparent')
                    .style('stroke','red')
                    .style('stroke-width',15)
                    .style("filter", "url(#glow)")
                    .style('cursor','pointer')
        svg.append('text').attr('x',xAxisScale('Compliance')+5).attr('y',65).text(awareness+'%').attr('fill','white').style('font-size',15)
        svg.append('text').attr('x',xAxisScale('Compliance')-15).attr('y',125).text('Compliance').attr('fill','#fff').style('font-size',15)
                    

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
        
        return (
                <div id='operationalTrackPeopleDonut' ref={this.reference} style={{position:"relative"}} className={classes.chartCards}>
                  {/* <h3 style={{paddingLeft:"10px",fontSize:"1.55rem",color:"#7ed8f3",textAlign:"left", paddingBottom:"5px", borderBottom:"1px solid rgb(165,165,165)"}}> */}
                  <div
                    style={{
                        position:"relative",
                        borderBottom:"1px solid rgb(165,165,165)"
                    }}
                  >
                    <FontAwesomeIcon 
                        icon={faUserFriends} 
                        className={cardIcon} 
                    />
                    <p className={cardTitle}> 
                        People
                    </p>
                    <InfoIcon style={infoIconStyle} />

                      <TrendingUpIcon 
                          style={trendingUpIconStyle} 
                          // onClick={() => this.props.clickedTrend('Efficiency')} 
                      />
                  </div>
                </div>
        )
      }
    }
        