import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DownloadIcon from '@material-ui/icons/FileDownload';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RefreshIcon from '@material-ui/icons/Refresh';
import Paper from '@material-ui/core/Paper';
import {dataConstants} from '../../../../constants'
import ExcelDownload from '../ExcelDownload/ExcelDownload'
import Tooltip from '@material-ui/core/Tooltip';
import './StandardReport.css';
const StandardReport=(props)=>{
  return (
    <Paper style={{backgroundColor:'rgb(65, 81, 97)',width:'100%',color:'#fff'}}>
      <List >
        <ListItem>
          <Typography style={{width:'50%',padding: '0', color:'#fff'}}>Technology Report :</Typography>
        <FormControl className='formControl' style={{color:'#ccc'}}>
            <InputLabel style={{color:'#ccc'}}>Technology</InputLabel>
            <Select
              value={props.technology}
              onChange={props.handleChange}
              input={<Input name="technology" style={{color:'#fff'}}/>}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {dataConstants.technologyList.map((tech,i)=>(
                <MenuItem value={tech} key={i}>{tech==='Performance'?'Solarwinds':tech}</MenuItem>
              ))}
            </Select>
            <FormHelperText style={{color:'#ccc'}}>For Technology Wise Report</FormHelperText>
          </FormControl>
          {props.technology!==''&&<ListItemSecondaryAction>
                  <ExcelDownload downloadVar='tech'
                                 technology={props.technology}
                                 success={props.successExcel}
                                 handleDownload={props.handleDownload}
                                 error={props.error} />
                               <Tooltip title="PDF">
                               <IconButton onClick={()=>props.handleDownload('tech',props.technology)} disabled={props.success}>
                    {props.success?<CheckCircleIcon style={{fill:'#fff'}}/>:props.error?<RefreshIcon style={{fill:'#fff'}}/>:<DownloadIcon style={{fill:'#fff'}}/>}
                  </IconButton>
                </Tooltip>
          </ListItemSecondaryAction>}
        </ListItem>

        <ListItem>
          <Typography style={{width:'50%',padding: '0', color:'#fff'}}>Non-Compliant UseCase Report :</Typography>


          <FormControl className='formControl' >
            <InputLabel style={{color:'#ccc'}}>Non-Compliant UseCase</InputLabel>
            <Select
              value={props.nonCompliant}
              onChange={props.handleChange}
              input={<Input name="nonCompliant" style={{color:'#fff'}}/>}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>Top 5</MenuItem>
              <MenuItem value={10}>Top 10</MenuItem>
              <MenuItem value={20}>Top 20</MenuItem>
            </Select>
            <FormHelperText style={{color:'#ccc'}}>For Top Non-Compliant UseCase Report</FormHelperText>
          </FormControl>
          {props.nonCompliant!==''&&<ListItemSecondaryAction>
            <ExcelDownload downloadVar='nonCompliant'
                           technology={props.nonCompliant}
                           success={props.successExcel}
                           handleDownload={props.handleDownload}
                           error={props.error} />
                <Tooltip title="PDF">
                  <IconButton onClick={()=>props.handleDownload('nonCompliant',props.nonCompliant)} disabled={props.success}>
                    {props.success?<CheckCircleIcon style={{fill:'#fff'}}/>:props.error?<RefreshIcon style={{fill:'#fff'}}/>:<DownloadIcon style={{fill:'#fff'}}/>}
                  </IconButton>
                </Tooltip>
          </ListItemSecondaryAction>}
        </ListItem>

        <ListItem>
          <Typography style={{width:'50%',padding: '0', color:'#fff'}}>Compliant UseCase Report :</Typography>
          <FormControl className='formControl'>
            <InputLabel style={{color:'#ccc'}}>Compliant UseCases</InputLabel>
            <Select
              value={props.compliant}
              onChange={props.handleChange}
              input={<Input name="compliant" style={{color:'#fff'}} />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>Top 5</MenuItem>
              <MenuItem value={10}>Top 10</MenuItem>
              <MenuItem value={20}>Top 20</MenuItem>
            </Select>
            <FormHelperText style={{color:'#ccc'}}>For Top Compliant UseCase Report</FormHelperText>
          </FormControl>
          {props.compliant!==''&&<ListItemSecondaryAction>
            <ExcelDownload downloadVar='compliant'
                           technology={props.compliant}
                           success={props.successExcel}
                           handleDownload={props.handleDownload}
                           error={props.error} />
                <Tooltip title="PDF">
                  <IconButton onClick={()=>props.handleDownload('compliant',props.compliant)} disabled={props.success}>
                    {props.success?<CheckCircleIcon style={{fill:'#fff'}}/>:props.error?<RefreshIcon style={{fill:'#fff'}}/>:<DownloadIcon style={{fill:'#fff'}}/>}
                  </IconButton>
                </Tooltip>
          </ListItemSecondaryAction>}
        </ListItem>
      </List>
    </Paper>
  )
}
export default StandardReport;
// withStyles(jssStyles)(
