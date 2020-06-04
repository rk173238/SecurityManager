import React,{Component} from 'react';
import TechBar from './TechBar/TechBar';
import { withRouter } from 'react-router';
import Top5Usecase from './Top5Usecase/Top5Usecase';
import parentClass from '../OperationalTracks.css';


class  TechOperationalTracks extends Component{
  onTechClickHandler=(a)=>{
    // console.log('teoptrack',a)
  }
  render(){
    
    return(
      <div className={parentClass.cardsWrapper}>
        <TechBar data={this.props.data} id='tech' onTechClickHandler={this.props.onTechClickHandler} clickedTrend={this.props.clickedTrend}></TechBar>
        <div className={parentClass.dataCards} onClick={()=>{this.props.history.push({pathname:'/home/details/technology/scoredetails'})}}>
          <Top5Usecase></Top5Usecase>
        </div>
    </div>
    )
  }
  
}

export default withRouter(TechOperationalTracks);
