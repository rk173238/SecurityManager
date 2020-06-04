import React,{Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './DlpConfigDialog.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

class DlpConfigDialog extends Component{

    state={

    }
    componentWillMount=()=>{
        // console.log(this.props)
        var fieldName=Object.keys(this.props.data[0])[0];
        this.setState({fieldName:fieldName})
    }
    showDetails=(data)=>{
        this.setState({openDetailsDialog:true,detailData:data});
        // console.log(data)
    }
    render(){

        return(
            <div>
                
                <Dialog className={classes.dialog} open={this.props.open} onClose={this.props.close}>
                    <DialogTitle>{this.props.type}</DialogTitle>
                    <DialogContent>
                        {this.state.fieldName?
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{this.state.fieldName}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.data.map(d=>(
                                    <TableRow onClick={()=>this.showDetails(d)}>
                                        <TableCell>{d[this.state.fieldName]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>:null}
                    </DialogContent>
                </Dialog>
                {this.state.openDetailsDialog?
                    <Dialog open={this.state.openDetailsDialog} onClose={()=>this.setState({openDetailsDialog:false})}>
                        <DialogTitle>
                            More Detail
                        </DialogTitle>
                        <DialogContent>
                            <Table><TableBody>
                                {Object.keys(this.state.detailData).map(k=>(
                                    <TableRow>
                                        <TableCell>{k}</TableCell>
                                        <TableCell>{this.state.detailData[k]}</TableCell>
                                    </TableRow>
                                    // <ListItem key={k}>
                                    //     <ListItemText>{k}</ListItemText>
                                    //     <ListItemText>{this.state.detailData[k]}</ListItemText>
                                    // </ListItem>
                                ))}
                            </TableBody></Table>
                        </DialogContent>
                    </Dialog>
                :null}
            </div>
        )
    }
}
export default DlpConfigDialog