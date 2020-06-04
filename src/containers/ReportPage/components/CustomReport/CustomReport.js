import React from 'react';
import './CustomReport.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MultiSelect from './MultiSelect/MultiSelect'
import Button from '@material-ui/core/Button';

const CustomReport=(props)=>{
  return (
    <Paper style={{backgroundColor:'rgb(65, 81, 97)',width:'100%',color:'#000'}}>
      <Grid container spacing={24} style={{margin:'0 -12px',padding:10}}>
        <Grid item xs={12}>
          <MultiSelect label={'Category'}
                      placeholder={"Select Category"}
                      options={props.categoryList}
                      handleChangeMultiSelect={props.handleChangeMultiSelect}
                      value={props.multiCategory}/>
          <MultiSelect label={'SubCategory'} placeholder={"Select SubCategory"} options={props.subCategoryList}
        handleChangeMultiSelect={props.handleChangeMultiSelect}
        value={props.multiSubCategory}/>
        <MultiSelect label={'Technology'} placeholder={"Select Technology"} options={props.techList}
        handleChangeMultiSelect={props.handleChangeMultiSelect}
        value={props.multiTechnology}/>
        <MultiSelect label={'UseCase'} placeholder={"Select UseCase"} options={props.useCaseList}
        handleChangeMultiSelect={props.handleChangeMultiSelect}
        value={props.multiUseCase}/>
        </Grid>
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={6}>

        </Grid>
        <Button onClick={()=>props.handleCustomDownload(props.multiCategory?props.multiCategory:[],props.multiSubCategory?props.multiSubCategory:[],props.multiTechnology?props.multiTechnology:[],props.multiUseCase?props.multiUseCase:[])}

                variant="contained" style={{marginLeft:'42%'}}>Download</Button>
      </Grid>
    </Paper>
  )
}
export default CustomReport;
