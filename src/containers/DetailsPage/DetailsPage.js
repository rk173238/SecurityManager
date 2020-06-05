import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import classes from './DetailsPage.css';
import MainTabs from './components/MainTabs/MainTabs';
import { withRouter } from 'react-router';
import {fadeInAnimation} from '../../commonfiles/animations.css'

class DetailsPage extends Component{
  constructor(props){
    super(props);
    this.state={
      devices:false,
      newData:'',
      hover:false,
      tech:'',
      showTechDetails:{
        showRisk:false,
        showReliability:false,
        showEfficiency:false
      },
      fadeIn: ''
    }
  }
  hoverOn= (tech)=>{
    this.setState({ hover: true,tech:tech });
  }
  hoverOff= ()=>{ 
    this.setState({ hover: false,tech:'' });    
  }
  // static getDerivedStateFromProps(nextProps,prevState){
  //   if(nextProps.newData.length!==0){
      
  //       return {
  //         newData:nextProps.newData
  //       }
  //   }
  //   else{
  //     return prevState;
  //   }
  // }
  componentWillReceiveProps=(props)=>{
    this.setState({newData:props})
  }
  handleActive=(tab)=> {
    this.props.history.push({pathname:''+tab.props['data-route']})
  }
  handleActiveDevice=(tab)=> {
    this.props.history.push({pathname:this.props.match.url,search:this.props.location.search.split('&')[0]+'&'+tab.props['data-route']})
  }
  techClick=(name)=>{
    let showTechDetails=this.state.showTechDetails
    showTechDetails.showRisk=false
    showTechDetails.showReliability=false
    showTechDetails.showEfficiency=false
    showTechDetails['show'+name]=true
    this.setState({showTechDetails:showTechDetails})
    // consolse.log(this.state.showTechDetails)
  }

  componentWillMount() {
    this.setState({fadeIn: fadeInAnimation})
  }

  render(){
    return (
      
      <div className={classes.flexContainer + ' ' + this.state.fadeIn}>
        
        <MainTabs 
          active={this.handleActive}
          techScoreData={dummyTechData}
          // peopleScoreData={this.props.newData['People']}
          processScoreData={dummyProcessData}
          techClick={this.techClick}
          />
      </div>
    );
  }
}
export default withRouter(DetailsPage);
let dummyTechData={
  'Operational Risk':{
    score:60,
    
    sub_categories:{
      "Baseline Configuration":40,
      // "Repetitive Issues":40,
      "Attack Surface":40,
      "Critical Configuration":40,
      "Version and Patch":40,
      "Insider Threats":40,
    },
    changes:{
      "Baseline Configuration":0,
      // "Repetitive Issues":10,
      "Attack Surface":0,
      "Critical Configuration":-5,
      "Version and Patch":0,
      "Insider Threats":0,
    }
  },
  'Operational Reliability':{
    score:80,
    sub_categories:{
      "Service Availability":60,
      "Service Performance":40,
      "Device Inventory":100,
      "Persistent Issues":20,
      // "Capacity Management":50
    },
    changes:{
      "Service Availability":0,
      "Service Performance":0,
      "Device Inventory":0,
      "Persistent Issues":0,
      // "Capacity Management":0
    }
  },
  'OPerational Efficiency':{
    score:30,
    sub_categories:{
      // "Protection Readiness":70,
      "Service SLA":80,
      "Availability of Artifacts":60,
      "Improvement in Service":20,
      // "Service Back Logs":60,
      // "Resolution Effectiveness":90
    },
    changes:{
      // "Protection Readiness":0,
      "Service SLA":0,
      "Availability of Artifacts":0,
      "Improvement in Service":10,
      // "Service Back Logs":0,
      // "Resolution Effectiveness":0
    }
  },
}
let dummyPeopleData={
  Management:{
    score:40,
    sub_categories:{
      "IT Assets Management":40,
      "Access Management":40,
      "Bussiness Continuity":30,
    },
    changes:{
      "IT Assets Management":0,
      "Access Management":0,
      "Bussiness Continuity":0,
    }
  },
  Governance:{
    score:40,
    sub_categories:{
      'Security Monitoring':30,
      'Third Party Security':40,
      'Compliance Management':20,
      'Budget':80,
      'Cyber Insurance':60,
      'Control Testing':50,
    },
    changes:{
      'Security Monitoring':30,
      'Third Party Security':40,
      'Compliance Management':20,
      'Budget':80,
      'Cyber Insurance':60,
      'Control Testing':50,
    }
  },
  Framework:{
    score:40,
    sub_categories:{
      'Information Security Policy':40,
      'Security Incident':30,
    },
    changes:{
      'Information Security Policy':40,
      'Security Incident':30,
    }
  },
}
let dummyProcessData={
  Management:{
    score:40,
    sub_categories:{
      "IT Assets Management":40,
      "Access Management":40,
      "Bussiness Continuity":30,
    },
    changes:{
      "IT Assets Management":0,
      "Access Management":0,
      "Bussiness Continuity":0,
    }
  },
  Governance:{
    score:40,
    sub_categories:{
      'Security Monitoring':30,
      'Third Party Security':40,
      'Compliance Management':20,
      'Budget':80,
      'Cyber Insurance':60,
      'Control Testing':50,
    },
    changes:{
      'Security Monitoring':30,
      'Third Party Security':40,
      'Compliance Management':20,
      'Budget':80,
      'Cyber Insurance':60,
      'Control Testing':50,
    }
  },
  Framework:{
    score:40,
    sub_categories:{
      'Information Security Policy':40,
      'Security Incident':30,
    },
    changes:{
      'Information Security Policy':40,
      'Security Incident':30,
    }
  },
}