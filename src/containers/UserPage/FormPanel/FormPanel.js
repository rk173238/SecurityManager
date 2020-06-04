import React from 'react';
import $ from 'jquery';
import formClasses from '../UserPage.css';
import {dataConstants} from '../../../constants/data_constants';
import {adminValuesService} from '../../../services/admin_center_service';
import tickDone from '../../../assets/tickDone.png';

class FormPanel extends React.Component {

  state = {
    data: ''
  }

  componentWillMount() {
    adminValuesService.getAdminValues(this.props.tabName).then(res => {
      this.setState({data: res.data})
    })
  }

  onValueChange = (el) => { 
    let d = this.state.data;
    d[el.target.name] = el.target.value;
    this.setState({data: d})
  }

  onFormSubmit = (el) => {
    el.preventDefault();
    if (JSON.parse(sessionStorage.user).admin){
      // var data = this.state.data;
      // data["time"] = new Date();
      let payload = {...this.state.data, time: new Date()}
      adminValuesService.setAdminValues(this.props.tabName, payload)
        .then((response) => {
          console.log("RESPONSE:::",response.status)
          let el = document.getElementById("tick"+this.props.tabName);
          el.style.visibility = "visible";
          setTimeout(()=>{
            $("#tick"+this.props.tabName).animate({opacity:0})
          }, 1000)
        })
    }
  }

  fieldsLoop() {
    var fields = []
    delete this.state.data.time
    Object.keys(this.state.data).map((key, i) => {
      fields.push(
        <li className={formClasses.formField} key={i}>
            <label htmlFor={key} className={formClasses.formLabel}>
              {dataConstants.usecaseNameMap[key]}
            </label> 
            <input 
              className={formClasses.formInput} 
              type="text" 
              id={key} 
              name={key}
              value={this.state.data[key]} 
              onChange={this.onValueChange}
              disabled={!JSON.parse(sessionStorage.user).admin}
            />
        </li>
      )
    })
    return fields
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={JSON.parse(sessionStorage.user).admin?this.onFormSubmit:null}>
            <ul className={formClasses.fieldGroup}>
            {this.fieldsLoop()}
            </ul>
            <div style={{
                width:"30px",
                height:"40px", 
                float:"right", 
                backgroundImage:"url("+tickDone+")",
                backgroundSize:"cover",
                visibility: "hidden"
            }} id={"tick"+this.props.tabName}></div>

            {JSON.parse(sessionStorage.user).admin?
            <button type="submit" className={formClasses.submitButton}>
              Submit
            </button>
            :null}
            
        </form>
      </React.Fragment>
    )
  }
}
export default FormPanel