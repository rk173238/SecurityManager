import React,{Component} from 'react';
import SaverityTrends from './SaverityTrends/SaverityTrends';
import TopOffenders from './TopOffenders/TopOffenders';
import {reportService} from '../../../../services/report_service';
import TopRepositories from './TopRepositories/TopRepositories';
import ViolatedPolicyRule from './violatedPolicyRule/ViolatedPolicyRule';
import {Container, Row, Col} from 'react-bootstrap';
import Scores from './Scores/Scores';
import {dataSecurityService} from '../../../../services';
import parentClass from '../../ReportPage.css';

class DataSecurity extends Component{
    state={
        targetServerData:'',
        repositoryData:'',
        violatedPolicyRule:''
    }
    componentWillMount=()=>{
        dataSecurityService.fetchTopOffendersRepository('Daily').then(res=>{
            this.setState({targetServerData:res.targetServer,repositoryData:res.repository,violatedPolicyRule:res.violatedPolicyRule})
        })
    }

    render(){
        return(
            <div style={{width:'100%',height:'100%',margin:"0 auto"}}>
                <Row noGutters>
                    <Scores 
                        awsTotal={20}
                        ec2Total={30}
                        s3Total={45}
                        monitoringScore={2}
                        monitoringLow={3}
                        storageScore={0}
                        storageLow={4}
                        encryptionScore={34}
                        encryptionLow={54}
                    ></Scores>
                </Row>
                <Row className={"mb-sm-0  mb-md-4"} noGutters>
                    <Col md={8}>
                        <div className={parentClass.chartBox}>
                            <h4 className={parentClass.chartName}>Severity</h4>
                            <SaverityTrends></SaverityTrends>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={parentClass.chartBox}>
                            <h4 className={parentClass.chartName}>Top Offenders</h4>
                            {this.state.targetServerData?
                            <TopOffenders data={this.state.targetServerData} />
                            :null}
                        </div>
                    </Col>
                </Row>
                <Row noGutters>
                    <Col md={6}>
                        <div className={parentClass.chartBox}>
                            <h4 className={parentClass.chartName}>Top Repositories</h4>
                            {this.state.targetServerData?
                            <TopRepositories data={this.state.repositoryData} />
                            :null}
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className={parentClass.chartBox}>
                            <h4 className={parentClass.chartName}>Violated Policy Rules</h4>
                            {this.state.violatedPolicyRule?
                                <ViolatedPolicyRule data={this.state.violatedPolicyRule} />
                            :null}
                        </div>
                    </Col>
                </Row>
                
                {/* <div style={{display:'flex'}}> */}
                        {/* Below Component will show barchart for top offenders based on Target server */}
                        {/* {this.state.repositoryData?<TopRepositories data={this.state.repositoryData}></TopRepositories>:null} */}
                    {/* {this.state.violatedPolicyRule?
                        <div style={{width:'50%'}}><ViolatedPolicyRule data={this.state.violatedPolicyRule}></ViolatedPolicyRule></div>:null} */}
                {/* </div> */}
            </div>
        )
    }
}
export default DataSecurity;