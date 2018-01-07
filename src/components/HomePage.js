import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import HomeNavbar from './HomeNavbar';
import PageLeft from './PageLeft';
import PageRight from './PageRight';
import PageCenter from './PageCenterPane';

import PropTypes from 'prop-types';


const styles={
  dummyHeight:{
      height:"10em"
  }
};
const style = {
  marginLeft: '100px',
  marginRight: '100px',
  height: 500,
  width: 300,
  margin : 20,
  textAlign: 'center',
  display: 'inline-block',
};
class HomePage extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className="HomePage"> 
        <style>{'body { background-color: #EEEEEE; }'}</style>
      
        <MuiThemeProvider>
            <Grid container spacing={40}>
                <Grid item xs={12} justify="center" >
                    <HomeNavbar />         
                </Grid>
                <Grid item xs={12} >        
                    <Grid container justify="center" spacing={40}>
                        <Grid item xs={0} >        
                        </Grid>
                        <Grid item xs={3} >
                            <PageLeft />
                        </Grid>
                        <Grid item xs={4} >
                            <PageCenter />
                        </Grid>
                        <Grid item xs={3} >
                            <PageRight />
                        </Grid> 
                    </Grid>       
                </Grid>
            </Grid>
        </MuiThemeProvider> 
      </div> 
    );
  }
}

//export default App;
export default HomePage;
