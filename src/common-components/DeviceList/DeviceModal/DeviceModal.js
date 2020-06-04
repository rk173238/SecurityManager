import React,{Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slide from '@material-ui/core/Slide';
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography';
import classes from './DeviceModal.css';
import {scrollbar} from '../../../commonfiles/scrollbar.css';

const injectStyles = {
  fontFamily:"\"Ubuntu mono\", monospace"
}

class DeviceModal extends Component{
    state={
      showFullList:false,
    }
    capitalizeFirstLetter = (string) => {
        let str='';
        string = string.split("_")
        string.map(string=>{
            str+=string.charAt(0).toUpperCase() + string.slice(1)+' ';
        })
        return str;
    }
    classifySystemName=()=>{
        if(this.props.techName==="EC2-AWS") return 'instance_name'
        else if(this.props.techName==='S3-AWS') return 'bucket_name'
        else return 'system_name'
    }
    showFullList=()=>{
      this.setState({showFullList:!this.state.showFullList})
    }

    render(){
        
        return(
            <React.Fragment>
                {/* {this.props.data? */}
                <Dialog 
                  className={classes.dialog} 
                  open={this.props.open} 
                  onClose={this.props.close} 
                  TransitionComponent={transition}
                >
                    {console.log(this.props)}
                    <DialogTitle><b style={injectStyles}>Device Detail</b></DialogTitle>
                    <DialogContent className={scrollbar}>
                      <div style={injectStyles}>
                        
                        {!this.state.showFullList&&this.props.data?
                        <div>
                          {generateList([this.props.data[0]],this.props.useCaseName)}
                        </div>:
                        <div style={{display:'flex'}}>
                            <div>
                                {generateFullList([this.props.data[0]])}
                            </div>
                            <div>
                                {generateFullList([this.props.data[1]])}
                            </div>
                        </div>}
                        <button onClick={this.showFullList}>{this.state.showFullList?'Less Details':'More Details'}</button>
                      </div>
                    </DialogContent>
                    {/* <DialogActions>
                        <div>button</div>
                        <div>button</div>
                    </DialogActions> */}
                </Dialog>
                {/* :null} */}
            </React.Fragment>
        )
    }
}

const transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  function isJsonString(str) {
    try {
        JSON.parse(str.split("'").join('"'));
    }
    catch (e) {
        return false;
    }
    return true;
}
function whatIsIt(object) {
  var stringConstructor = "test".constructor;
  var arrayConstructor = [].constructor;
  var objectConstructor = {}.constructor;
    if (object === null) {
        return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{"null"}</Typography>);
    }
    else if (object === undefined) {
        return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{"undefined"}</Typography>);
    }
    else if (typeof(object) === 'number') {
        return (<Typography style={{fontFamily:"inherit"}} component="span" style={injectStyles} className={classes.inline} color="textPrimary">{String(object)}</Typography>);
    }
    else if (typeof(object) === 'boolean') {
        return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{String(object)}</Typography>);
    }
    else if (object.constructor === stringConstructor) {
        if(isJsonString(object)){
          if(!parseInt(object,10)){
            return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{object.length===1?parseInt(object,10):object}</Typography>)
          }
          // console.log(object)
          return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{parseInt(object,10)?object:JSON.parse(object.split("'").join('"')).join(', ')}</Typography>)
        }
        else {
          return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{object}</Typography>)
        }
    }
    else if (object.constructor === arrayConstructor) {
      // for (var i in object){

      // }
        return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{object.join(', ')}</Typography>)
    }
    else if (object.constructor === objectConstructor) {
      let b=[]
      Object.keys(object).forEach((u,h)=>{
        b.push(
                <Typography key={h} component="span" style={injectStyles} className={classes.inline} color="textPrimary">
                  {u}-{JSON.stringify(object[u])}
                </Typography>
              )
      })
      // return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{JSON.stringify(object)}</Typography>)
      return b
    }
    else {
        return (<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{"don't know"}</Typography>);
    }
}
function generateList(data,useCaseName){
  console.log(data);
  let key = useCaseName
  if(data){
    let val=((data[0][key].data?data[0][key].data.length===0:false)||data[0][key].data==='')?(<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{"None"}</Typography>):whatIsIt(data[0][key].data)
    console.log(data[0][key].data,val)
    return <ListItem ><ListItemText className={classes.inline} primary={<span style={injectStyles}>{useCaseName}</span>} secondary={<React.Fragment>{val}</React.Fragment>}></ListItemText></ListItem>
  }
  return <ListItem><ListItemText className={classes.inline} style={injectStyles} primary="No Data Found"></ListItemText></ListItem>
}
function generateFullList(data){
  console.log('Full List',data);
  let buffer = []
  if(data){
    if(data.length===0){
      buffer.push(<ListItem><ListItemText className={classes.inline}>No Data Found</ListItemText></ListItem>)
    }
    else{
      for(var i in data[0]){
        if(data[0][i]){
          let dat=(data[0][i].data||data[0][i].data===0||data[0][i].data===null)?data[0][i].data:data[0][i]
          let val=((dat?dat.length===0:false)||dat==='')?(<Typography component="span" style={injectStyles} className={classes.inline} color="textPrimary">{"None"}</Typography>):whatIsIt(dat)
          console.log(dat,val)
          buffer.push(<ListItem key={i}><ListItemText className={classes.inline} primary={<b style={injectStyles}>{i.split('_').join(' ').toUpperCase()}</b>} secondary={<span style={injectStyles}>{val}</span>}></ListItemText></ListItem>)
        }
      }
    }
  }
  else{
    buffer.push(<ListItem><ListItemText className={classes.inline}>No Data Found</ListItemText></ListItem>)
  }
  return buffer
}
export default DeviceModal;
