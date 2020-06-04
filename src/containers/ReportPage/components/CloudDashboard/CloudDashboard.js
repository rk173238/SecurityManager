import React,{Component} from 'react'
import Scores from './Scores/Scores';
import Charts from './Charts/Charts';
import {reportService} from '../../../../services/report_service'
import Map from './Map/Map';
import {Container, Row} from 'react-bootstrap';
class CloudDashboard extends Component{

    state={
        data:''
    }
    componentWillMount=()=>{
        reportService.fetchCloudData().then(res=>{
            console.log(res);
            this.setState({data:res})
        })
    }
    render(){
        return(
            <div style={{width:'98%',height:'100%',margin:"0 auto"}}>
                {this.state.data?
                    <Container style={{padding:0}} fluid>
                        <Row noGutters>
                            <Scores 
                                awsTotal={this.state.data.awsTotal}
                                ec2Total={this.state.data.ec2Total}
                                s3Total={this.state.data.s3Total}
                                monitoringScore={this.state.data.monitoring}
                                monitoringLow={this.state.data.monitoringLow}
                                storageScore={this.state.data.storage}
                                storageLow={this.state.data.storageLow}
                                encryptionScore={this.state.data.encryption}
                                encryptionLow={this.state.data.encryptionLow}
                            ></Scores>
                        </Row>
                        <Row noGutters>
                            <Charts barData={this.state.data.locationMap} pieData1={this.state.data.vpcDetails} pieData2={this.state.data.securityGroup}></Charts>
                        </Row>
                        <Row noGutters>
                            <div style={{width:'100%',marginTop:20,height:500}}>
                                <Map data={this.state.data.locationMap}></Map>
                            </div>
                        </Row>
                    </Container>
                :null}
                        
                
            </div>
        )
    }
}
export default CloudDashboard;