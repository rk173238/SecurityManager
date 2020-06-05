import React from 'react';
import cssClasses from './LoginCard.css';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import InputFields from '../InputFields/InputFields';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import {dataConstants} from '../../../../constants';
const LoginCard=(props)=>(
  <div className={cssClasses.loginCard} >

    <img src={require("../../../../assets/sideImage.png")} alt='logo' className={cssClasses.userLoginImage}/>
  <form name="form" onSubmit={props.handleSubmit} autoComplete='off'>

      <InputFields handleChange={props.handleChange} alertMessage={props.alertMessage} username={props.username} password={props.password} submitted={props.submitted}/>
      {/* <a className={cssClasses.forgotPassword} href="/">Forgot password?</a> */}
      <RaisedButton type="submit" label="login" className={cssClasses.loginBtn} />
      <p style={{marginTop:"-10px"}}>Copyright © 2020 | Powered by Wipro Ltd</p>
      {/* {props.loggingIn &&
        <img alt='none' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      } */}
    </form>
    {props.alertMessage && <div className={cssClasses.helpBlock}>{props.alertMessage}</div>}
  </div>
);
export default LoginCard;
/*
<div className={cssClasses.dateSection}>
      <div className={cssClasses.dateBanner}>
        <SelectField  value={props.locationValue}
                      onChange={props.handleLocationChange}
                      autoWidth={false}
                      className={cssClasses.timeQuadrant}
                      floatingLabelFixed={true}
                      floatingLabelText='Location'
                      floatingLabelStyle={{top: '62.7%',left: 0, color:'rgba(255, 255, 255, 0.48)'}}
                      labelStyle={{color:'#fff',top:9,textAlign: 'left'}}
                      >
          <MenuItem value={"None"} label="None" primaryText="None" />
          {dataConstants.locationList.map((loc,i)=>(
            <MenuItem key={i} value={loc} label={loc} primaryText={loc}/>
          ))}
        </SelectField>
        {props.submitted && !props.locationValue &&<FormHelperText className={cssClasses.helpBlock}>Location is required</FormHelperText>}
      </div>
    </div>
*/
