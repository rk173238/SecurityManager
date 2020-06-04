import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
import Settings from 'material-ui/svg-icons/action/settings';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import MindMap from '../Icons/MindMap/MindMap';
// import HeatMap from '../Icons/HeatMap/HeatMap';
import classes from './ShortcutButtons.css';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';

const styles = {

  mediumIcon: {
    width: 48,
    height: 48,
    color:'rgb(0, 188, 212)'
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  }

};

const ShortcutButtons=(props)=>(
  <div className={classes.configButtons}>
{  props.admin?  (<Button component={Link} to="/config"
            className={classes.btn}>
              <Settings style={styles.mediumIcon}/><br/>Configure
    </Button>):null}
    <Button component={Link} to="/smcmap"
            className={classes.btn}>
              <MindMap style={styles.mediumIcon}/><br/>SMC Map
    </Button>
    <Button component={Link} to="/config"
            className={classes.btn}>
              <ContentCopy style={styles.mediumIcon}/><br/><p>Reports</p>
    </Button>

  </div>
);

export default ShortcutButtons;
  //<FlatButton label="Donut Charts" icon={<DonutLarge style={styles.mediumIcon}/>} primary={true} className='btn'/>
//    <FlatButton label="Heat Map" containerElement={<Link to="/heatmap" />} icon={<HeatMap style={styles.mediumIcon}/>} primary={true} className={classes.btn}/>
/*     <FlatButton label="Configure" containerElement={<Link to="/config" />} icon={<Settings style={styles.mediumIcon}/>} primary={true} className={classes.btn} />
  <FlatButton label="SMC Map" containerElement={<Link to="/smcmap" />} icon={<MindMap style={styles.mediumIcon}/>} primary={true} className={classes.btn}/>
    <FlatButton label="Reports" containerElement={<Link to="/report" />}  icon={<ContentCopy style={styles.mediumIcon}/>} primary={true} className={classes.btn}/>
*/
