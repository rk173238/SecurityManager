import React,{Component} from 'react';
import { Paper } from 'material-ui';
import Toggle from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import {Route,Redirect,Switch} from 'react-router';
import TechnologyView from './components/TechnologyView/TechnologyView';
import TechnologyTrends from './components/TechnologyTrends/TechnologyTrends';
import {analysisService} from '../../services';
import {scrollbar} from '../../commonfiles/scrollbar.css';
import SmcMap from './components/SmcMap/SmcMap'
class AnalysisPage extends Component{

    state={
        currentView:'smcmap',
        TechnologyTrendsData:{},
        showTechnologyTrends:false,
        technologiesData:'',
        allTechNames:[]
    }
    componentWillMount=()=>{
        analysisService.fetchAllTechnologyData().then(res=>{
            // this.setState({technologiesData:res})
            // console.log(filteredthis.props)
            if(this.props.location.pathname.split('/')[4]){
                var filtereddata=res.filter(res=>res.technology===this.props.location.pathname.split('/')[4])
                this.setState({TechnologyTrendsData:filtereddata[0],showTechnologyTrends:true})
                console.log(res)
            }

            let techNames = []
            res.map(data => {
                techNames.push(data.technology)
            })
            this.setState({allTechNames:techNames,technologiesData:res})
        })
        
    }
    changeView=(view)=>{
        if(view==='smcmap' || view==='technologyview'){  
            if(view==='smcmap' && this.state.currentView==='technologyview'){
                this.setState({currentView:'smcmap'})
                setTimeout(() => {
                    this.props.history.push({pathname:'/home/analysis/'+this.state.currentView})
                }, 1);
            }
            else if(view==='technologyview' && this.state.currentView==='smcmap'){
                this.setState({currentView:'technologyview'})
                setTimeout(() => {
                    this.props.history.push({pathname:'/home/analysis/'+this.state.currentView})
                }, 1);
            } 
        }
        else{
            if(this.state.currentView==='smcmap'){
                this.setState({currentView:'technologyview'})
            }
            else{
                this.setState({currentView:'smcmap'})
            }
            setTimeout(() => {
                this.props.history.push({pathname:'/home/analysis/'+this.state.currentView})
            }, 1);
        }     
    }
    // clickedTechnology=(data)=>{
    //     this.setState({TechnologyTrendsData:data,showTechnologyTrends:true})
    //     this.props.history.push({pathname:'/home/analysis/technologytrends/'+data.technology})
    // }
    
    // componentDidMount=()=>{
    //     // this.props.history.push({pathname:'/home/analysis/productview'})
    // }

    //Responsive Font Size
    reponsiveFont = window.matchMedia("(min-width: 768px)").matches ? "1.3vw" : "20px";

    render(){
        return(
            <div 
                className={scrollbar}
                id="analysisPage"
                style={{height:"100%", overflowY:"auto"}} 
            >
                {/* {console.log(this.state.TechnologyTrendsData)} */}
                {this.props.location.pathname.split('/')[3]!=='technologytrends'?
                <Paper style={{display:'flex',padding:"7px 0",backgroundColor:'rgba(255,255,255,0.1)', fontFamily:"inherit"}}>
                    <Typography style={{fontSize:this.reponsiveFont,fontWeight:400,color:'white',cursor:'pointer', paddingLeft:"10px", fontFamily:"inherit"}} onClick={()=>this.changeView('smcmap')}>SMC Map</Typography>
                    <Toggle style={{height:"inherit"}} checked={this.props.location.pathname.split('/')[3]==='technologyview'} onChange={this.changeView}></Toggle>
                    <Typography style={{fontSize:this.reponsiveFont,fontWeight:400,color:'white',cursor:'pointer', fontFamily:"inherit"}} onClick={()=>this.changeView('technologyview')}>Technology View</Typography>
                </Paper>
                :null}
                <Switch>
                    <Route 
                        exact 
                        path='/home/analysis/' 
                        render={()=>
                            <Redirect to='/home/analysis/smcmap/' />
                        }
                    />
                    <Route 
                        exact 
                        path='/home/analysis/smcmap/' 
                        render={()=>
                            <SmcMap />
                        }
                    />
                    <Route 
                        exact 
                        path='/home/analysis/technologyview/' 
                        render={()=>
                            <TechnologyView 
                                data={this.state.technologiesData} 
                                // clickedTechnology={this.clickedTechnology} 
                            />
                        }
                    />
                    <Route 
                        path='/home/analysis/technologytrends/' 
                        render={()=>(this.state.technologiesData?
                            <TechnologyTrends 
                                // TechnologyTrendsData={this.state.TechnologyTrendsData} 
                                allTechNames={this.state.allTechNames} 
                                technologiesData={this.state.technologiesData}
                            />:null)
                        } 
                    />
                </Switch>
                
            </div>
        )
    }
}

export default withRouter(AnalysisPage);