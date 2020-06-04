import React,{Component} from 'react';
import {deviceService} from '../../../../../../services';
import aws_servers from '../../../../../../constants/server_constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import classes from './ServerLocation.css';
import InfoIcon from '@material-ui/icons/Info';
import {bottomCardIcon, bottomTitle} from '../../OperationalTracks.css';
import {infoIconStyle} from '../../TechOperationalTracks/TechBar/TechBar';

class ServerLocation extends Component {

    state = {
        servers:'',
        list:''
    }

    flagIconPath=(country)=>{
        return require('../../../../../../assets/country_flags/'+country+'.png')
    }

    componentWillMount() {
        this.fetchCloudInstances();
    }

    fetchCloudInstances = () => {
        let instances = {}
        let defaultInstances = {
            "us-east-2": 65,
            "ca-central-1": 12,
            "sa-east-1": 10,
            "ap-northeast-3": 78,
            "eu-west-2": 45,
        }
        var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
        deviceService.fetchDevices("EC2-AWS", "location", "all", dateRange, "").then(res => {
            // console.log("RES::", res)
            res.map(instance => {
                if (!instances.hasOwnProperty(instance.location.data)) {
                    instances[instance.location.data] = 1;
                } else {
                    instances[instance.location.data]++;
                }
            })
            this.setState({
                servers: {...instances, ...defaultInstances}
            })
        })
        // console.log("Instances:::", instances)
        return instances
    }

    render(){
        return (
            <div 
                style={{
                    color:"white", 
                    paddingTop:"5px", 
                    fontFamily: "\"Ubuntu Mono\", monospace"
                }}
            >
                <div 
                    style={{
                        marginBottom:"10px", 
                        borderBottom:"1px solid rgb(165,165,165)", 
                        fontSize:"20px",
                        position:"relative"
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faGlobe} 
                        className={bottomCardIcon} 
                    />
                    <p className={bottomTitle}>
                        Cloud Instance Origin
                    </p>
                    <InfoIcon style={infoIconStyle} />
                </div>
                {Object.keys(this.state.servers).map((server, i) => {
                    return (
                        <div 
                            key={i}
                            className={classes.serverList}
                        >
                            <div style={{flex:1}}>
                                <img 
                                    src={this.flagIconPath(aws_servers[server].flag)} 
                                    className={classes.serverFlag} 
                                />
                            </div>
                            <div className={classes.serverName}>
                                {aws_servers[server].name}
                            </div>
                            <div className={classes.serverCount}>
                                { this.state.servers[server] }
                            </div>
                        </div>
                    )
                    // console.log(this.state.servers[server], server)
                })}
            </div>
        )
    }
}
export default ServerLocation