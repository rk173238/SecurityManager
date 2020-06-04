import React,{Fragment} from 'react';
import Link from 'react-router-dom/Link';
import classes from './LoggedIn.css';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import MindMapIcon from '../../../Icons/MindMap/MindMap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
const LoggedIn = (props) => (
  <Fragment>
    {props.admin?(<IconButton className={classes.btn} component={Link} to="/config">
              <SettingsIcon />
          </IconButton>):null}
    <IconButton className={classes.btn} component={Link} to="/smcmap">
              <MindMapIcon />
    </IconButton>
    <IconButton className={classes.btn} component={Link} to="/report">
              <ContentCopyIcon />
    </IconButton>
    <IconButton   onClick={props.handleMenu}
                  className={classes.vertBtn}
                  color="inherit">
        <AccountCircleIcon />
    </IconButton>
    <Menu id="menu-appbar"
          className={classes.menu}
          anchorEl={props.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}

          open={props.menuOpen}
          onClose={props.handleClose}>
      <MenuItem style={{color:'#fff',paddingTop:12,paddingBottom:12,opacity:1}} disabled={true}>{'Welcome, '+props.user}</MenuItem>
        <hr/>
      {props.admin?<MenuItem onClick={props.handleClose} component={Link} to="/admin" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Admin Center</MenuItem>:null}
      <MenuItem onClick={props.handleClose} component={Link} to="/trends" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Trends</MenuItem>
      <MenuItem onClick={props.handleClose} component={Link} to="/deviceTrends" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Device Trends</MenuItem>
      <MenuItem onClick={props.handleClose} component={Link} to="/pwd" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Change Password</MenuItem>
      <MenuItem onClick={props.handleClose} component={Link} to="/help" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Help</MenuItem>
      <MenuItem onClick={props.handleClose} component={Link} to="/logout" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Logout</MenuItem>
    </Menu>

  </Fragment>
);

export default LoggedIn;
/*
      <MenuItem style={{color:'#fff',paddingTop:12,paddingBottom:12,opacity:1}} disabled={true}>{'Location: '+localStorage.location}</MenuItem>

// import HeatMap from '../../../Icons/HeatMap/HeatMap';
<IconButton tooltip='Heat Map' tooltipPosition='bottom-center'
            tooltipStyles={{color:'#fff',backgroundColor:'#000',fontSize:15}}
            containerElement={<Link to="/heatmap" />} className={classes.btn} >
            <HeatMap />
</IconButton>
v0 MenuItem
<IconMenu
        id="menu"
        iconButtonElement={
          <IconButton className={classes.vertBtn}><AccountCircleIcon /></IconButton>
        }
        menuStyle={{backgroundColor:' #2c3e50'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
          <MenuItem  style={{color:'#fff'}} disabled={true}>{'Welcome, '+props.user}</MenuItem>
          <hr/>
          <MenuItem primaryText="Change Password" containerElement={<Link to="/pwd" />} style={{color:'#fff',paddingTop:12,paddingBottom:12}}/>
          <MenuItem primaryText="Help" containerElement={<Link to="/help" />} style={{color:'#fff',paddingTop:12,paddingBottom:12}}/>
          <MenuItem primaryText="Logout" containerElement={<Link to="/logout" />} style={{color:'#fff',paddingTop:12,paddingBottom:12}}/>
    </IconMenu>


MUI v1 render
<IconButton
              aria-owns={props.menuOpen ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={props.handleMenu}
              className={classes.vertBtn}
              color="inherit"
            >
              <AccountCircleIcon />
</IconButton>

            <Menu id="menu-appbar"
                  className={classes.menu}
                  anchorEl={props.anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}

                  open={props.menuOpen}
                  onClose={props.handleClose}>
              <MenuItem style={{color:'#fff',paddingTop:12,paddingBottom:12}} disabled={true}>{'Welcome, '+props.user}</MenuItem>
                <hr/>
              <MenuItem component={Link} to="/pwd" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Change Password</MenuItem>
              <MenuItem component={Link} to="/help" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Help</MenuItem>
              <MenuItem component={Link} to="/logout" style={{color:'#fff',paddingTop:12,paddingBottom:12}}>Logout</MenuItem>
            </Menu>

      */
