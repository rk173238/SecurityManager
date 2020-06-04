import React,{Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { withRouter } from 'react-router';

class TechnologyView extends Component{

    data=[
        {name:'Firewall',compliance:90,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Antivirus',compliance:70,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Load Balancer',compliance:75,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Hips Mcafee',compliance:76,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Solarwind',compliance:54,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Web Proxy',compliance:71,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Hips Mcafee',compliance:76,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Load Balancer',compliance:75,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'Solarwind',compliance:54,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
        {name:'IDAM',compliance:0,'Overall Contribution':7,'Risk Contribution':9,Probability:73},
    ]
    overallContribution=(techCompliance)=>{
        var overallScoreAverage=this.props.data.reduce((t,data)=>{
            return t+data.compliance
        },0)/this.props.data.length
        // console.log("average score",overallScoreAverage)
        return ((techCompliance*100)/overallScoreAverage).toFixed(2)
        // return 2
    }
    clickedTechnology=(technology)=>{
        this.props.history.push({pathname:'/home/analysis/technologytrends/'+technology})
    }

    //Responsive Font Size
    reponsiveFont = window.matchMedia("(min-width: 768px)").matches ? "1.3vw" : "20px";

    render(){
        return(
            <div style={{width:'100%',height:"100%",marginTop:20,margin:"0 auto"}}>
                {console.log(this.props.data)}
                <Table 
                    style={{
                        height:'100%',
                        width:'100%', 
                        fontFamily:"inherit",
                        fontSize: this.reponsiveFont
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color:'white',fontSize:"1em"}}>Name</TableCell>
                            <TableCell style={{color:'white',fontSize:"1em"}}>Compliance</TableCell>
                            <TableCell style={{color:'white',fontSize:"1em"}}>Overall Contribution</TableCell>
                            <TableCell style={{color:'white',fontSize:"1em"}}>Risk Contribution</TableCell>
                            <TableCell style={{color:'white',fontSize:"1em"}}>Probability</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{height:'100%',width:'100%'}}>
                        {this.props.data.map((data,i)=>(
                            <TableRow key = {i} onClick={()=>this.clickedTechnology(data.technology)} style={(i%2)===0?{backgroundColor:'rgba(0, 102, 0,0.5)'}:{backgroundColor:'transparent'}}>
                                <TableCell style={{color:'white',fontSize:"1em", whiteSpace:"nowrap"}}>{data.technology}</TableCell>
                                <TableCell align="Right" style={{color:'white',fontSize:"1em",}}>{data.compliance}%</TableCell>
                                <TableCell align="right" style={{color:'white',fontSize:"1em"}}>{this.overallContribution(data.compliance)}%</TableCell>
                                <TableCell align="right" style={{color:'white',fontSize:"1em"}}>{data['Risk Contribution']}%</TableCell>
                                <TableCell style={{color:'white',fontSize:"1em"}}>{data['Probability']}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default withRouter(TechnologyView);