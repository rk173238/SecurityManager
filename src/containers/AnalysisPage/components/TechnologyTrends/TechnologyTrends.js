import React,{Component} from 'react';
import TechnologyRadarChart from '../../../../common-components/echarts/TechnologyRadarChart/TechnologyRadarChart';
import TechnologyLineChart from '../../../../common-components/echarts/TecnnologyLineChart/TechnologyLineChart';
import {dataService, deviceService} from '../../../../services';
import {systemNameConstants} from '../../../../constants/device_constants';
import {withRouter} from 'react-router';
import classes from './TechnologyTrends.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import DeviceDetails from './DeviceDetails/DeviceDetails'
import $ from 'jquery';
import { Button } from '@material-ui/core';
import {Row, Col} from 'react-bootstrap';

class TechnologyTrends extends Component{

    state={
        technology:'',
        linechartData:[],
        selectedOption:null,
        toggleDeviceSearch:false,
        technologiesData:'',
        technologyData:'',
        choosenTechnology:'',
        deviceSearchData:'',
        searchResults:'',
        showDeviceDetails:false,
        deviceDetailsData:'',
    }
    // getDateRange=()=>{
    //     var currDate=new Date(JSON.parse(localStorage.getItem('date'))[0])
    //     currDate.setDate(currDate.getDate()-14)
    //     var lastDate=currDate.getFullYear()+'-'+(+currDate.getMonth()+1)+'-'+currDate.getDate()+'T'+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds()
    //     // console.log(lastDate)
    //     return [lastDate,JSON.parse(localStorage.getItem('date'))[0],JSON.parse(localStorage.getItem('date'))[2]]
    // }
    
    componentWillMount = () => {
        //store all the technology search data to be used in search function
        this.triggerSearchDevice(this.props.location.pathname.split('/')[4]);
    }
    componentDidMount=()=>{
        var choosenTechnology=this.props.location.pathname.split('/')[4]
        var technologyData=this.props.technologiesData.filter(data=>data.technology===choosenTechnology)
        this.setState({technology:choosenTechnology,technologiesData:this.props.technologiesData,technologyData:technologyData[0]})
        this.setState({choosenTechnology:choosenTechnology})
        this.fetchLineChartData(choosenTechnology)

        //for escape key
        document.addEventListener("keydown", this.escFunction, false);
    }
    /*
        1.  Remove escapse key press event listener.
    */
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    fetchLineChartData=(technology)=>{
        var currDate=new Date(JSON.parse(localStorage.getItem('date'))[0])
        currDate.setDate(currDate.getDate()-14)
        var lastDate=currDate.getFullYear()+'-'+(+currDate.getMonth()+1)+'-'+currDate.getDate()+'T'+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds()
        var dateRange=[lastDate,JSON.parse(localStorage.getItem('date'))[0],JSON.parse(localStorage.getItem('date'))[2]]
        dataService.fetchTechnologyData(technology,null,dateRange,false).then(res=>{
            this.setState({linechartData:res})
        },e=>console.log(e))
    }

    countDevice=(data)=>{
        var d=data.usecase_compliance[Object.keys(data.usecase_compliance)[0]].device_count
        // console.log(d)
        return d.low+d.medium+d.critical
    }

    changeTech = (name) => {
        // console.log("daname",name.target.value);
        this.props.history.push({pathname:'/home/analysis/technologytrends/'+name.target.value});
        // window.location.reload();
        var choosenTechnology=name.target.value;
        var technologyData=this.state.technologiesData.filter(data=>data.technology===choosenTechnology)
        this.setState({choosenTechnology:choosenTechnology,technologyData:technologyData[0]});
        //why use choosenTechnology when we can use our existing this.state.technology
        this.setState({technology:choosenTechnology});
        this.fetchLineChartData(choosenTechnology);

        //also update search data
        this.triggerSearchDevice(choosenTechnology);
    }

    // show/hide the search form and overlay
    toggleDeviceSearch = () => {
        document
            .getElementById("deviceSearch")
            .style
            .display = this.state.toggleDeviceSearch ? "none" : "block";
        this.setState({toggleDeviceSearch: !this.state.toggleDeviceSearch});
        
        //reset searchResults to clear result section
        if (!this.state.toggleDeviceSearch) {
            this.setState({searchResults:''})
        }

        //reset search input to empty state
        document.getElementById("searchInput").value = "";
    }

    calcRisk=()=>{
        var count=0,sum=0;
        this.state.technologiesData.map(tech=>{
            if(tech.technology!==this.state.choosenTechnology){
                sum=sum+tech.compliance;
                count++;
            }
        })
        sum=sum/count
        if(sum>this.state.technologyData.compliance) return '-'+(sum-this.state.technologyData.compliance).toFixed(2);
        return '+'+ (this.state.technologyData.compliance-sum).toFixed(2);
    }

    /*
        1.  Query device data in state using .filter() and .includes() 
            and store searched results in state.searchResults
        2.  Searching is triggered if length of query is > 2.
            Else clear the state.searchResults
    */
    inputDevice=(event)=>{
        if (event.target.value.length > 2){
            let queryResult = []
            queryResult = this.state.deviceSearchData.filter(q=>q[systemNameConstants[this.state.choosenTechnology]].includes(event.target.value))
            // console.log("state_data", queryResult)
            this.setState({searchResults:queryResult})
        } else {
            this.setState({searchResults:''})
        }
    }

