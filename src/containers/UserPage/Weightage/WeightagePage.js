import React, {Component} from 'react';
import classes from './WeightagePage.css';
// import WeightageForm from './WeightageForm';
import TechWeightage from './TechWeightage/TechWeightage';
import UsecaseWeightage from './UsecaseWeightage/UsecaseWeightage';
import SubcatWeightage from './SubcatWeightage/SubcatWeightage';
import {scrollbar} from '../../../commonfiles/scrollbar.css';
import {responsiveFont} from '../UserPage.css';

var formList = ['Technology Weightage', 'Subcategory Weightage', 'Usecase Weightage']

class WeightagePage extends Component {

  state = {
    activeTab: 0
  }

  componentDidMount() {
      this.hideAll();
      this.initForm(0);
  }

  hideAll() {
    for (let i=0; i < 3; i++) document.getElementById("panel"+i).style.display = "none";
  }
  
  initForm(num) {
    this.hideAll();
    document.getElementById("panel"+num).style.display = "initial";
    this.setState({activeTab: num})
  }

    
  render() {
      return(
      <div className={scrollbar+" "+responsiveFont} style={{height:"100%", overflowY:"auto"}}> 
          <div style={{width:"90%", position:"relative", margin:"0 auto"}}>

          <h1 className={classes.formHeader}>Weightage Configurations</h1>
          
          <div 
            style={{
              display:window.matchMedia("(min-width: 768px)").matches?"flex":"block", 
              boxSizing: "border-box", 
              marginBottom:"10px"
            }}
          >
            {formList.map((item, i) => {
              return <div 
                    className={classes.tab}
                    onClick={() => this.initForm(i)} 
                    id={"tab"+i} 
                    style={{
                      color: this.state.activeTab===i ? "#0080de" : "#fff",
                      fontWeight: this.state.activeTab===i ? "bold" : "normal",
                      border: this.state.activeTab===i ? "1px solid #0080de" : "1px solid #fff"
                    }} 
                    key={i}>{item}</div>
            })}
          </div>
        
          <div id="tabPanels">
            <div className={classes.tabpanel} id="panel0">
              <TechWeightage />
            </div>
            <div className={classes.tabpanel} id="panel1">
              <SubcatWeightage />
            </div>
            <div className={classes.tabpanel} id="panel2">
              <UsecaseWeightage />
            </div>
          </div>
          
          </div>
      </div>
      )
  }
}
export default WeightagePage