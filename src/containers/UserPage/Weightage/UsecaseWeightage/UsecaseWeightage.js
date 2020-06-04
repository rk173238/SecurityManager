import React, {Component} from 'react';
import $ from 'jquery';
import classes from '../../UserPage.css';
import tickDone from '../../../../assets/tickDone.png';
import {weightageService} from '../../../../services/weightage_service';

class UsecaseWeightage extends Component {

  state = {
    data: '',
  }

  componentWillMount() {
    weightageService.getWeightage('usecase').then(res => {
      this.setState({data: res.data.usecase_weightage})
    })
  }

    transformName = (name) => {
        let nameList = name.split("_")
        let newName = ''
        for(let i=0; i<nameList.length; i++){
            newName += nameList[i].charAt(0).toUpperCase() + nameList[i].slice(1) + ' '
        }
        return newName
    }

  onValueChange = (el) => { 
    let d = this.state.data;
    d[el.target.getAttribute('subcatname')][el.target.name] = parseFloat(el.target.value);
    this.setState({data: d})
  }

  onFormSubmit = (el) => {
    el.preventDefault();
    if (JSON.parse(sessionStorage.user).admin){
      let payload = {time: new Date(), usecase_weightage: this.state.data}
      weightageService.setWeightage("usecase", payload)
        .then((response) => {
          console.log("RESPONSE:::",response.status)
          let el = document.getElementById("tickDoneUsecase");
          el.style.visibility = "visible";
          setTimeout(()=>{
            $("#tickDoneUsecase").animate({opacity:0})
          }, 1000)
        })
    }
  }

  fieldsLoop(subCatName, subCatData) {
    // console.log("SUBCAT:::",this.state.data?this.state.data:null)
    // console.log("SPEEED",subcat)
    var fields = []
    Object.keys(subCatData).map((key, i) => {
        // console.log("PPEEDS",key, subCatData[key])
      fields.push(
        <li className={classes.formField} key={i}>
            <label htmlFor={key} style={{flex:"2", cursor:"pointer", marginBottom:0}}>
              {this.transformName(key)}
            </label> 
            <input 
              className={classes.formInput} 
              type="text" 
              id={key} 
              name={key}
              value={subCatData[key]} 
              onChange={this.onValueChange}
              subcatname={subCatName}
              disabled={!JSON.parse(sessionStorage.user).admin}
            />
        </li>
      )
    })
    return fields
  }

  showUsecasePanel = (i) => {
    let panelState = document.getElementById("usecasePanel"+i).style.display;
    if (panelState === "none") {
        document.getElementById("usecasePanel"+i).style.display = "block";
        document.getElementById("usecaseToggleSign"+i).innerHTML = "-"
    } else {
        document.getElementById("usecasePanel"+i).style.display = "none";
        document.getElementById("usecaseToggleSign"+i).innerHTML = "+"
    }
  }

  expandAll = () => {
    for (let i=0; i < Object.keys(this.state.data).length; i++) {
      document.getElementById("usecasePanel"+i).style.display = "block";
      document.getElementById("usecaseToggleSign"+i).innerHTML = "-";
    }
  }
  collapseAll = () => {
    for (let i=0; i < Object.keys(this.state.data).length; i++) {
      document.getElementById("usecasePanel"+i).style.display = "none";
      document.getElementById("usecaseToggleSign"+i).innerHTML = "+";
    }
  }

  render() {
    return (
      <React.Fragment>
          {this.state.data?
        (<form onSubmit={JSON.parse(sessionStorage.user).admin?this.onFormSubmit:null}>
            <div>
              <div style={allToggle}>
                <span onClick={this.expandAll}>Expand All</span>
                <span style={toggleSeparator}>|</span>
                <span onClick={this.collapseAll}>Collapse All</span>
              </div>
                {Object.keys(this.state.data).map((usecases, i)=>{
                    return ( 
                        <React.Fragment key={i}>
                            <p onClick={() => this.showUsecasePanel(i)}
                               className={classes.accordionToggle}>
                                <span id={"usecaseToggleSign"+i}>+</span>{" "}
                                {usecases}
                            </p>
                            <ul 
                              className={classes.fieldGroup}
                              id={"usecasePanel"+i}
                              style={{display:"none"}} 
                            >
                                {this.fieldsLoop(usecases, this.state.data[usecases])}
                            </ul>
                        </React.Fragment>
                    )
                })}
            </div>
            <div style={{
                width:"30px",
                height:"40px", 
                float:"right", 
                backgroundImage:"url("+tickDone+")",
                backgroundSize:"cover",
                visibility: "hidden"
            }} id={"tickDoneUsecase"}></div>

            {JSON.parse(sessionStorage.user).admin?
            <button type="submit" className={classes.submitButton}>
              Submit
            </button>
            :null}
        </form>)
        :<p>Loading...</p>}
      </React.Fragment>
    )
  }
}
const allToggle = {
  display:"block", 
  cursor:"pointer",
  width:window.matchMedia("(min-width: 768px)").matches?"fit-content":"100%",
  float:window.matchMedia("(min-width: 768px)").matches?"right":"left"
}
const toggleSeparator = {
  margin: "0 5px 0 5px"
}
export default UsecaseWeightage