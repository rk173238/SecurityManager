import React,{Fragment,Component} from 'react';
import classes from './UseCases.css';
import parentClass from '../OverallScores/OverAllScores.css';
import UseCaseBar from '../echarts/UseCaseBar/UseCaseBar'
import {dataService} from '../../services'
import $ from 'jquery';



class UseCases extends Component{
    
  state={
    usecaseData:null
  }
  scrollLeft=(id)=>{
    $('#div'+this.props.technology).animate({"scrollLeft": "-=200%"},750);
  }
  scrollRight=(id)=>{
    $('#div'+this.props.technology).animate({"scrollLeft": "+=200%"},750);
  }
  componentWillMount=()=>{
    this._isMounted = true;
    // console.log(this.props,"Usecase.js")
    // if(this.props.type!=='Process'){
    // var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
    // dataService.fetchTechnologyData(this.props.technology,Object.keys(this.props.usecaseData),dateRange,true).then(res=>{
    //   console.log(res)
    //   this.setState({usecaseData:res})
    // },e=>console.log(e))
    // }
    // else{
    //   this.setState({usecaseData:processDummyUsecaseBar[this.props.technology]})
    // }
  }
  
  render(){
    return (
      <div 
        id={'div'+this.props.technology} 
        className={classes.usecasesWrapper} 
        ref={ (usecaseWrapper) => { this.usecaseWrapper = usecaseWrapper } }
      >   
        <div style={{display:"flex"}}>
          {/* {console.log(this.props)} */}
          {
          Object.keys(this.props.usecaseData).map((usecase,i)=>(
            <UseCaseBar key={usecase} id={this.props.technology.split(' ')[0]+usecase} showDeviceList={this.props.showDeviceList}
                technology={this.props.technology} name={usecase}
                score={this.props.usecaseData[usecase]} type={this.props.type} techScore={this.props.techScore}></UseCaseBar>
          ))
          }
        </div>
        
        {this.state.usecaseData?(this.state.usecaseData.data.length>4?
          <a className={parentClass.navLeft} onClick={this.scrollLeft}>&#60;</a>:null):null}
        {this.state.usecaseData?(this.state.usecaseData.data.length>4?
          <a className={parentClass.navRight} onClick={this.scrollRight}>&#62;</a>:null):null}
    </div>
   
    );
  }
  
 
};

export default UseCases;

let processDummyUsecaseBar={
  "IT Assets Management":{
    'technology':'IT-Assets-Management',
      data:[
      {
        name:'asset_management_policy',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
      {
        name:'asset_non_compliance',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Access Management":{
    'technology':'Access-Management',
      data:[
      {
        name:'idle_users',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
      {
        name:'average_time',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
      {
        name:'user_id',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
      {
        name:'privileged_user',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
      {
        name:'critical_system_review',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
      {
        name:'anamolies_detected',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
      {
        name:'new_privileged',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      },
    ]
  },

  "Bussiness Continuity":{
    'technology':'Bussiness-Continuity',
      data:[
      {
        name:'risk_assessment',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Security Monitoring":{
    'technology':'Security-Monitoring',
      data:[
      {
        name:'security_monitoring_process',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Third Party Security":{
    'technology':'Third Party Security',
      data:[
      {
        name:'third_party_access_security',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Compliance Management":{
    'technology':'Compliance Management',
      data:[
      {
        name:'gdpr',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Budget":{
    'technology':'budget',
      data:[
      {
        name:'is_budget_variance',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Cyber Insurance":{
    'technology':'Cyber-Insurance',
      data:[
      {
        name:'insurance',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Control Testing":{
    'technology':'Control-Testing',
      data:[
      {
        name:'mandatory_audits_completed',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Security Incident":{
    'technology':'security-incident',
      data:[
      {
        name:'availability_of_framework',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

  "Information Security Policy":{
    'technology':'information-security-policy',
      data:[
      {
        name:'working_policies',
        score:100,
        count:{
          low:50,
          medium:40,
          critical:10,
        }
      }
    ]
  },

}
