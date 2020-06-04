import React,{Component} from 'react'
import * as d3 from "d3";
import {connect} from 'react-redux'
import { dataActions } from '../../actions';

class GroupedUsecasesBarChart extends Component{

    reference = React.createRef();
    componentWillMount=()=>{
        let useCaseList=[]
        Object.keys(this.props.technologyUsecases[this.props.technology].usecases).map(u=>useCaseList.push(u))
        // console.log(useCaseList)
        this.props.onfetchUsecaseData(this.props.technology,useCaseList,JSON.parse(localStorage.getItem('date')))
    }
    componentDidMount(){
        this.drawChart()
        
    }
    componentWillReceiveProps=props=>{
        let useCaseData=props.useCaseData
        // console.log(useCaseData)
        if(useCaseData){
                let removable=d3.selectAll('#groupedUsecaseBarChart')
                removable.remove()
                this.drawChart(useCaseData)
        }
        
    }
//     shortUsecase=(usecase)=>{
//         let a=usecase.split('_')[0]
//         let b=usecase.split('_')[1]
//         console.log(a,b)
//         return b;
//     }

    drawChart(useCaseData){
        // console.log(this.props.usecase)
        var lowdata=[90,70,80,40,50,100]
        var mediumdata=[60,20,40,60,70,50]
        var criticaldata=[10,70,10,30,20,1]
        let usecase=['u_1','u_2','u_3','u_4','u_5','u_6']
        let usecaseName=[]
        let max=0
        if(useCaseData){
                usecase=[]
                lowdata=[]
                mediumdata=[]
                criticaldata=[]
                useCaseData.map(u=>{
                        usecase.push(u.name)
                        lowdata.push(u.count.low)
                        mediumdata.push(u.count.medium)
                        criticaldata.push(u.count.critical)

                })
        }
        usecase.map((u,i)=>{
                max=Math.max(max,lowdata[i],mediumdata[i],criticaldata[i])
        })
        
        //scaling 
        var colorScale = d3.scaleQuantize().domain([0,usecase.length]).range(["#5E4FA2", "#3288BD", "#66C2A5", "#ABDDA4", "#E6F598", "#FFFFBF", "#FEE08B", "#FDAE61", "#F46D43", "#D53E4F", "#9E0142"]);
        var xAxisScale = d3.scaleBand().domain(['low','medium','critical']).range([0,this.reference.current.clientWidth-100])
        var xAxis = d3.axisBottom(xAxisScale)
        var yAxisScale = d3.scaleLinear().domain([max,0]).range([0,400])
        var yAxis = d3.axisLeft(yAxisScale)

        var svg=d3.select('#groupedbar').append('svg').attr('id','groupedUsecaseBarChart').attr('height','100%').attr('width','100%').style('background-color','transparent')
        var mainGroup=svg.append('g').attr('height','100%').attr('width','100%')
        
        console.log(yAxisScale(55))   
        mainGroup.append("g").attr('id','xAxis').call(xAxis).attr('transform','translate(50,500)').style("font-size","20px").style('color','white');
        mainGroup.append('g').attr('id','yAxis').call(yAxis).attr('transform','translate(50,100)').style('color','white')
        
        
        var low=mainGroup.append('g').attr('id','lowType').attr('transform','translate('+(+xAxisScale('low')+55)+',100)')
        var medium=mainGroup.append('g').attr('id','mediumType').attr('transform','translate('+(+xAxisScale('medium')+55)+',100)')
        var critical=mainGroup.append('g').attr('id','criticalType').attr('transform','translate('+(+xAxisScale('critical')+55)+',100)')

        var barpos=(this.reference.current.clientWidth-110)/3
        var lowBars= low.selectAll('rect').data(lowdata).enter().append('rect')
                .attr('x',(d,i)=>i*(barpos/usecase.length))
                .attr('y',(d)=>yAxisScale(d))
                .attr('width',barpos/lowdata.length)
                .attr('height',(d)=>400-yAxisScale(d))
                .attr('fill',(d,i)=>colorScale(i))
                .on('mouseover',function(d,i){
                    low.select('#lowTooltip'+usecase[i]).style('visibility','visible')
                    // console.log(t)
                })
                .on('mouseout',function(d,i){
                    low.select('#lowTooltip'+usecase[i]).style('visibility','hidden')                    
                })
                .on('click',(d,i)=>{
                        this.props.showDeviceList({usecase:usecase[i],type:'low',score:lowdata[i]})
                })
        var lowText=low.selectAll('.lowtext').data(usecase).enter().append('text')
                .text((d,i)=>lowdata[i]?d.split('_')[0].slice(0,2).toUpperCase()+'_'+d.split('_')[1].slice(0,2).toUpperCase():null)
                .attr('x',(d,i)=>i*(barpos/usecase.length)).attr('y',(d,i)=>yAxisScale(lowdata[i])-10).attr('class','lowtext').attr('fill','white')
        var lowTooltip=low.selectAll('.lowTooltip').data(usecase).enter().append('text')
                .text((d,i)=>d+':-> '+lowdata[i]+' Devices').attr('x',(d,i)=>i*(barpos/lowdata.length)).attr('y',(d,i)=>lowdata[i]<80?yAxisScale(lowdata[i])-70:yAxisScale(lowdata[i])+20)
                .attr('id',(d)=>'lowTooltip'+d).attr('class','lowTooltip').style('visibility','hidden').attr('fill','white')
        
        var mediumBars= medium.selectAll('rect').data(mediumdata).enter().append('rect')
                .attr('x',(d,i)=>i*(barpos/usecase.length))
                .attr('y',(d)=>yAxisScale(d))
                .attr('width',barpos/usecase.length)
                .attr('height',(d)=>400-yAxisScale(d))
                .attr('fill',(d,i)=>colorScale(i))
                .on('mouseover',function(d,i){
                    medium.select('#lowTooltip'+usecase[i]).style('visibility','visible')
                        // console.log(t)
                })
                .on('mouseout',function(d,i){
                    medium.select('#lowTooltip'+usecase[i]).style('visibility','hidden')                    
                })
                .on('click',(d,i)=>{
                        this.props.showDeviceList({usecase:usecase[i],type:'medium',score:mediumdata[i]})
                })
        var mediumText=medium.selectAll('.lowtext').data(usecase).enter().append('text')
                .text((d,i)=>mediumdata[i]?d.split('_')[0].slice(0,2).toUpperCase()+'_'+d.split('_')[1].slice(0,2).toUpperCase():null)
                .attr('x',(d,i)=>i*(barpos/usecase.length)).attr('y',(d,i)=>yAxisScale(mediumdata[i])-10).attr('class','lowtext').attr('fill','white')
        var mediumTooltip=medium.selectAll('.lowTooltip').data(usecase).enter().append('text')
                .text((d,i)=>d+':-> '+mediumdata[i]+' Devices').attr('x',(d,i)=>i*(barpos/usecase.length)).attr('y',(d,i)=>yAxisScale(mediumdata[i])-70)
                .attr('id',(d)=>'lowTooltip'+d).attr('class','lowTooltip').style('visibility','hidden').attr('fill','white')


        var criticalBars= critical.selectAll('rect').data(criticaldata).enter().append('rect')
                .attr('x',(d,i)=>i*(barpos/usecase.length))
                .attr('y',(d)=>yAxisScale(d))
                .attr('width',barpos/usecase.length)
                .attr('height',(d)=>400-yAxisScale(d))
                .attr('fill',(d,i)=>colorScale(i))
                .on('mouseover',function(d,i){
                        critical.select('#lowTooltip'+usecase[i]).style('visibility','visible')
                            // console.log(t)
                })
                .on('mouseout',function(d,i){
                        critical.select('#lowTooltip'+usecase[i]).style('visibility','hidden')                    
                })
                .on('click',(d,i)=>{
                        this.props.showDeviceList({usecase:usecase[i],type:'critical',score:criticaldata[i]})
                })
        var criticalText=critical.selectAll('.lowtext').data(usecase).enter().append('text')
                .text((d,i)=>criticaldata[i]?d.split('_')[0].slice(0,2).toUpperCase()+'_'+d.split('_')[1].slice(0,2).toUpperCase():null)
                .attr('x',(d,i)=>i*(barpos/usecase.length)).attr('y',(d,i)=>yAxisScale(criticaldata[i])-10).attr('class','lowtext').attr('fill','white')
        var criticalTooltip=critical.selectAll('.lowTooltip').data(usecase).enter().append('text')
                .text((d,i)=>d+':-> '+criticaldata[i]+' Devices').attr('x',(d,i)=>i*(barpos/usecase.length)).attr('y',(d,i)=>yAxisScale(criticaldata[i])-70)
                .attr('id',(d)=>'lowTooltip'+d).attr('class','lowTooltip').style('visibility','hidden').attr('fill','white')
        
        

    }

    render(){

        return(
            <div id="groupedbar" style={{height:570,width:'100%'}} ref={this.reference}>

            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
        return {
                onfetchUsecaseData:(technology,useCaseList,date)=> dispatch(dataActions.fetchUsecaseData(technology,useCaseList,date)),
        }
}
const mapStateToProps=state=>{
        // console.log(state)
        return{
                technologyUsecases:state.fetchSubCategoryData.subCategoryData,
                useCaseData:state.fetchUseCaseData.useCaseData
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupedUsecasesBarChart);
