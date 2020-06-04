import React, {Component} from 'react';
import InfoIcon from '@material-ui/icons/Info';
import {Container, Row, Col} from 'react-bootstrap';
import ScoreBoxes from '../CommonComponents/ScoreBoxes/ScoreBoxes';
// import {} from '../ExecutiveSummary/NetworkSecurity';
import ActionBarGraph from '../ExecutiveSummary/EndpointSecurity/components/ActionBarGraph/ActionBarGraph';
import ServerSignComp from '../ExecutiveSummary/EndpointSecurity/components/ServerSignComp/ServerSignComp';
import AVCoverage from '../ExecutiveSummary/EndpointSecurity/components/AVCoverage/AVCoverage';
import CompoundBarGraph from '../ExecutiveSummary/NetworkSecurity/components/CompoundBarGraph/CompoundBarGraph';
import CpuUsagePie from '../ExecutiveSummary/NetworkSecurity/components/CpuUsagePie/CpuUsagePie';
import MFAcompliance from './components/MFAcompliance/MFAcompliance'
import {chartBox, chartName, infoIconStyle} from '../ExecutiveSummary/EndpointSecurity/EndpointSecurity';

class Covid19 extends Component {
    render() {
        return(
            <React.Fragment>
                <Container style={{padding:0}} fluid>
                    <Row style={{marginLeft:"10px"}} noGutters>
                        <ScoreBoxes 
                            box={[
                                {
                                    name:"Remote Handler Compliance",
                                    score:"100%",
                                    color: "rgb(42, 187, 67)"
                                },
                                {
                                    name:"Laptop Encryption",
                                    score:"90%",
                                    color:"#ffbf00"
                                },
                                {
                                    name:"Service Availability",
                                    score:"100%",
                                    color:"rgb(42, 187, 67)"
                                },
                                {
                                    name:"Emergency Change",
                                    score:"6%",
                                    color:"rgb(230, 60, 60)"
                                }
                            ]}
                        />
                    </Row>
                    <Row className={"mb-sm-0  mb-md-4"} noGutters>
                        <Col md={4}>
                            <div style={chartBox}>
                            <h4 style={chartName}>
                                Action Taken Against Threats
                                <InfoIcon style={infoIconStyle} />
                            </h4>
                            <ActionBarGraph />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div style={chartBox}>
                            <h4 style={chartName}>
                                Remote Host Compliance
                                <InfoIcon style={infoIconStyle} />
                            </h4>
                            <ServerSignComp />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div style={chartBox}>
                            <h4 style={chartName}>
                                Remote AV Coverage
                                <InfoIcon style={infoIconStyle} />
                            </h4>
                            <AVCoverage />
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
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
                                    VPN MFA Compliance
                                    <InfoIcon style={infoIconStyle} />
                                </h4>
                                <MFAcompliance />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
export default Covid19