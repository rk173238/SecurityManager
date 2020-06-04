import React from 'react';
import InfoOutline from '@material-ui/icons/InfoOutline';
import FilterList from '@material-ui/icons/FilterList';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import classes from './IconButtons.css'
const styles={
  textAlign:'right',
  
}
const IconButtons=(props)=>(
  <div style={styles}>
      <IconButton className={classes.btn} onClick={props.click}>
        <InfoOutline />
      </IconButton>

      <IconMenu

          iconButtonElement={
            <IconButton className={classes.btn}>
              <FilterList />
            </IconButton>
          }
          menuStyle={{backgroundColor:' #2c3e50'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
            <MenuItem primaryText="Today" onClick={props.click} style={{color:'#fff',paddingTop:12,paddingBottom:12}}/>
            <MenuItem primaryText="Weekly" onClick={props.click} style={{color:'#fff',paddingTop:12,paddingBottom:12}}/>
            <MenuItem primaryText="Monthly" onClick={props.click} style={{color:'#fff',paddingTop:12,paddingBottom:12}}/>
            <MenuItem primaryText="Yearly" onClick={props.click} style={{color:'#fff',paddingTop:12,paddingBottom:12}}/>
      </IconMenu>
  </div>
)
export default IconButtons;
