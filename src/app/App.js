import React, { Component } from 'react';
import classes from './App.css';
import {history} from '../utility';
import MainContent from '../containers/Main';
import {Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <Router history={history} basename='/smcdemo/'>
        <MuiThemeProvider>
          <MainContent className={classes.content}/>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
