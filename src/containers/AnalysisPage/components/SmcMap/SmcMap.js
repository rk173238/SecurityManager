import React,{Component} from 'react'
import MindMap from './MindMap'
import {dataService} from '../../../../services/data_service'
import {deviceService} from '../../../../services/device_service'
import DeviceList from '../../../../common-components/DeviceList/DeviceList'
import {connect} from 'react-redux'
import {deviceActions} from '../../../../actions'
import $ from 'jquery';
import {scrollbar} from '../../../../commonfiles/scrollbar.css';
import Loading from '../../../../common-components/Loading/Loading'
import { dataConstants } from '../../../../constants'

class SmcMap extends Component{

    state={
        mapData:'',
        deviceList:''
    }
    getColor=(v)=>{
        if (v <= 40 ||v==='Critical') return '#c0392b';
        else if ((v > 40 && v <= 60)||v==='Medium') return '#f39c12';
        else if (v > 60 || v==='Low') return '#27ae60';
        else return '';
    }
    getUsecaseType=(v)=>{
        if (v <= 40 ||v==='Critical') return 'critical';
        else if ((v > 40 && v <= 60)||v==='Medium') return 'medium';
        else if (v > 60 || v==='Low') return 'low';
        else return '';
    }
    nameConverter=(name)=>{
        var s=""
        name.split('_').map(d=>{
           s=s+" "+ d.split('')[0].toUpperCase()+d.split('').splice(1).join('')
        })
        return s;
    }
    componentDidMount=()=>{
        var data={name:'SMC',children:[]}

        setTimeout(() => {
            // this.makeCategoryData(this.props.categoryData['Technology'])
            this.makeCategoryData(this.props.categoryData)
        }, 2500);
         
    } 
    makeCategoryData=(props)=>{
        var data={name:'SMC',children:[]}
        Object.keys(props).map(infra=>{
            var inf={name:infra,score:props[infra].score,children:[],type:'infra',collapsed:true}
            Object.keys(props[infra]).map(category=>{
                var cat={name:category,value:props[infra][category].score,children:[],type:'category',itemStyle:{color:this.getColor(props[infra][category].score)},collapsed:true}
                Object.keys(props[infra][category]['sub_categories']).map(subcategory=>{
                    cat.children.push({name:subcategory,value:props[infra][category]['sub_categories'][subcategory],children:[],type:'subCategory',category,itemStyle:{color:this.getColor(props[infra][category]['sub_categories'].score)}})
                })
                inf.children.push(cat);
            })
            data.children.push(inf)
        })
        // console.log(data)
        this.makeSubcategoryData(data)
    }
    makeSubcategoryData=(data)=>{
        let dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
        dataService.fetchSubCategoryData('','all',dateRange).then(res=>{
            // console.log(res,data)
            data.children.map(infra=>{
                infra.children.map(cat=>{
                    cat.children.map(subcategory=>{
                        var techData=[]
                        Object.keys(res[subcategory.name]).map((technology,ti)=>{
                            techData.push({name:technology,value:res[subcategory.name][technology].score,children:[],type:'technology',
                            category:cat.name,subcategory:subcategory.name,itemStyle:{color:this.getColor(res[subcategory.name][technology].score)}})
                            
                            Object.keys(res[subcategory.name][technology].usecases).map(usecase=>{
                                techData[ti].children.push({
                                name:dataConstants.usecaseNameMap[usecase]?dataConstants.usecaseNameMap[usecase]:this.nameConverter(usecase),
                                value:res[subcategory.name][technology].usecases[usecase],children:[],type:'usecase',
                                category:cat.name,subcategory:subcategory.name,technology,usecase,
                                usecaseType:this.getUsecaseType(res[subcategory.name][technology].usecases[usecase]),
                                itemStyle:{color:this.getColor(res[subcategory.name][technology].usecases[usecase])}
                                })
                            })
                        })
                        subcategory.children=techData;                     

                    })
                })
            })
            // console.log(data)
            this.setState({mapData:data})
        })
        
    }
    fetchDeviceData=(clickedData)=>{
        var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
        this.props.onFetchDevices(clickedData.technology,clickedData.usecase,'all',dateRange,'')
        // deviceService.fetchDevices(clickedData.technology,clickedData.name,clickedData.usecaseType,dateRange,'').then(res=>{
        //     this.setState({deviceList:res,fetchedDeviceData:true,techName:clickedData.technology,usecase:clickedData.name,usecaseScore:clickedData.value})
        //     // console.log(res)
        // })
        setTimeout(() => {
            this.setState({deviceList:true,techName:clickedData.technology,usecaseScore:clickedData.value,usecase:clickedData.usecase})
        }, 1000);
    }
    onChartClick=(clickedData)=>{
        console.log(clickedData)
        if(clickedData.type==='usecase'){
            this.setState({deviceList:false})
            this.fetchDeviceData(clickedData)
            setTimeout(()=>{
                $('#analysisPage').animate({scrollTop: $('#mindMap').height()},800);
                // $("#analysisPage").scrollTop($("#analysisPage")[0].scrollHeight);
            },1200)
        }
    }

    render(){

        return(
            <div 
                id="divSmcMap" 
                style={{overflowX:"auto"}}
                >
                {/* {console.log(this.state.data)} */}
                {this.state.mapData?
                    <MindMap data={this.state.mapData} onChartClick={this.onChartClick}></MindMap>
                :<Loading></Loading>}
                
                {this.state.deviceList?
                <div style={{minHeight:"50vh"}}>
                    <DeviceList techName={this.state.techName} usecase={this.state.usecase} usecaseScore={this.state.usecaseScore}></DeviceList>
                </div>:null}
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        onFetchDevices:(technology,usecase,type,dateRange,systemName)=>dispatch(deviceActions.fetchDevices(technology,usecase,type,dateRange,systemName))
    }
}
const mapStateToProps=state=>{
    return {
        categoryData:state.fetchData.data,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SmcMap)