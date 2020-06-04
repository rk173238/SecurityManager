import React from "react";
import ReactExport from "react-export-excel";
import IconButton from '@material-ui/core/IconButton';
import DownloadIcon from '@material-ui/icons/FileDownload';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RefreshIcon from '@material-ui/icons/Refresh';
import Tooltip from '@material-ui/core/Tooltip';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const ExcelDownload =(props)=> {
  let name=''
        if(props.downloadVar==='tech'){
          name='Technology Report'
        }
        else if(props.downloadVar==='nonCompliant'){
          name='Non-Compliant Device Report'
        }
        else{
          name='Compliant Device Report'
        }

        return (
            <ExcelFile filename={name} element={(
                <Tooltip title="Excel">
                  <IconButton disabled={props.success} >
                    {props.success?<CheckCircleIcon style={{fill:'#fff'}}/>:props.error?<RefreshIcon style={{fill:'#fff'}}/>:<DownloadIcon style={{fill:'#fff'}}/>}
                  </IconButton>
                </Tooltip>)} >
                <ExcelSheet data={()=>props.handleDownload(props.downloadVar,props.technology,'excel')} name={JSON.parse(localStorage.date)[0].split('T')[0]}>
                    <ExcelColumn label="Category" value="mainCategory"/>
                    <ExcelColumn label="SubCategory" value="subCategory"/>
                    <ExcelColumn label="Technology" value="technology"/>
                    <ExcelColumn label="UseCase" value="useCaseName"/>
                    <ExcelColumn label="Compliance Score" value="useCaseCompliance"/>
                    <ExcelColumn label="Compliant" value={(col)=>col.lowDeviceCount<2?col.lowDeviceCount+' device':col.lowDeviceCount+' devices'}/>
                    <ExcelColumn label="At Risk" value={(col)=>col.mediumDeviceCount<2?col.mediumDeviceCount+' device':col.mediumDeviceCount+' devices'}/>
                    <ExcelColumn label="Critical" value={(col)=>col.criticalDeviceCount<2?col.criticalDeviceCount+' device':col.criticalDeviceCount+' devices'}/>

                </ExcelSheet>
            </ExcelFile>
        );
}
export default ExcelDownload;
/* <ExcelColumn label="Top 5 Non-Compliant Devices" value={(col)=>{
    if(col.useCaseData.length===0){
      return 'No Devices Found'
    }
    let s=[]
    col.useCaseData.forEach((e,i)=>s.push((i+1)+') Device Name: '+e.deviceName+', Compliance Status: '+e.subClass+", Compliance Score:"+e.deviceCompliance))
    return s.join(', ')
}} /> */
