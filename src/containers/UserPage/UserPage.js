import React, {Component} from 'react';
import UserPageTab from './UserPageTab';
import classes from './UserPage.css';
import animations from '../../commonfiles/animations.css';
import {scrollbar} from '../../commonfiles/scrollbar.css';

export default class UserPage extends Component {

  state = {
    show: ''
  }

  componentWillMount = () => {
    this.setState({show: animations.fadeInAnimation})
  }

  render() {
    return (
      <div 
        className={scrollbar+" "+this.state.show+" "+classes.responsiveFont}
        style={{
          height:"100%", 
          overflowY:"auto"
        }} 
      >
        <UserPageTab />
      </div>
    );
  }
}