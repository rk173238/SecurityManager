import React,{Component} from 'react'
import * as d3 from "d3";

class TechnologyPieChart extends Component{

    componentDidMount=()=>{
        this.drawChart();
        console.log("pie mount")
    }

    drawChart(){

        console.log(this.props.data)
        var score=[]
        var techName=[]
        this.props.data.map((data,i)=>{
            score.push(data.compliance)
            techName.push(data.technology)
        })
        // if(n==2) {
        //     score.pop();score.pop();
        //     techName.pop();techName.pop();
        // }
        let color=['red','blue','yellow','green','pink','purple','cyan','skyblue']
        var pie = d3.pie();
        var normalPath = d3.arc()
					.innerRadius(200)
                    .outerRadius(20)
                    .cornerRadius(15);
        var mouseoverPath=d3.arc()
                .innerRadius(250)
                .outerRadius(20)
                .cornerRadius(15);
        var svg=d3.select("#technologyPieChart").append('svg').attr('width',500).attr('height',500);
        let g = svg.append("g").attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")");
        
        let piechart=g.selectAll("path").data(pie(score)).enter().append("path")
        .style("fill",(data,i)=>color[i]).attr("d",normalPath).attr('id',(d,i)=>'arc'+techName[i]).style('stroke','white').style('stroke-width','2px')
        .on('mouseover',function(d,i){
            d3.select('#arc'+techName[i]).attr('d',mouseoverPath)
        })
        .on('mouseout',function(d,i){
            d3.select('#arc'+techName[i]).attr('d',normalPath)

        })
        d3.select('#arcHIPS-McAfee').transition('ease').duration(2000)
        // g.selectAll("text").data(pie(score)).enter()
        // .append("text").attr("transform", function(d) { 
        //     return "translate(" + normalPath.centroid(d) + ")";})
        .text((d,i)=>techName[i]).style('font-size',25)

        // console.log(path,pie(data))
        
    }
    
    render(){
        return(
            <div>
            <div id="technologyPieChart">
            </div>
            {/* <button onClick={()=>this.drawChart(1)}>button 1</button>
            <button onClick={()=>this.drawChart(2)}>button 2</button> */}
            </div>
        )
    }
}
export default TechnologyPieChart;