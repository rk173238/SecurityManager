import React,{Component} from 'react'
import ProductView from './ProductView/ProductView';
import {analysisService} from '../../services/analysis_service';
import {scrollbar} from '../../commonfiles/scrollbar.css';
class InventoryPage extends Component{
    state={
        technologiesData:'',
    }
    componentWillMount=()=>{
        analysisService.fetchAllTechnologyData().then(res=>{
            this.setState({technologiesData:res})
        })
    }
    render(){

        return(
            <div style={{overflowY:"auto", height:"100%"}} className={scrollbar}>
                <ProductView data={this.state.technologiesData}></ProductView>
            </div>
        )
    }
}
export default InventoryPage;