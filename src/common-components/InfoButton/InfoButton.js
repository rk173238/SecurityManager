import React,{Component} from 'react'
import classes from './InfoButton.css'
import InfoIcon from '@material-ui/icons/Info';
import ReactTooltip from 'react-tooltip';

class InfoButton extends Component{


    render(){

        return(
            <div 
                className={classes.root} 
                data-background-color="#062e69" 
                data-text-color="#fff" 
                data-tip={this.props.description?this.props.description:'No Description'}>
                <ReactTooltip />
                <InfoIcon style={{
                        fontSize:"18px",
                        boxShadow:"2px 2px 10px #000",
                        borderRadius:"50%",
                }} />
            </div>
        )
    }
}
export default InfoButton;