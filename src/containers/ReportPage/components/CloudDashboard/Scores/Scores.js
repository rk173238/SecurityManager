import React,{Component} from 'react'
import { Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CloudDashboard from '../CloudDashboard';
import classes from '../../CommonComponents/ScoreBoxes/ScoreBoxes.css';
import {Row, Col} from 'react-bootstrap';

class Scores extends Component{

    render(){
        return(
            <React.Fragment>
                <Col md={6} style={{marginBottom:"10px"}}>
                 <div style={{width:"48%",height:"100%",float:"left",position:"relative",marginRight:"2%",display:'flex',justifyContent: 'space-between',backgroundColor:'#3b9bd8',padding:10,textShadow:'1px 1px 3px black'}}>
                    <CloudQueueIcon className={classes.crossTickIcon} style={{fontSize:"80px",color:'rgba(255,255,255,0.4)'}}></CloudQueueIcon>
                    <div style={{position:"absolute", right:'3%',fontSize:22}}>
                        <div style={{display: 'flex',justifyContent: 'space-between'}}>
                            <div>EC2</div>
                            <div>67</div>
                        </div>
                        <div style={{display: 'flex',justifyContent: 'space-between',marginTop:10}}>
                            <div>S3</div>
                            <div>67</div>
                        </div>
                    </div>  
                 </div>
                 <div style={{width:"48%", display:'flex',justifyContent:'space-between',backgroundColor:this.props.encryptionScore<70?'#e63c3c':'rgba(42, 187, 67, 1)',padding:10,textShadow:'1px 1px 3px black'}}>
                     <div style={{marginLeft:'1%'}}>
                         {this.props.encryptionScore<70?
                         <CloseIcon className={classes.crossTickIcon} style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                         <CheckIcon className={classes.crossTickIcon} style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                     </div>
                    <div style={{marginRight:'1%'}}>
                        <div className={classes.techName}>Encryption</div>
                        <div style={{display:'flex'}}>
                            {/* {console.log(this.props.encryptionScore)} */}
                           <p style={{fontSize:15,color:'white',lineHeight:"45px",marginBottom:8}}>({this.props.encryptionLow})</p>
                            <p className={classes.score}>{this.props.encryptionScore}%</p>
                       </div>
                        {/* <p style={{fontSize:20,color:'white',marginTop:-5}}>Passed</p> */}
                   </div>
                </div>
                </Col>
                <Col md={6}>
                <div style={{width:"48%",float:"left",display:'flex',marginRight:"2%",justifyContent:'space-between',backgroundColor:this.props.storageScore<70?'#e63c3c':'rgba(42, 187, 67, 1)',padding:10,textShadow:'1px 1px 3px black'}}>
                     <div style={{marginLeft:'1%'}}>
                         {this.props.storageScore<70?
                         <CloseIcon className={classes.crossTickIcon} style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                         <CheckIcon className={classes.crossTickIcon} style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                     </div>
                     <div style={{marginRight:'1%'}}>
                         <div className={classes.techName}>Storage</div>
                         <div style={{display:'flex'}}>
                           <p style={{fontSize:15,color:'white',lineHeight:"45px",marginBottom:8}}>({this.props.storageLow})</p>
                            <p className={classes.score}>{this.props.storageScore}%</p>
                         </div>
                         {/* <p style={{fontSize:20,color:'white',marginTop:-5}}>Failed</p> */}
                     </div>
                </div>
                <div style={{width:"48%",display:'flex',justifyContent:'space-between',backgroundColor:this.props.monitoringScore<70?'#e63c3c':'rgba(42, 187, 67, 1)',padding:10,textShadow:'1px 1px 3px black'}}>
                     <div style={{marginLeft:'1%'}}>
                     {this.props.monitoringScore<70?
                         <CloseIcon className={classes.crossTickIcon} style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                         <CheckIcon className={classes.crossTickIcon} style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                    </div>
                    <div style={{marginRight:'1%'}}>
                        <div className={classes.techName}>Monitoring</div>
                        <div style={{display:'flex'}}>
                           <p style={{fontSize:15,color:'white',lineHeight:"45px",marginBottom:8}}>({this.props.monitoringLow})</p>
                            <p className={classes.score}>{this.props.monitoringScore}%</p>
                         </div>
                        {/* <p style={{fontSize:20,color:'white',marginTop:-5}}>Error</p> */}
                    </div> 
                 </div>
                 </Col>
              </React.Fragment>
        )
    }
}
export default Scores;