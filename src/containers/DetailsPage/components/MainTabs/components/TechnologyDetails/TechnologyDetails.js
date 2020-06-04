import React,{Component,Fragment} from 'react'
import Paper from 'material-ui/Paper';
import classes from './TechnologyDetails.css'
import TechnologiesWithUsecases from '../TechnologiesWithUsecases/TechnologiesWithUsecases'
import TechnologyTracker from '../../../../../../common-components/TechnologyTracker/NewTechnologyTracker'
import GroupedUsecasesBarChart from '../../../../../../common-components/GroupedUsecasesBarChart/GroupedUsecasesBarChart'
import DeviceList from '../../../../../../common-components/DeviceList/DeviceList'
import UseCases from '../../../../../../common-components/UseCases/Usecases';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {scrollbar} from '../../../../../../commonfiles/scrollbar.css';

class TechnologyDetails extends Component{

  state={
    showTechOnTracker:'',
    showDeviceList:false,
    selectedUsecase:'',
    usecaseProperty:{},
    usecaseScore:0,
    technologyScore:0
  }
  myRef = React.createRef();
  showTechOnTracker=(tech)=>{
    this.setState({showTechOnTracker:tech,technologyScore:this.props.subCategoryData[tech].score})
    // console.log(tech)
  }
  showDeviceList=(tech,usecase,score)=>{
    // console.log(usecase)
    this.setState(
      {showTechOnTracker:tech,
      selectedUsecase:usecase,
      showDeviceList:true,
      usecaseProperty:usecase,
      usecaseScore:score,
      technologyScore:this.props.subCategoryData[tech].score
    })
  }
  


    render(){
        return(
          <Fragment>
            <Row style={{height:"100%"}} noGutters>
              <Col md={2} style={{backgroundColor:'transparent',}}>
                <TechnologyTracker 
                  choosenSubCategory={this.props.choosenSubCategory} 
                  showTechOnTracker={this.state.showTechOnTracker} 
                  technologyScore={this.state.technologyScore} />
              </Col>
              <Col md={10} 
                   className={classes.technologySection + ' ' + scrollbar} 
                   style={{backgroundColor:'transparent',boxShadow: "-1px 0 10px #0000007a"}}>
                {this.state.showTechOnTracker?
                    this.state.showDeviceList && this.state.selectedUsecase?
                      <div>
                        <DeviceList 
                          techName={this.state.showTechOnTracker} 
                          usecase={this.state.selectedUsecase} 
                          usecaseScore={this.state.usecaseScore} />
                      </div>
                      :
                      <div>
                        {/* <GroupedUsecasesBarChart technology={this.state.showTechOnTracker}  showDeviceList={this.showDeviceList}></GroupedUsecasesBarChart> */}
                        No Content
                      </div>
                  :
                  <div className={classes.technologieswithusecases} >
                    <TechnologiesWithUsecases 
                      choosenSubCategory={this.props.choosenSubCategory} 
                      showDeviceList={this.showDeviceList} 
                      showTechOnTracker={this.showTechOnTracker} 
                      // processSubcatData={processdummyUsecase[this.props.choosenSubCategory.split('_')[2]]}
                      />
                  </div>
                }
              </Col>
            </Row>
          </Fragment>
            // <Fragment>
            //   <div style={{display:'flex'}}>
            //     <Paper style={{width:'20%',backgroundColor:'transparent',}}>
            //       <TechnologyTracker choosenSubCategory={this.props.choosenSubCategory} showTechOnTracker={this.state.showTechOnTracker} technologyScore={this.state.technologyScore}></TechnologyTracker>
            //     </Paper>
            //     <Paper className={classes.technologySection} style={{backgroundColor:'transparent'}}>
            //       {this.state.showTechOnTracker?
            //           this.state.showDeviceList && this.state.selectedUsecase?
            //             <Paper style={{backgroundColor:'transparent'}}>
                         
            //               <DeviceList techName={this.state.showTechOnTracker} usecase={this.state.selectedUsecase} usecaseScore={this.state.usecaseScore}></DeviceList>
            //             </Paper>
            //             :
            //             <Paper style={{backgroundColor:'transparent'}}>
            //               {/* <GroupedUsecasesBarChart technology={this.state.showTechOnTracker}  showDeviceList={this.showDeviceList}></GroupedUsecasesBarChart> */}
            //             tttttttttttttttttttt
            //             </Paper>
            //         :
            //         <Paper className={classes.technologieswithusecases} style={{backgroundColor:'transparent'}}>
            //           <TechnologiesWithUsecases choosenSubCategory={this.props.choosenSubCategory} showDeviceList={this.showDeviceList} showTechOnTracker={this.showTechOnTracker}></TechnologiesWithUsecases>
            //         </Paper>
            //       }

            //     </Paper>
                
            //   </div>
            // </Fragment>
        )
    }
}
const mapStateToProps=state=>{
  // console.log(state)
  return{
    subCategoryData:state.fetchSubCategoryData.subCategoryData,
  }
}

export default connect(mapStateToProps)(TechnologyDetails);

let processdummyUsecase={
  // Management
  "IT Assets Management":{
    "IT Assets Management":{
    'score':50,
    'usecases':{
      'asset_management_policy':40,
      'asset_non_compliance':40,
    }}
  },
  "Access Management":{
    "Access Management":{
    'score':50,
    'usecases':{
      'average_time':40,
      'user_ids':40,
      'privileged_user':40,
      'idle_user':40,
      'critical_system_review':40,
      'anomalies_detected':40,
      'new_user_id':40,
    }}
  },
  "Bussiness Continuity":{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  //Governance
  'Security Monitoring':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Third Party Security':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Compliance Management':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Budget':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Cyber Insurance':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Control Testing':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  //Framework
  'Information Security Policy':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Security Incident':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
}