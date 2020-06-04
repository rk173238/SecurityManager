import React, {Component} from 'react';
import $ from 'jquery';
import classes from '../../UserPage.css';
import tickDone from '../../../../assets/tickDone.png';
import {weightageService} from '../../../../services/weightage_service';
/* 
  To disable form fields based on Admin bool, 4 checks are required:
  1. In onFormSubmit() function
  2. In the <input> disabled attribute
  3. In form onSubmit() event
  4. In form submit button
*/
class TechWeightage extends Component {

  state = {
    data: '',
  }

  componentWillMount() {
    weightageService.getWeightage('tech').then(res => {
      this.setState({data: res.data.tech_weightage})
    })
  }

  onValueChange = (el) => { 
    let d = this.state.data;
    d[el.target.name] = parseFloat(el.target.value) || 0;
    this.setState({data: d})
  }

  onFormSubmit = (el) => {
    el.preventDefault();
    if (JSON.parse(sessionStorage.user).admin){
      let payload = {time: new Date(), tech_weightage: this.state.data}
      weightageService.setWeightage("tech", payload)
        .then((response) => {
          console.log("RESPONSE:::",response.status)
          let el = document.getElementById("tickDoneTech");
          el.style.visibility = "visible";
          setTimeout(()=>{
            $("#tickDoneTech").animate({opacity:0})
          }, 1000)
        })
    }
  }

  fieldsLoop() {
    var fields = []
    Object.keys(this.state.data).map((key, i) => {
      fields.push(
        <li className={classes.formField} key={i}>
            <label htmlFor={key} className={classes.formLabel}>
              {/* {dataConstants.usecaseNameMap[key]} */}
              {key}
            </label> 
            <input 
              className={classes.formInput} 
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
          {/* {console.log("techdata",this.state.data)} */}
        {this.state.data?
        <form onSubmit={JSON.parse(sessionStorage.user).admin?this.onFormSubmit:null}>
            <ul className={classes.fieldGroup}>
            {this.fieldsLoop()}
            </ul>
            <div style={{
                width:"30px",
                height:"40px", 
                float:"right", 
                backgroundImage:"url("+tickDone+")",
                backgroundSize:"cover",
                visibility: "hidden"
            }} id={"tickDoneTech"}></div>

            {JSON.parse(sessionStorage.user).admin?
            <button type="submit" className={classes.submitButton}>
              Submit
            </button>
            :null}

        </form>
        :<p>LOADING</p>}
      </React.Fragment>
    )
  }
}
export default TechWeightage