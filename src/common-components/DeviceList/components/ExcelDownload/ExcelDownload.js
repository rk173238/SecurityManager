import React from "react";
import ReactExport from "react-export-excel";
import IconButton from '@material-ui/core/IconButton';
import DownloadIcon from '@material-ui/icons/FileDownload';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const ExcelDownload =(props)=> {
  let name=props.devData.devType+' Device List For '+props.devData.techName+' '+props.devData.useCaseName
  return (
      <ExcelFile filename={name} element={(<IconButton style={{padding: 12,marginTop: -16}}>
                            <DownloadIcon style={{fill:'#000'}}/>
                          </IconButton>)} >
          <ExcelSheet data={props.devData.devData} name={JSON.parse(localStorage.date)[0].split('T')[0]}>
              <ExcelColumn label="Device Name" value="deviceName"/>
              <ExcelColumn label={props.devData.useCaseName+" Data"} value="useCaseData"/>
              <ExcelColumn label="Compliance Status" value="subClass"/>
              <ExcelColumn label="Compliance Score" value="deviceCompliance"/>
          </ExcelSheet>
      </ExcelFile>
  );
}
export default ExcelDownload;
