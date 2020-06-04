import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {scrollBar} from '../../../../../commonfiles/scrollbar.css'

class DeviceDetails extends Component {

    makeName = (name) => {
        return name.split('_').map(i=>i[0].toUpperCase()+i.slice(1)).join(' ')
    }

    render() {
        return(
            <React.Fragment>
                <Dialog open={this.props.open} onClose={this.props.closeDeviceDetails}>
                    <DialogTitle>{this.props.techName}</DialogTitle>
                    <DialogContent className={scrollBar}>
                        {Object.keys(this.props.deviceDetailsData).map((detail,i)=>{
                            // console.log("detail",detail,this.props.deviceDetailsData[detail])
                            return (
                                <div key={i}>
                                    <b>{this.makeName(detail)}</b>
                                    <p>{String(this.props.deviceDetailsData[detail])}</p>
                                </div>
                            )
                        })}
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        )
    }
}
export default DeviceDetails