import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/Info';
import ScoreBoxes from '../../CommonComponents/ScoreBoxes/ScoreBoxes';
import ActionBarGraph from './components/ActionBarGraph/ActionBarGraph';
import ServerSignComp from './components/ServerSignComp/ServerSignComp';
import AVCoverage from './components/AVCoverage/AVCoverage';
import RCADoughnut from './components/RCADoughnut/RCADoughnut';

class EndpointSecurity extends Component {
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
                                    name:"Signature Compliance",
                                    score:"91%",
                                    color: "rgb(42, 187, 67)"
                                },
                                {
                                    name:"Encryption",
                                    score:"69%",
                                    color:"rgb(230, 60, 60)"
                                },
                                {
                                    name:"Service Availability",
                                    score:"100%",
                                    color:"rgb(42, 187, 67)"
                                },
                                {
                                    name:"Emergency Changes",
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
                                Server Signature Compliance
                                <InfoIcon style={infoIconStyle} />
                            </h4>
                            <ServerSignComp />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div style={chartBox}>
                            <h4 style={chartName}>
                                AV Coverage
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
export const chartBox = {
    margin:"10px",
    height:"100%",
    boxShadow:"0 0 10px black"
}
export const chartName = {
    fontSize:"1.3rem",
    padding: "5px 0 5px 10px",
    boxShadow:"0 1px 5px #000",
    position:"relative"
}
export const infoIconStyle = {
    position:"absolute",
    right:"10px",
    cursor:"pointer",
    fontSize:window.matchMedia("(min-width: 768px)").matches?"1.3vw":"18px",
    color: "#fff",
    top:"50%",
    transform:"translateY(-50%)"
}
export default EndpointSecurity;