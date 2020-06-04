import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputField from '../InputField/InputField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {dataConstants} from '../../../../constants'
const UseCaseConfig=(props)=>{
  return (
    <div style={{width:'100%',padding:10}}>
      {props.data.map((tech,t)=>tech.useCases.length!==0?(
          <div key={t} style={{width:'100%',padding:10}}>
            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{fill:'#fff'}}/>} style={{backgroundColor:'#2c3e50',color:'#fff',height:48,minHeight:48}}>
                <Typography style={{color:'#fff'}}>{tech.technology==='Performance'?'Solarwinds':tech.technology}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff',display: 'block'}}>
                <List >
                {tech.useCases.map((useCases,i)=>(
                  <ListItem key={i}>
                    <ListItemText style={{width: 'max-content',
                    padding: '0 80px 0 0', color:'#fff'}}>
                      <Typography style={{width: 'max-content',padding: '0 80px 0 0', color:'#fff'}}>{useCases.ucName}</Typography>
                    </ListItemText>
                      <InputField type='number'
                                  disabled={props.state['validUseCase'+t]}
                                  name={dataConstants.useCaseFieldMapFull.find(u=>u.use_case===useCases.ucName)?dataConstants.useCaseFieldMapFull.find(u=>u.use_case===useCases.ucName).use_case_field:useCases.ucName}
                                  onChange = {props.onChangeUseCaseWeightage.bind(this,dataConstants.useCaseFieldMapFull.find(u=>u.use_case===useCases.ucName)?dataConstants.useCaseFieldMapFull.find(u=>u.use_case===useCases.ucName).use_case_field:useCases.ucName,tech.technology)}
                                  placeholder={"Weightage"}
                                  value={props.state.useCaseWeightageList.find(t=>
                                            Object.keys(t).includes(tech.technology))[tech.technology].find(uc=>
                                              Object.keys(uc).includes(dataConstants.useCaseFieldMapFull.find(u=>u.use_case===useCases.ucName).use_case_field))[dataConstants.useCaseFieldMapFull.find(u=>u.use_case===useCases.ucName).use_case_field]}
                                  />
                  </ListItem>
                ))}
                <div style={{width:'100%',textAlign:'right'}}>
                  <Button onClick={props.handleUseCaseWeightageValidate.bind(this,t,tech.technology)}
                          disabled={props.state['validUseCase'+t]}
                          variant="contained">Validate</Button>
                  {props.state.errorUseCase?<p>Sum Should be 100</p>:null}
                </div>
                </List>
              </ExpansionPanelDetails>
              </ExpansionPanel>
              </div>
      ):null)}
    </div>

  )
}
export default UseCaseConfig;
//<ListItem ><ListItemText>{useCaseName+' : '+whatIsIt(data[0][key].data)}</ListItemText></ListItem>
