import React,{Component} from 'react'
import LineChart from './LineChart'
import {dataService} from '../../../../../../services'
class DataSecChart extends Component{
    state={
        tech:[],
        people:[],
        process:[],
    }
    componentWillMount=()=>{
    }
    
    render(){
        return(
            <React.Fragment>
                {this.state.tech&&this.state.people&&this.state.process?
                <LineChart ></LineChart>:null}
                {/* {console.log(this.state.people)} */}
            </React.Fragment>
        )
    }
}
export default DataSecChart;