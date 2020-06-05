import React,{Component} from 'react'
import classes from './ProductView.css'
import {dataConstants} from '../../../constants';


class ProductView extends Component{
    state = {
        data: []
    }
    componentWillReceiveProps=(props)=>{
        if(props.data.length>0)
        this.makeData(props.data)
    }
    componentDidMount=()=>{
        if(this.props.data.length>0)
        this.makeData(this.props.data)

    }
    makeData(props){
        let techData=props;
        let data={};
        Object.keys(dataConstants.infraMap).map((infra,i)=>{
            let infraLower=infra.split(' ').join('').split('_').join('').split('-').join('').toLowerCase();
            
            techData.map((tech,i)=>{
                // console.log(tech.technology)
                let techLower=tech.technology.toLowerCase()
                // let techLower=tech.technology.split(' ').join('').split('_').join('').split('-').join('').toLowerCase();
                if(dataConstants.infraMap[infra].includes(techLower)){
                    if(!data.hasOwnProperty(infra)){
                        data[infra]={}
                        data[infra]['techScoreChanges']=[];data[infra]['compliance']=[];data[infra]['tech']=[]
                        data[infra]['count']=0;data[infra]['deviceCountChanges']=0;
                        
                    }
                    data[infra].techScoreChanges.push(+tech.techScoreChanges)
                    data[infra].count=data[infra].count+tech.count
                    data[infra].compliance.push(tech.compliance)
                    data[infra].tech.push(tech.technology)
                    data[infra].deviceCountChanges=data[infra].deviceCountChanges+(tech.deviceCountChanges)
                }
            })
        });
        let finalData=[]
        Object.keys(data).map(d=>{
            finalData.push({infra:d,data:data[d]})
        })
        this.setState({data:finalData})
        // console.log("finalData",finalData)
    }
    average=(data)=>{
 
        let sum=0;
        data.map(d=>{sum=sum+d});
        return sum/data.length;
    }

    imgPath=(img)=>{
        img=img.toLowerCase()
        return require('../../../assets/vendorLogos/'+img+'.png')
    }

    render(){
        // const imgPath = require('../../../../assets/aws-ec2.jpg');
        return(
            <div>
                {console.log(this.props)}
                <div className={classes.root} >
                    <div style={{display:'flex', marginLeft:'19%'}}>
                        <p 
                            style={{
                                fontSize:20,
                                color:'rgb(126, 216, 243)',
                                width:'15%', 
                                whiteSpace:window.matchMedia("(min-width:768px)").matches?"nowrap":"normal"
                            }}
                        >
                            No. of Devices
                        </p>
                        <p style={{fontSize:20,color:'rgb(126, 216, 243)',width:'15%',marginLeft:'7%'}}>Compliance</p>
                        <p style={{fontSize:20,color:'rgb(126, 216, 243)',width:'45%',marginLeft:'7%'}}>Vendors</p>
                    </div>
                    
                    {/*div with overflow*/}
                    <div className={classes.technologiesContainer} >
                    {this.state.data.map((data,i)=>(
                        //area for each technology
                        
                        <div className={classes.technologyContainer} key={i}>
                            
                            {/* Technology Name */}
                            <div className={classes.boxes} style={{marginLeft:'1%',textAlign:"left", display:"grid"}}>
                                <p className={classes.techName}>{data.infra}</p>
                            </div>

                            {/* No. of Devices */}
                            <div className={classes.boxes} style={{display:"flex"}}>
                                <p style={{fontSize:"0.75em",color:'white',}}>{data.data.count}</p>
                                <div style={{fontSize:"0.75em",color:'white'}}>
                                    {data.data.deviceCountChanges>=0?<span style={{color:'green'}}>+</span>:<span style={{color:'red'}}>-</span> }
                                    {Math.abs(data.data.deviceCountChanges)}
                                </div>
                            </div>

                            {/* Compliance */}
                            <div className={classes.boxes} style={{display:"grid"}}>
                                    <div style={{fontSize:"0.75em"}}>{this.average(data.data.compliance).toFixed(2)}%</div>
                                    <div style={{fontSize:'15px',color:'#00d800',padding:'3px'}}>
                                        {this.average(data.data.techScoreChanges)>=0?'+':'-' }
                                        {Math.abs(this.average(data.data.techScoreChanges)).toFixed(2)}%
                                    </div>
                            </div>

                            {/* Vendor logos for only available specific technologies */}
                            <div className={classes.boxes} style={{width:'44%', display:'inline', textAlign:"left"}}>
                                {["AWS", "Antivirus"].includes(data.infra) ?
                                    data.data.tech.map(t=>(
                                        <img src={this.imgPath(t)} className={classes.vendorLogo} key={t}/>
                                    ))
                                :null}
                            </div>
                        </div>
                    ))}
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default ProductView;