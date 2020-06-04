import React,{Component} from 'react';
import Donut from  './PeopleDonut/Donut';
import classes from './TechnologyTracker.css';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class TechnologyTracker extends Component{

    state={
        categoryScore:0,
        subcategoryScore:0,
    }
    returnScore=()=>{
        
        let type=this.props.choosenSubCategory.split('_')[0]
        let category=this.props.choosenSubCategory.split('_')[1]
        let subcategory=this.props.choosenSubCategory.split('_')[2]
        console.log(this.props)
        if(type==='Process') return {categoryScore:40,subcategoryScore:50}
        let categoryScore=0
        let subcategoryScore=0
        if(this.props.categoriesData){
            categoryScore=this.props.categoriesData[type][category].score
            subcategoryScore=this.props.categoriesData[type][category]['sub_categories'][subcategory]
        }
        // this.setState({categoryScore:categoryScore,subcategoryScore:subcategoryScore})
        // console.log(this.props)
        return {categoryScore,subcategoryScore}
    }

    technologyCircleColor(score){
        if(score<30) return 'rgb(205, 24, 24)'
        else if(score<60) return 'yellow'
        return 'rgba(36, 176, 44,1)'
    }

    render(){
        return(
            <Row noGutters>
                <Col xs={4} md={12} lg={12}>
                    <Donut radius={[57 ,70]} data={{name:this.props.choosenSubCategory.split('_')[1], value:this.returnScore().categoryScore}}></Donut>
                </Col>
                <Col  xs={4} md={12} lg={12} style={{color:"#fff", display:"grid",marginTop:30}}>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div className={classes.arrow}>▲</div>
                        <div className={classes.score}>{this.returnScore().subcategoryScore.toFixed(0)}%</div>
                    </div>
                    <p className={classes.subCatName}>
                        {this.props.choosenSubCategory.split('_')[2]}
                    </p>
                </Col>
                {this.props.showTechOnTracker?
                <Col xs={4} md={12} lg={12}>
                    <div style={{width:"101px", height:"101px", margin:"0 auto",marginTop:"30px"}}>
                        <svg height="100" width="100">
                        <defs>
                            <filter id="f1" x="-10%" y="-10%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result='coloredBlur' />
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in='SourceGraphic'></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                            <circle cx="50" cy="50" r="40"  fill={this.technologyCircleColor(this.props.technologyScore)} filter="url(#f1)"/>
                        </svg>
                        <div style={{color:(this.props.technologyScore>=30)&&(this.props.technologyScore<=60)?'black':"#fff", position:"relative",top:"-70px",textAlign:"center",fontSize:"22px"}}>{this.props.technologyScore}%</div>
                    </div>
                    <p style={{color:"#fff", textAlign:"center", margin:0,fontSize:18}}>{this.props.showTechOnTracker}</p>
                </Col>
                 :null}
                {/* // :null} */}
                
            </Row>
        )
    }
}

const currentQuarter=(props)=>{
    // console.log(props)
    if(props.length>0){
      let t1=new Date(props[0].time)
      let t2=new Date(props[1].time)
      if(t1>t2) return props[0]
      return props[1]
    }
}
const mapStateToProps=state=>{
    // console.logs(state)
    return{
        categoriesData:state.fetchData.data
    }
}
export default connect(mapStateToProps)(TechnologyTracker)