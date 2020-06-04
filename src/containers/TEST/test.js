import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default class Test extends Component {
    state = {
        Dialog:false
    }
    closeDialog = () => {
        this.setState({Dialog:false})
    }
    openDialog = () => {
        this.setState({Dialog:true})
    }
    render() {
        return (
            <React.Fragment>
                <button type="button" onClick={this.openDialog}>OPEN</button>
                <Dialog open={this.state.Dialog} onClose={this.closeDialog}>
                    <DialogTitle>Hey There</DialogTitle>
                    <DialogContent>
                        Some content
                    </DialogContent>
                </Dialog>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <p>Expansion Panel 1</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </p>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            Hey Look, 
            {/* <InfoOutlinedIcon /> */}
            {/* <InfoOutlinedIcon style={{fontSize:40,cursor:'pointer'}} /> */}

            

            </React.Fragment>
        )
    }
}