import React, {Component} from 'react';
import $ from 'jquery';
import classes from '../../UserPage.css';
import tickDone from '../../../../assets/tickDone.png';
import {weightageService} from '../../../../services/weightage_service';


class SubcatWeightage extends Component {

  state = {
    data: '',
  }

  componentWillMount() {
    weightageService.getWeightage('subcat').then(res => {
      this.setState({data: res.data.subcat_weightage})
    })
  }

  onValueChange = (el) => { 
    let d = this.state.data;
    d[el.target.getAttribute('subcatname')][el.target.name] = parseFloat(el.target.value);
    this.setState({data: d})
  }

  onFormSubmit = (el) => {
    el.preventDefault();
    if (JSON.parse(sessionStorage.user).admin){
      let payload = {time: new Date(), subcat_weightage: this.state.data}
      weightageService.setWeightage("subcat", payload)
        .then((response) => {
          console.log("RESPONSE:::",response.status)
          let el = document.getElementById("tickDoneSubcat");
          el.style.visibility = "visible";
          setTimeout(()=>{
            $("#tickDoneSubcat").animate({opacity:0})
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
            <label 
              htmlFor={key} 
              className={classes.formLabel}
              style={{
                marginBottom:0
              }}
            >
              {key}
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

  showSubcatPanel = (i) => {
    let panelState = document.getElementById("subcatPanel"+i).style.display;
    if (panelState === "none") {
        document.getElementById("subcatPanel"+i).style.display = "block";
        document.getElementById("toggleSign"+i).innerHTML = "-"
    } else {
        document.getElementById("subcatPanel"+i).style.display = "none";
        document.getElementById("toggleSign"+i).innerHTML = "+"
    }
  }

  expandAll = () => {
    for (let i=0; i < Object.keys(this.state.data).length; i++) {
      document.getElementById("subcatPanel"+i).style.display = "block";
      document.getElementById("toggleSign"+i).innerHTML = "-"
    }
  }
  collapseAll = () => {
    for (let i=0; i < Object.keys(this.state.data).length; i++) {
      document.getElementById("subcatPanel"+i).style.display = "none";
      document.getElementById("toggleSign"+i).innerHTML = "+"
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
                {Object.keys(this.state.data).map((subcats, i)=>{
                    return ( 
                        <React.Fragment key={i}>
                            <p onClick={() => this.showSubcatPanel(i)}
                               className={classes.accordionToggle}>
                                <span id={"toggleSign"+i}>+</span>{" "}
                                {subcats}
                            </p>
                            <ul 
                              className={classes.fieldGroup}
                              id={"subcatPanel"+i}
                              style={{display:"none"}} 
                            >
                                {this.fieldsLoop(subcats, this.state.data[subcats])}
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
            }} id={"tickDoneSubcat"}></div>

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
export default SubcatWeightage