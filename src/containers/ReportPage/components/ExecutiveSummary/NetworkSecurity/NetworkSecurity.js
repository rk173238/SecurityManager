import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/Info';
import ScoreBoxes from '../../CommonComponents/ScoreBoxes/ScoreBoxes';
import CompoundBarGraph from './components/CompoundBarGraph/CompoundBarGraph';
import CpuUsagePie from './components/CpuUsagePie/CpuUsagePie';
import RCADoughnut from '../EndpointSecurity/components/RCADoughnut/RCADoughnut';
import ServerSignComp from '../EndpointSecurity/components/ServerSignComp/ServerSignComp';
import {chartBox, chartName, infoIconStyle} from '../EndpointSecurity/EndpointSecurity'

class NetworkSecurity extends Component {
    state={
        data:''
    }

    render(){
        return(
            <div style={{width:'100%',height:'100%',margin:"0 auto"}}>
                <Container style={{padding:0}} fluid>
                    <Row style={{marginLeft:"10px"}} noGutters>
                    <ScoreBoxes 
                        box={[
                            {
                                name:"Emergency Changes",
                                score:"2%",
                                color: "rgb(230, 60, 60)"
                            },
                            {
                                name:"Authorized Changes",
                                score:"90%",
                                color:"rgb(42, 187, 67)"
                            },
                            {
                                name:"Service Availability",
                                score:"100%",
                                color:"rgb(42, 187, 67)"
                            },
                            {
                                name:"User Satisfaction",
                                score:"70%",
                                color:"#ffbf00"
                            }
                        ]}
                    />
                    </Row>
                    <Row className={"mb-sm-0  mb-md-4"} noGutters>
                        <Col md={4}>
                            <div style={chartBox}>
                                <h4 style={chartName}>
                                    Firewall Signature
                                    <InfoIcon style={infoIconStyle} />
                                </h4>
                                <CompoundBarGraph />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div style={chartBox}>
                                <h4 style={chartName}>
                                    Firewall CPU Usage
                                    <InfoIcon style={infoIconStyle} />
                                </h4>
                                <CpuUsagePie />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div style={chartBox}>
                                <h4 style={chartName}>
                                    NAC Version Compliance
                                    <InfoIcon style={infoIconStyle} />
                                </h4>
                                <ServerSignComp />
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col md={4}>
                            <div style={chartBox}>
                                <h4 style={chartName}>
                                    L1 RCA Compliance
                                    <InfoIcon style={infoIconStyle} />
                                </h4>
                                <RCADoughnut />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default NetworkSecurity;