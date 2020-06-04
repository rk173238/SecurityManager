import React, {Component} from 'react';
import Scores from '../CloudDashboard/Scores/Scores';
import {Container, Row} from 'react-bootstrap';

class ExecutiveSummary extends Component {
    state={
        data:''
    }

    render(){
        return(
            <div style={{width:'95%',height:'100%',margin:"0 auto"}}>
                <Container style={{padding:0}} fluid>
                    <Row noGutters>
                        <Scores 
                            awsTotal={50}
                            ec2Total={50}
                            s3Total={30}
                            monitoringScore={20}
                            monitoringLow={40}
                            storageScore={10}
                            storageLow={60}
                            encryptionScore={70}
                            encryptionLow={90}
                        ></Scores>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ExecutiveSummary;