import React, { Component } from 'react';
import { withRouter } from 'react-router';
import classes from './OperationalTracks.css';
import TechOperationalTracks from './TechOperationalTracks/TechOperationalTracks';
import PeopleOperationalTracks from './PeopleOperationalTracks/PeopleOperationalTracks';
import ProcessOperationalTracks from './ProcessOperationalTracks/ProcessOperationalTracks';
import {Container, Row, Col} from 'react-bootstrap';

class OperationalTracks extends Component{

 
    reference = React.createRef();
    state={
      reference:''
    }
    componentDidMount(){
      setTimeout(() => {
        this.setState({reference:this.reference})
      }, 1);
      
    }
    clicked=()=>{
      console.log('optracks')
    }
   
  render(){
    return(
            <Container style={{padding:0, height:"85%"}} fluid>
              <Row style={{height:"100%"}} noGutters>
                <Col md={4}>
                  <TechOperationalTracks 
                    // data={this.props.data['Technology']} 
                    onTechClickHandler={this.props.onTechClickHandler} 
                    clickedTrend={this.props.clickedTrend}></TechOperationalTracks>
                </Col>
                <Col md={4}>
                  <PeopleOperationalTracks data={''}  clickedTrend={this.props.clickedTrend}></PeopleOperationalTracks>
                </Col>
                <Col md={4}>
                  <ProcessOperationalTracks onTechClickHandler={this.props.onTechClickHandler} clickedTrend={this.props.clickedTrend}></ProcessOperationalTracks>
                </Col>
              </Row>
            </Container>
        // <div className={classes.flexContainer} ref={this.reference}>
        //   <div style={{width:"33%",height:500}}>
        //     <TechOperationalTracks data={this.props.data['Technology']} onTechClickHandler={this.props.onTechClickHandler} clickedTrend={this.props.clickedTrend}></TechOperationalTracks>
        //   </div>
        //   <div style={{width:"33%",height:500}}>
        //     <PeopleOperationalTracks data={this.props.data['People']}></PeopleOperationalTracks>
        //   </div>
        //   <div style={{width:"33%",height:500}}>
        //     <ProcessOperationalTracks onTechClickHandler={this.props.onTechClickHandler}></ProcessOperationalTracks>
        //   </div>  
        // </div>
    )
  }
}


export default withRouter(OperationalTracks);
