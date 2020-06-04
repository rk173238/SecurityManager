import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import InputField from '../InputField/InputField';
import Button from '@material-ui/core/Button';
import classes from './TechnologyConfig.css';
import { withStyles } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
const CustomTableCell = withStyles(theme => ({
  head: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
  body: {
    color: '#fff',
  },
  footer:{
    color: 'rgba(255, 255, 255, 0.75)',

  }
}))(TableCell);

const CustomCheckBox= withStyles(theme=>({
  root:{
    color:'#fff',
    '&$checked': {
      color: 'rgba(255, 255, 255, 0.75)',
    },
  },
  disabled:{
  },
  checked:{}
}))(Checkbox)
const TechnologyConfig=(props)=>{
  return (
    <Paper className={classes.techTableContainer}>
      <Table className={classes.techTable}>
        <TableHead>
          <TableRow>
            <CustomTableCell >Selection</CustomTableCell>
            <CustomTableCell >Technology</CustomTableCell>
            <CustomTableCell >Weightage (%)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {props.data.map((tech,i)=>tech.useCases.length!==0?(
            <TableRow key={i}>
              <CustomTableCell component="th" scope="row">
                <CustomCheckBox checked={props.state[tech.technology.toLowerCase()]}
                        onChange = {props.onChangeCheckBox}
                        name = {tech.technology.toLowerCase()}/>
              </CustomTableCell>
              <CustomTableCell >{tech.technology==='Performance'?'Solarwinds':tech.technology}</CustomTableCell>
              <CustomTableCell >
                <InputField type='number'
                            disabled={!(props.state[tech.technology.toLowerCase()]^props.state.valid)}
                            name={tech.technology.toLowerCase()}
                            value={props.state.technologyWeightageList.length!==0?props.state.technologyWeightageList.find(t=>Object.keys(t).includes(tech.technology.toLowerCase()))[tech.technology.toLowerCase()]:0}
                            onChange = {props.onChangeTechnologyWeightage.bind(this,tech.technology.toLowerCase())}
                            placeholder={"Weightage"}/>
              </CustomTableCell>
            </TableRow>
          ):null)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <CustomTableCell >
            </CustomTableCell>
            <CustomTableCell >
            </CustomTableCell>
            <CustomTableCell numeric>
              <Button onClick={props.handleTechnologyWeightageValidate}
                      disabled={props.state.valid}
                      variant="contained">Validate</Button>
              {props.state.error?<p>Sum Should be 100</p>:null}
            </CustomTableCell>
          </TableRow>
        </TableFooter>

      </Table>
    </Paper>
  )
}
export default TechnologyConfig;
