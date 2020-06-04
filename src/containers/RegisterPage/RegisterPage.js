import classes from './RegisterPage.css';
import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {dataConstants} from '../../constants'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
export default class RegisterPage extends Component{
  constructor(props){
    super(props);
    this.state={
      newData:[],
      techValue:0,
      devValue:0,
      devList:['None'],
      lineData:[],
      weightage:[]
    }
  }
  render(){
    return(
      <Paper className={classes.flexContainer}>
        <h1>Log In</h1>
        <div className={classes.dateSection}>
            <div className={classes.dateBanner}>
              <SelectField  value={this.state.techValue}
                            onChange={()=>{}}
                            autoWidth={false}
                            className={classes.timeQuadrant}
                            floatingLabelFixed={true}
                            floatingLabelText='Technology'
                            floatingLabelStyle={{top: '62.7%',left: 0, color:'rgba(255, 255, 255, 0.48)'}}
                            labelStyle={{color:'#fff',top:9,textAlign: 'left'}}
                            >
                {dataConstants.technologyList.sort().map((t,i)=>(<MenuItem key={i} value={i+1} label={t} primaryText={t} />))}
              </SelectField>
              <br/>
              <SelectField  value={this.state.devValue}
                            onChange={()=>{}}
                            autoWidth={false}
                            className={classes.timeQuadrant1}
                            floatingLabelFixed={true}
                            floatingLabelText='Device'
                            floatingLabelStyle={{top: '62.7%',left: 0, color:'rgba(255, 255, 255, 0.48)'}}
                            labelStyle={{color:'#fff',top:9,textAlign: 'left'}}
                            >
                <MenuItem key={0} value={0} label={'None'} primaryText={'None'} />
              </SelectField>
            </div>
            <br/>
            <hr/>
          </div>
      </Paper>
    );
  }
}
