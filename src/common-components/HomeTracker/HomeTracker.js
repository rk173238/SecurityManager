import React,{Component} from 'react';
import classes from './HomeTracker.css';
import ReactTooltip from 'react-tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router';
import {homepageData, 
        technologyData,
        peopleData,
        processData
} from './data.js';

class HomeTracker extends Component {

    state = {
        activeState: homepageData
    }

    componentWillMount() {
        // console.log("CR1",window.location.href, this.props.location.pathname);
        let currentPath = this.props.location.pathname
        if (currentPath.slice(1,currentPath.length-1).split('/').length===2) {
            this.setState({activeState:homepageData})
        }
        
        this.unlisten = this.props.history.listen((location, action) => {
            // console.log("CR2", location, action);
            let selection = location.pathname.slice(1).split('/')[2]
            if (selection==="technology"||selection==="Technology") {
                this.setState({activeState:technologyData})
            }
            else if (selection==="people"||selection==="People") {
                this.setState({activeState:peopleData})
            }
            else if (selection==="process"||selection==="Process") {
                this.setState({activeState:processData})
            }
            else {
                this.setState({activeState:homepageData})
            }
        })
        
    }
    componentWillUnmount() {
        this.unlisten()
    }

    render(){
//Checkpoint
        return(
            <div className={classes.homeTracker}>
                <ReactTooltip id="sidebarTooltip" className={classes.toolTip} html={true} multiline={true} insecure={true} />
                <div style={container}>
                    {this.state.activeState? this.state.activeState.map((box, i) => {
                        return (
                        <div 
                            className={classes.box + " " + classes.redShadow}
                            data-background-color="#062e69" 
                            data-text-color="#fff" 
                            data-tip={box.description}
                            data-place="right"
                            data-for="sidebarTooltip"
                            data-effect="solid"
                            key={i}
                        >
                            <div 
                                style={{
                                    display:"flex", 
                                    lineHeight:1,
                                    justifyContent:"space-evenly",
                                }}
                            >
                                {/* <FontAwesomeIcon icon={box.icon} className={classes.iconStyle} /> */}
                                <div className={classes.scoreNum}>
                                    {box.value}
                                </div>
                            </div>
                            <div className={classes.scoreName}>{box.name}</div>
                        </div>)
                    }):null}
                {/* old boxes data */}
                </div>
            </div>
        )
    }
}

const container = {
    // display:"grid",
    height:"100%",
    alignContent:"space-between",
    // paddingBottom:"5%",
    // position:"absolute",
    // top:"50%",
    // left:"50%",
    // transform:"translate(-50%, -50%)",
}

export default withRouter(HomeTracker);

                    {/*
                    <div 
                        className={classes.box}
                        data-background-color="#062e69" 
                        data-text-color="#fff" 
                        data-tip="Total no. of Devices"
                        data-place="right"
                        data-effect="solid">
                        <FontAwesomeIcon icon={faServer} style={iconStyle} />
                        <div style={{display:"grid", flex:5}}>
                            <div className={classes.scoreNum}>
                                55
                            </div>
                            <div style={scoreName}>Devices</div>
                        </div>
                    </div>*/}