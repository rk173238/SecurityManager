import React from 'react';
import ProcessBar from './ProcessBar/ProcessBar';
import { withRouter } from 'react-router';
import DataSecChart from './DataSecChart/DataSecChart';
import parentClass from '../OperationalTracks.css';

class ProcessOperationalTracks extends React.Component {
  render(){
    return (
      <div className={parentClass.cardsWrapper}>
        <ProcessBar id='process' onTechClickHandler={this.props.onTechClickHandler} clickedTrend={this.props.clickedTrend}></ProcessBar>
        <div className={parentClass.dataCards} onClick={()=>{this.props.history.push({pathname:'/home/details/process/scoredetails'})}}>
          <DataSecChart />
        </div>
      </div>
    )
  }
  
}

export default withRouter(ProcessOperationalTracks);
