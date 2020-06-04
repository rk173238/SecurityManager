import React from 'react';
import { withRouter } from 'react-router';
import ServerLocation from "./ServerLocation/ServerLocation";
import parentClass from '../OperationalTracks.css';
import Donut from './PeopleDonut/Donut';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import {cardTitle, cardIcon} from '../OperationalTracks.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {infoIconStyle, trendingUpIconStyle} from '../TechOperationalTracks/TechBar/TechBar';


const PeopleOperationalTracks=(props)=>(
  
  <div className={parentClass.cardsWrapper}>
    {/* Upper Card */}
    <div 
      style={{position:"relative"}} 
      className={parentClass.chartCards}
    >
      <div
        style={{
            position:"relative",
            borderBottom:"1px solid rgb(165,165,165)"
        }}
      >
        <FontAwesomeIcon 
            icon={faUserFriends} 
            className={cardIcon} 
        />
        <p className={cardTitle}> 
            People
        </p>
        <InfoIcon style={infoIconStyle} />
        <TrendingUpIcon 
            style={trendingUpIconStyle} 
            // onClick={() => this.props.clickedTrend('Efficiency')} 
        />
      </div>

      <div style={{display:'flex',height:"100%", paddingTop:"2%"}}>
        <Donut 
          radius={['70%' ,'90%']} 
          center={['50%','50%']} 
          propStyle={{width:'33%'}}
          data={{
            name:"Awareness", 
            color:"#fbff00",
            value:props.data['Training and Awareness'].score
          }} 
        />
        <Donut 
          radius={['70%' ,'90%']} 
          center={['50%','50%']} 
          propStyle={{width:'33%', position:"relative", top:"30%"}}
          data={{
            name:"InfoSec", 
            color:"red",
            value:props.data['Information Security'].score
          }} 
        />
        <Donut 
          radius={['70%' ,'90%']} 
          center={['50%','50%']} 
          propStyle={{width:'33%'}}
          data={{
            name:"Compliance", 
            color:"#fbff00",
            value:props.data['Compliance'].score
          }} 
        />
      </div>

    </div>
    
    {/* Lower Card */}
    <div className={parentClass.dataCards} onClick={()=>{props.history.push({pathname:'/home/report/clouddashboard/'})}}>
      <ServerLocation /> 
    </div>
  </div>
);

export default withRouter(PeopleOperationalTracks);
