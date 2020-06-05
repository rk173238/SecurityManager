import React,{Component} from 'react'
import TechnologyMeter from '../../../../../../common-components/echarts/TechnologyMeter/TechnologyMeter'
import UseCases from '../../../../../../common-components/UseCases/Usecases'
import UseCaseBar from '../../../../../../common-components/echarts/UseCaseBar/UseCaseBar';
import {dataService} from '../../../../../../services'
import {connect} from 'react-redux'
import { dataActions } from '../../../../../../actions';
import hr from './style.css';
class TechnologiesWithUseCases extends Component{


  state={
    subCategory:'',
    data:''
  }
  componentWillMount=()=>{
    this.setState({subCategory:this.props.choosenSubCategory.split('_')[2]})
    // this.fetchdata(this.props.choosenSubCategory.split('_')[2],localStorage.getItem('date'))
  }
  componentWillUnmount=()=>{
    this.props.onClearSubcategory()
  }
  fetchdata=(props,date)=>{
    // console.log(this.props)
    // if(this.props.choosenSubCategory.split('_')[0]!=='Process'){
    console.log('fetchData in techwithusecase')
    // this.props.onfetchSubcategoryData(props,'',[JSON.parse(date)[1],JSON.parse(date)[2]])
  // }else{
  //     this.setState({ShowProcess:true})
  //   }
  }

    render(){
        return(
            <div>
              {console.log(Object.keys(this.props.subCatData))}
              {Object.keys(this.props.subCatData).map(technology=>(
                <div key={technology} style={{marginTop:"15px"}}>
                {/* {console.log(technology)} */}
                <div style={{width:'100%',display:'flex',position:'relative',direction:'ltr',backgroundColor:'transparent'}}>
                <TechnologyMeter id={technology} score={this.props.subCatData[technology].score} showTechOnTracker={this.props.showTechOnTracker}></TechnologyMeter>
                <UseCases usecaseData={this.props.subCatData[technology].usecases} 
                  technology={technology} showDeviceList={this.props.showDeviceList} techScore={this.props.subCatData[technology].score} type={this.props.choosenSubCategory.split('_')[0]}></UseCases>
                </div>
                <hr className={hr.hr1} />
                </div>
              ))
              
              }
              
              {/* {this.props.processSubcatData&&this.state.ShowProcess?Object.keys(this.props.processSubcatData).map(technology=>(
                <div key={technology}>
                <div style={{width:'100%',display:'flex',position:'relative',direction:'ltr',backgroundColor:'transparent'}}>
                <TechnologyMeter id={technology.split(' ').join('')} score={this.props.processSubcatData[technology].score} showTechOnTracker={this.props.showTechOnTracker}></TechnologyMeter>
                <UseCases usecaseData={this.props.processSubcatData[technology].usecases} technology={technology} 
                  showDeviceList={this.props.showDeviceList} type='Process'></UseCases>
                </div>
                <hr className={hr.hr1} />
                </div>
              ))
              :null
              } */}
                

                  
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
  return {
      onfetchSubcategoryData:(props,type,date)=> dispatch(dataActions.fetchSubCategoryData(props,type,date)),
      onClearSubcategory:()=>dispatch(dataActions.clearSubCategoryData())
  }
};
const mapStateToProps=state=>{
  // console.log(state)
  return{
    subcatData:state.fetchSubCategoryData.subCategoryData,
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps,)(TechnologiesWithUseCases)