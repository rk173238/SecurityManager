import React from 'react';
import classes from '../UserPage.css';
import {dataConstants} from '../../../constants/data_constants';
import tickDone from '../../../assets/tickDone.png';
import {weightageService} from '../../../services/weightage_service';

class WeightageForm extends React.Component {

  state = {
    techValues: '',
    subValues: '',
    usecaseValues: ''
  }

  componentWillMount() {
    weightageService.getWeightage('tech').then(res => {
      this.setState({techValues: res.data.tech_weightage})
    })
    weightageService.getWeightage('subcat').then(res => {
      this.setState({subValues: res.data.subcat_weightage})
    })
    weightageService.getWeightage('usecase').then(res => {
      this.setState({usecaseValues: res.data.usecase_weightage})
    })
  }

  onValueChange = (el) => { 
    let d = this.state.data;
    d[el.target.name] = el.target.value;
    this.setState({data: d})
  }

  // onFormSubmit = (el) => {
  //   el.preventDefault();
  //   // var data = this.state.data;
  //   // data["time"] = new Date();
  //   let payload = {...this.state.data, time: new Date()}
  //   adminValuesService.setAdminValues(this.props.tabName, payload)
  //     .then((response) => {
  //       let el = document.getElementById("tickDone");
  //       el.style.visibility = "visible"
  //       // console.log("RESPONSE:::",response.status)
  //     })
  // }

  fieldsLoop() {
    var fields = []
    delete this.state.data.time
    Object.keys(this.state.data).map((key, i) => {
      fields.push(
        <li style={formField} key={i}>
            <label htmlFor={key} style={{flex:"2", cursor:"pointer"}}>
              {dataConstants.usecaseNameMap[key]}
            </label> 
            <input 
              className={classes.formInput} 
              type="text" 
              id={key} 
              name={key}
              value={this.state.data[key]} 
              onChange={this.onValueChange}
            />
        </li>
      )
    })
    return fields
  }

  render() {
    return (
      <React.Fragment>
        {this.state.usecaseValues && this.state.techValues && this.state.subValues?console.log("STATE",this.state):null}
        <form onSubmit={this.onFormSubmit}>
            <ul style={fieldGroup}>
            {/* {this.fieldsLoop()} */}
            </ul>
            <div style={{
                width:"30px",
                height:"40px", 
                float:"right", 
                backgroundImage:"url("+tickDone+")",
                backgroundSize:"cover",
                visibility: "hidden"
            }} id={"tickDone"}></div>
            <button type="submit" style={submitButton}>
              Submit
            </button>
        </form>
      </React.Fragment>
    )
  }
}

const fieldGroup = {
  listStyleType:"none", 
  padding:"0", 
  margin:"0"
}

const formField = {
  display: "flex",
  justifyContent:"space-between",
  margin: "0 0 20px 0",
  padding: "5px 0"
}

const submitButton = {
  color: "white",
  float: "right",
  border: "1px solid #000000",
  background: "transparent",
  padding: "10px 50px",
  cursor: "pointer",
  font: "inherit",
  borderRadius: "5px",
  backgroundImage: "linear-gradient(to bottom, #005794, #000000bf)",
}
export default WeightageForm