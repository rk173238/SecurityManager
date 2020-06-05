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
        // dataSecurityService.fetchTopOffendersRepository('Daily').then(res=>{
        //     this.setState({targetServerData:res.targetServer,repositoryData:res.repository,violatedPolicyRule:res.violatedPolicyRule})
        // })
        this.setState({targetServerData:res.targetServer,repositoryData:res.repository,violatedPolicyRule:res.violatedPolicyRule})
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
let res={
    "targetServer": {
      "172.31.4.132": 104,
      "172.31.12.136": 68
    },
    "repository": {
      "File_Share_Scan": {
        "value": 104,
        "data": [
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 146,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 148,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 142,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 147,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 149,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 144,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 150,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 141,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 151,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 145,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 153,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 155,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 152,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 154,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 157,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 161,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 163,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 158,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 156,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 159,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 165,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 164,
            "repository": "//172.31.4.132/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 166,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 160,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 162,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 143,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 146,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 148,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 142,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 147,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 149,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 144,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 150,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 141,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 151,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 145,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 153,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 155,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 152,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 154,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 157,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 161,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 163,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 158,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 156,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 159,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 165,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 164,
            "repository": "//172.31.4.132/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 166,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 160,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 162,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 143,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 146,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 148,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 142,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 147,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 149,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 144,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 150,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 141,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 151,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 145,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 153,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 155,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 152,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 154,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 157,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 161,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 163,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 158,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 156,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 159,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 165,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 164,
            "repository": "//172.31.4.132/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 166,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 160,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 162,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 143,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 146,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 148,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 142,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 147,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 149,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 144,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 150,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 141,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 151,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 145,
            "repository": "//172.31.4.132/Test Data/new/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 153,
            "repository": "//172.31.4.132/Test Data/new/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 155,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 152,
            "repository": "//172.31.4.132/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 154,
            "repository": "//172.31.4.132/Test Data/new/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 157,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 161,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 163,
            "repository": "//172.31.4.132/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 158,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 156,
            "repository": "//172.31.4.132/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 159,
            "repository": "//172.31.4.132/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 165,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 164,
            "repository": "//172.31.4.132/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 166,
            "repository": "//172.31.4.132/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 160,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 162,
            "repository": "//172.31.4.132/Test Data/sample-data (1).xls"
          }
        ],
        "target": "File_Share_Scan"
      },
      "Share2": {
        "value": 68,
        "data": [
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 171,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 169,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 173,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 170,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 172,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 179,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 174,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 168,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 175,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 183,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 182,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 180,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 177,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 176,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 178,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 181,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 167,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 171,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 169,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 173,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 170,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 172,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 179,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 174,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 168,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 175,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 183,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 182,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 180,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 177,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 176,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 178,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 181,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 167,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 171,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 169,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 173,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 170,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 172,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 179,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 174,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 168,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 175,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 183,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 182,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 180,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 177,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 176,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 178,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 181,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 167,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 171,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 169,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 173,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 170,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 172,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip/sample-data (1).csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 179,
            "repository": "//172.31.12.136/Data/Test Data/passwordzip.7z"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 174,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 168,
            "repository": "//172.31.12.136/Data/Test Data/new/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 175,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 183,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 182,
            "repository": "//172.31.12.136/Data/sample-data.xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 180,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 177,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 176,
            "repository": "//172.31.12.136/Data/Test Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 178,
            "repository": "//172.31.12.136/Data/sample-data.csv"
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 181,
            "repository": "//172.31.12.136/Data/Test Data/sample-data (1).xls"
          }
        ],
        "target": "Share2"
      }
    },
    "violatedPolicyRule": {
      "3": {
        "value": 12,
        "data": [
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 164,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 179,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 153,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 164,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 179,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 153,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 164,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 179,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 153,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 164,
            "violatedPolicyRule": 3
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 179,
            "violatedPolicyRule": 3
          }
        ],
        "ruleId": 3
      },
      "223": {
        "value": 80,
        "data": [
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 148,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 142,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 147,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 141,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 151,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 154,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 161,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 158,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 156,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 165,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 160,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 167,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 171,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 169,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 173,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 175,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 182,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 177,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 178,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 143,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 148,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 142,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 147,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 141,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 151,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 154,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 161,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 158,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 156,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 165,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 160,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 167,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 171,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 169,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 173,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 175,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 182,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 177,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 178,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 143,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 148,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 142,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 147,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 141,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 151,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 154,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 161,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 158,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 156,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 165,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 160,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 167,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 171,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 169,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 173,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 175,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 182,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 177,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 178,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 143,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 148,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 142,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 147,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 141,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 151,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 154,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 161,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 158,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 156,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 165,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 160,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 167,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 171,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 169,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 173,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 175,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 182,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 177,
            "violatedPolicyRule": 223
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 178,
            "violatedPolicyRule": 223
          }
        ],
        "ruleId": 223
      },
      "243": {
        "value": 80,
        "data": [
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 149,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 144,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 150,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 145,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 155,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 152,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 157,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 163,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 159,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 166,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 162,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 170,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 172,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 174,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 168,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 183,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 180,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 176,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T00:06:08.832392Z",
            "incident": 181,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 146,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 149,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 144,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 150,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 145,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 155,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 152,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 157,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 163,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 159,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 166,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 162,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 170,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 172,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 174,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 168,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 183,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 180,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 176,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T06:06:08.832729Z",
            "incident": 181,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 146,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 149,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 144,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 150,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 145,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 155,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 152,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 157,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 163,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 159,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 166,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 162,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 170,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 172,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 174,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 168,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 183,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 180,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 176,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T12:06:08.917130Z",
            "incident": 181,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 146,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 149,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 144,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 150,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 145,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 155,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 152,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 157,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 163,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 159,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 166,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 162,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 170,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 172,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 174,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 168,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 183,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 180,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 176,
            "violatedPolicyRule": 243
          },
          {
            "time": "2020-04-14T18:06:08.981521Z",
            "incident": 181,
            "violatedPolicyRule": 243
          }
        ],
        "ruleId": 243
      }
    }
  }