import React,{Component} from 'react';
import CheckIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import classes from './ScoreBoxes.css';
import {Col} from 'react-bootstrap';

class ScoreBoxes extends Component{

    render(){
        return(
            <React.Fragment>
                <Col md={6} className={"mb-4  mb-md-0"}>
                <div 
                    className={classes.box}
                    style={{
                        backgroundColor:this.props.box[0].color,
                    }}
                >
                    <div className={classes.techName}>
                        {this.props.box[0].name}
                    </div>
                    <div className={classes.crossTickIcon}>
                        {this.props.box[0].score<70?
                        <CloseIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                        <CheckIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                    </div>
                    <p className={classes.score}>
                        {this.props.box[0].score}
                    </p>
                </div>

                <div 
                    className={classes.box}
                    style={{
                        backgroundColor:this.props.box[1].color,
                    }}
                >
                    <div className={classes.techName}>
                        {this.props.box[1].name}
                    </div>
                    <div className={classes.crossTickIcon}>
                        {this.props.box[1].score<70?
                        <CloseIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                        <CheckIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                    </div>
                    <p className={classes.score} >
                        {this.props.box[1].score}
                    </p>
                </div>
                </Col>

                <Col md={6}>
                <div 
                    className={classes.box}
                    style={{
                        backgroundColor:this.props.box[2].color,
                    }}
                >
                    <div className={classes.techName}>
                        {this.props.box[2].name}
                    </div>
                    <div className={classes.crossTickIcon}>
                        {this.props.box[2].score<70?
                        <CloseIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                        <CheckIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                    </div>
                    <p className={classes.score}>
                        {this.props.box[2].score}
                    </p>
                </div>

                <div 
                    className={classes.box}
                    style={{
                        backgroundColor:this.props.box[3].color,
                    }}
                >
                    <div className={classes.techName}>
                        {this.props.box[3].name}
                    </div>
                    <div className={classes.crossTickIcon}>
                        {this.props.box[3].score<70?
                        <CloseIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CloseIcon>:
                        <CheckIcon style={{fontSize:80,color:'rgba(255,255,255,0.4)'}}></CheckIcon>}
                    </div>
                    <p className={classes.score}>
                        {this.props.box[3].score}
                    </p>
                </div>
                </Col>
              </React.Fragment>
        )
    }
}
export default ScoreBoxes;