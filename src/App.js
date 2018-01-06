import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { withStyles } from 'material-ui-next/styles';
//import Grid from 'material-ui-next/Grid';

import './App.css';
import HomePage from './components/HomePage';
import SearchPage from './search components/SearchPage';


class App extends Component {
  render() {
    //const classes = this.props.classes;
    return (
      <div className="App"> 
        <style>{'body { background-color: #EEEEEE; }'}</style>
        <div >
          <MuiThemeProvider>
          {/* <SearchPage/>*/}
         <HomePage />
          </MuiThemeProvider>
        </div>            
      
      </div>
    );
  }
}

//export default App;
export default App;
