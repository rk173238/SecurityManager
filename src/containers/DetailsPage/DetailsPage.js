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
        {this.props.newData?
        <MainTabs 
          active={this.handleActive}
          techScoreData={this.props.newData['Technology']}
          peopleScoreData={this.props.newData['People']}
          processScoreData={this.props.newData['Process']}
          techClick={this.techClick}
          />:null}
      </div>
    );
  }
}
export default withRouter(DetailsPage);
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