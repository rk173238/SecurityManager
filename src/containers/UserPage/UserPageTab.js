import React, {Component} from 'react';
import classes from './UserPage.css';
import FormPanel from './FormPanel/FormPanel';
import { urlConstants } from '../../constants';

var formList = ['Antivirus', 'HIPS', 'Drive Encryption', 'DLP']

class UserPageTab extends Component {

  state = {
    activeTabPanel: '',
    activeTab: 0
  }

  componentDidMount() {
      this.hideAll();
      this.initForm(0);
  }

  hideAll() {
    var els = []
    for (let i=0; i < formList.length; i++) els.push("panel" + i);
    els.map((el) => {
      document.getElementById(el).style.display = "none";
    })
  }
  
  initForm(num) {
    this.hideAll();
    document.getElementById("panel"+num).style.display = "initial";
    this.setState({activeTab: num})
  }

    
  render() {
      return(
      <React.Fragment> 
          <div style={{width:"90%", position:"relative", margin:"0 auto"}}>

          <h1 style={formHeader}>Baseline Configurations</h1>
          
          <div 
            style={{
              display:window.matchMedia("(min-width:768px)").matches?"flex":"block", 
              boxSizing: "border-box", 
              marginBottom:"10px"
            }}
          >
            {formList.map((item, i) => {
              return <div 
                    style={{...tab, 
                      border: this.state.activeTab===i ? "1px solid #0080de" : "1px solid #fff", 
                      fontWeight:this.state.activeTab===i ? "bold" : "normal",
                      color: this.state.activeTab===i ? "#0080de" : "#fff"
                    }} 
                    onClick={() => this.initForm(i)} 
                    id={"tab"+i} 
                    key={i}>{item}</div>
            })}
          </div>

          <div id="tabPanels">
            {formList.map((item, i) => {
              return (<div style={tabpanel} id={"panel"+i} key={i}>
                <FormPanel tabName={item} />
              </div>)
            })}
          </div>
          
          </div>
      </React.Fragment>
      )
  }
}

const formHeader = {
    textAlign:"center"
}

const tab = {
    padding:"10px",
    cursor: "pointer",
    margin: "1px"
}

const tabpanel = {
  padding:"10px",
  position: "absolute",
  width: "100%",
  boxSizing: "border-box",
  boxShadow: "0 0 10px #000"
}

const style1 = {
  color:"white"
}

export default UserPageTab