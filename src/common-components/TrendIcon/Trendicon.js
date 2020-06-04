import React,{Component} from 'react'
import classes from './TrendIcon.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
class TrendIcon extends Component{


    render(){

        return(
            <div 
                className={classes.root} 
                title={this.props.description?this.props.description:'No Description'} 
                onClick={this.props.clickedTrend}
            >
                <TrendingUpIcon 
                    style={{
                        fontSize:"20px", 
                        zIndex:10,
                        position:"absolute", 
                        left:"5px",
                        top:"5px",
                        boxShadow:"-2px 2px 10px #000",
                        borderRadius:"50%",
                }}></TrendingUpIcon>
            </div>
        )
    }
}
export default TrendIcon;