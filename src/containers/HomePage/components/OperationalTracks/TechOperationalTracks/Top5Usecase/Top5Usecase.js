import React,{Component} from 'react';
import {weightageService} from '../../../../../../services/weightage_service';
import {dataService} from '../../../../../../services';
import classes from './Top5Usecase.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner, faBullseye} from '@fortawesome/free-solid-svg-icons';
import { dataConstants } from '../../../../../../constants';
import {bottomCardIcon, bottomTitle} from '../../OperationalTracks.css';
import {infoIconStyle} from '../TechBar/TechBar';
import InfoIcon from '@material-ui/icons/Info';

class Top5Usecase extends Component{
    state={
        data:''
    }
    componentWillMount=()=>{
        // this.fetchWeightage();
        this.fetchUsecaseCompliance();
    }
    fetchWeightage=()=>{
        weightageService.getWeightage('tech').then(res=>{
            var techWeightage=[]
            Object.keys(res.data['tech_weightage']).map(tech=>{
                if(tech!=='S3-AWS'&&tech!=='EC2-AWS')
                techWeightage.push(tech)
            })
            techWeightage=techWeightage.sort((a,b)=>b.techWeightage-a.techWeightage).slice(0,8)
            console.log(techWeightage)
            var usecaseWeightage=[]
            weightageService.getWeightage('usecase').then(res=>{
                console.log(res.data['usecase_weightage'])
                Object.keys(res.data['usecase_weightage']).map(tech=>{
                    if(techWeightage.includes(tech)){
                        // console.log(tech)
                        var topUsecase=[]
                        Object.keys(res.data['usecase_weightage'][tech]).map(usecase=>{
                            topUsecase.push({usecase,tech,weightage:res.data['usecase_weightage'][tech][usecase]})
                        })
                        topUsecase.sort((a,b)=>b.weightage-a.weightage)
                        usecaseWeightage.push(topUsecase[0])
                    }
                })
                this.fetchUsecaseCompliance(usecaseWeightage)
            })
        })
    }
    fetchUsecaseCompliance=()=>{
        var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
        // props=props.slice(0,5)
        // Promise.all(props.map(data=>dataService.fetchTechnologyData(data.tech,[data.usecase],dateRange,true))).then(res=>{
        //     var data=res.filter(data=>data)
        //     this.setState({data:data})
        //     console.log(data)
        // })
        Promise.all([
            dataService.fetchTechnologyData('av-mcafee',['dat_ver'],dateRange,true),
            dataService.fetchTechnologyData('Antivirus-Symantec',['agent_version'],dateRange,true),
            dataService.fetchTechnologyData('FirewallAnalyzer-Firemon',['unused_rules'],dateRange,true),
            dataService.fetchTechnologyData('LoadBalancer-F5',['product_version'],dateRange,true),
            dataService.fetchTechnologyData('S3-AWS',['encryption'],dateRange,true),
            dataService.fetchTechnologyData('av-mcafee',['last_update'],dateRange,true),


            // dataService.fetchTechnologyData('EC2-AWS',['state'],dateRange,true),
            
            // dataService.fetchTechnologyData('S3-AWS',['encryption'],dateRange,true),
            // dataService.fetchTechnologyData('SecurityManager-Firemon',['unused_rules'],dateRange,true),
            // dataService.fetchTechnologyData('DLPDiscover-Symantec',['severity'],dateRange,true),
        ]).then(res=>{
            var data=res.filter(data=>data)

            //extra dummy data
            let extraData = [{
                technology:"firewallanalyzer-firemon",
                data:[{name: "risky_rules", score: 55, count: {low: 0, medium: 0, critical: 5}}]
            }]
            
            this.setState({data:data})
        })
    }
    capitalizeFirstLetter = (string) => {
        let str='';
        string = string.split("_")
        string.map(string=>{
            str+=string.charAt(0).toUpperCase() + string.slice(1)+' ';
        })
        return str;
    }
    imgPath=(img)=>{
        img=img.toLowerCase()
        return require('../../../../../../assets/'+img+'.png')
    }
    
    render(){
        return(
            <div style={{color:"white", height:"100%", position:"relative"}}>
                {this.state.data?
                <div 
                    style={{
                        paddingTop:"5px",
                        fontFamily:"Ubuntu Mono,monospace", 
                    }}
                >
                    <div 
                        style={{
                            marginBottom:"10px", 
                            borderBottom:"1px solid rgb(165,165,165)", 
                            fontSize:"20px", 
                            position:"relative"
                            }}
                    >
                        <FontAwesomeIcon 
                            icon={faBullseye} 
                            className={bottomCardIcon} 
                        />
                        <p className={bottomTitle}>Critical Parameters</p>
                        <InfoIcon style={infoIconStyle} />
                    </div>
                    {this.state.data.map((data,i)=>(
                        <div 
                            key={i} 
                            style={{
                                display:'flex', 
                                padding:"0 5px",
                                fontSize:'1em',
                                color:"#ffffffa6"
                            }}
                        >
                            <div style={{flex:"1"}}><img src={this.imgPath(data.technology)} className={classes.vendorLogo}/></div>
                            <div style={{flex:"6"}}>{dataConstants.usecaseNameMap[data.data[0].name]}</div>
                            <div style={{flex:1,textAlign:'right'}}>{data.data[0].score}%</div>
                            {/* <div>{data.data[0].count.low}</div> */}
                        </div>
                    ))}   
                </div>
                :
                <div style={loaderStyles}>
                    <FontAwesomeIcon icon={faSpinner} size="2x" spin />
                </div>
                }
            </div>
        )
    }
}

const loaderStyles = {
    display: "inline",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
}
export default Top5Usecase;