    /*
        Get all data of a particular technology for the last quarter 
        and store it in state.deviceSearchData
    */
    triggerSearchDevice=(techName)=>{
        deviceService.fetchDevices(
            techName,
            '',
            'all',
            [eval(localStorage.date)[1], eval(localStorage.date)[2]],
            ''
        ).then(res => {
            console.log("state_data",res)
            this.setState({deviceSearchData:res})
        })
    }

    //Detect Escape keypress and disable search bar
    escFunction = (event) => {
        if (this.state.toggleDeviceSearch && event.keyCode === 27) {
            this.toggleDeviceSearch();
        }
    }

    //toggles for Mui Dialog of Device Details
    closeDeviceDetailsDialog = () => {
        this.setState({showDeviceDetails:false})
    }
    openDeviceDetailsDialog = (deviceDetailsData) => {
        this.setState({
            showDeviceDetails:true,
            deviceDetailsData:deviceDetailsData
        })

    }

    render(){
        
        return(
            <div style={{width:'100%',height:'100%'}}>

                {this.state.showDeviceDetails?
                    <DeviceDetails 
                        open={this.state.showDeviceDetails} 
                        closeDeviceDetails={this.closeDeviceDetailsDialog} 
                        techName={this.state.choosenTechnology}
                        deviceDetailsData={this.state.deviceDetailsData}
                    />
                :null}
                
                {this.state.technologyData?
                
                <Row style={{width:"90%", margin:"0 auto", position:"relative"}} noGutters>
                    <div
                        id="deviceSearch"
                        style={{
                            width:"80%",
                            display:"none",
                            position:"absolute",
                        }}
                    >
                        <div onClick={this.toggleDeviceSearch} style={{zIndex:1,position:"fixed",background:"#00000060",top:0, left:0, right:0, bottom:0,}}></div>
                        <div className={classes.inputWrapper}>
                        <input 
                            type="text" 
                            placeholder="Search Devices"
                            id="searchInput"
                            onChange={this.inputDevice}
                            // onKeyUp={(e)=>{if(e.keyCode===13) $('#search').click();}}
                            className={classes.searchInput}
                        />
                        <Button 
                            type="submit"
                            variant="contained" 
                            color="primary" 
                            disabled={true}
                            // onClick={this.triggerSearchDevice}
                            style={{
                                zIndex:1,
                                float:"right"
                            }}
                        >
                            Search
                        </Button>
                        </div>
                        <div className={classes.searchResults}>
                        {this.state.searchResults?this.state.searchResults.map((result, i)=>{
                            return (
                                <div key={i}>
                                    <p onClick={() => {this.openDeviceDetailsDialog(result)}}>{result[systemNameConstants[this.state.technology]]}</p>
                                </div>  
                            )
                        }):null}
                        </div>
                    </div>
                    <Col md={6} className={classes.technologyTrendsData}>
                        <div style={{color:"#76a6ee", fontSize:"22px"}}>
                            {/* {console.log(this.state)} */}
                            <select 
                                value={this.props.location.pathname.split('/')[4]}
                                onChange={this.changeTech}
                                style={{
                                    background:"transparent",
                                    color:"#76a6ee", 
                                    border:"1px solid rgb(118, 166, 238, 0.5)",
                                }}
                            >
                                {this.props.allTechNames.map((name, i) => {
                                    return (
                                        <option 
                                            key={i}
                                            value={name}
                                            style={{
                                                background:"#052758", 
                                                color:"rgba(255,255,255,0.8)",
                                            }}
                                        >
                                            {name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <div style={{width:290, marginTop:"15px"}}>
                            <div style={{display:"inline",fontSize:"35px",fontWeight:"500"}}>
                                {this.state.technologyData.data.technology_compliance}%
                            </div>
                            <div style={{float:"right", fontSize:"25px", lineHeight:"46px", color:"#05bd05"}}>
                                +{this.state.technologyData.techScoreChanges}
                            </div>
                        </div>
                        <div style={{width:290, position:"relative"}}>
                            <div 
                                style={{
                                    display:"inline",
                                    fontSize:"20px", 
                                    lineHeight:"45px"
                                }}
                            >
                                No. of Devices
                            </div>
                            <div 
                                onClick={this.toggleDeviceSearch}
                                className={classes.deviceNumber}
                            >
                                {this.state.technologyData.data?this.countDevice(this.state.technologyData.data):null}
                                <FontAwesomeIcon 
                                    icon={faSearch} 
                                    style={{
                                        fontSize:"13px",
                                        position:"absolute",
                                        margin:"5px 2px",
                                    }} 
                                />
                            </div>
                        </div>
                        <p style={{fontSize:"20px"}}>{this.props.location.pathname.split('/')[4]} compliance got improved from last quarter, with 
                        Compliance Changes +{this.state.technologyData.techScoreChanges}. 
                        Changes in the device volume +{this.state.technologyData.deviceCountChanges}. 
                        This is contributing to {this.calcRisk()} % of Technology Risk.​</p>
                    </Col>

                    <Col md={6} className={classes.radarChart}>
                        <TechnologyRadarChart data={this.state.technologyData.data}></TechnologyRadarChart>
                    </Col>
                </Row>

                :null}
                <div 
                    style={{
                        width:'90%',
                        height:280, 
                        margin: "0 auto"
                    }}
                >
                    <TechnologyLineChart data={this.state.linechartData} ></TechnologyLineChart>
                </div>
            </div>
        )
    }
}
export default withRouter(TechnologyTrends);