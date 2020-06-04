import React,{Component} from 'react';
import Donut from './Donut/Donut';
import OverAllScores from '../../../../../../common-components/OverallScores/OverAllScores';
import classes from './ScoreDetailsTabs.css';
import {Row, Col} from 'react-bootstrap';


const currentQuarter=(props)=>{
  console.log(props)
  if(props.length>0){
    let t1=new Date(props[0].time)
    let t2=new Date(props[1].time)
    if(t1>t2) return 0
    return 1
  }
  return -1
}
class detailsTabs  extends Component{

    state={
      category:[],
    }
    render(){

    return(
          <div 
            style={{
              marginTop:0,
              height:"100%"
            }}
          >
            {Object.keys(this.props.data).map((category,i)=>(
              // <div className={classes.tabDiv} key={i}>
              <Row 
              key={i} 
              noGutters
              className={classes.divideRows}
              >
                {/* <div className={classes.donutDiv}> */}
                <Col md={2}>
                  <Donut 
                    data={{
                      name:category, 
                      value:this.props.data[category].score,
                      selected:false
                    }}  
                  />
                </Col>
                {/* <div className={classes.overallScore}> */}
                <Col md={10}>
                  <OverAllScores 
                    data={this.props.data[category]} 
                    removeBorder={i===Object.keys(this.props.data).length-1} 
                    arrowClicked={this.props.arrowClicked} 
                    mainCategory={category} 
                    type={this.props.type} />
                </Col>
              </Row>
            ))}
          </div>
    )
    }
}

export default detailsTabs;