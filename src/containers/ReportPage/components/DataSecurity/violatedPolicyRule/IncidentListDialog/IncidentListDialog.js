import React,{Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './IncidentListDialog.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
class IncidentListDialog extends Component{

    componentDidMount=()=>{
        console.log(this.props)
    }
    render(){

        return(
            <div>
                <Dialog className={classes.dialog} open={this.props.open} onClose={this.props.close}>
                    <DialogTitle>Repository List</DialogTitle>
                    <DialogContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Incident</TableCell>
                                    <TableCell>Violated Policy Rule</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.props.data.map((incident,i)=>(
                                    <TableRow key={i} onClick={()=>this.props.openIncidentModal(incident)}>
                                        <TableCell>{incident.time}</TableCell>
                                        <TableCell>{incident.incident}</TableCell>
                                        <TableCell>{incident.violatedPolicyRule}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default IncidentListDialog;