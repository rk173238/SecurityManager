import React, {Component} from 'react';
import classes from './HomePage.css';
import Loading from '../../common-components/Loading/Loading';
import OperationalTracks from './components/OperationalTracks/OperationalTracks';
import { withRouter } from 'react-router';
import CategoryTrendsDialog from './components/CategoryTrendsDialog/CategoryTrendsDialog'
import HomePageScores from './components/HomePageScores/HomePageScores.js';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      newData:[],
      openCategoryTrendsDialog:false,
      clickedTrend:'',
    }
  }
  // static getDerivedStateFromProps(nextProps,prevState){
    
  //   if(nextProps.newData.length!==0){
     
  //     return {newData:nextProps.newData}
  //   }
  //   else{
  //     return prevState;
  //   }
  // }
  currentQuarter=()=>{
    let t1=new Date(this.state.newData[0].time)
    let t2=new Date(this.state.newData[1].time)
    if(t1>t2) return 0
    return 1
  }
  onTechClickHandler=(name)=>{
    // console.log(this.props.history,name)
    this.props.history.push({pathname:'/home/details/technology/scoredetails'})
  }
  clickedTrend=(practice)=>{
    // console.log(category)
    this.setState({openCategoryTrendsDialog:true,practice:practice})
  }
  closeCategoryTrendsDialog=()=>{
    this.setState({openCategoryTrendsDialog:false})
  }
  
  render(){
    if((this.props.login&&!this.props.fetchedData)||this.props.fetchingData){
      return(
        <Loading/>
      );
    }
    return(
      <div className={classes.flexContainer} style={{backgroundColor:'transparent'}}>
      
        <HomePageScores></HomePageScores>

        {console.log(this.state)}
        <OperationalTracks 
                    data={this.props.newData}
                    onTechClickHandler={this.onTechClickHandler}
                    clickedTrend={this.clickedTrend}></OperationalTracks>
        <CategoryTrendsDialog 
          openCategoryTrendsDialog={this.state.openCategoryTrendsDialog} 
          closeCategoryTrendsDialog={this.closeCategoryTrendsDialog}
          clickedTrend={this.state.clickedTrend}
          practice={this.state.practice}></CategoryTrendsDialog>
        {/* <ShortcutButtons admin={this.props.admin}/> */}
      </div>
    );
  }
}
export default withRouter(HomePage)