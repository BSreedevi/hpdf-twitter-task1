
import React, { Component } from 'react';
import Grid from 'material-ui-next/Grid'
import Avatar from 'material-ui-next/Avatar'
import Button from 'material-ui-next/Button'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui-next/Tabs';
import {blue} from 'material-ui-next/colors';
import 'font-awesome/css/font-awesome.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const primary = blue[500]; // #F44336

//const primary = '#F44336'; // #F44336
class HomeNavbar extends Component {
    render() {
      const classes = this.props;
      return (
        <div className="HomeNavbar">
        <MuiThemeProvider>
        <AppBar position="static" style={{backgroundColor:"#ffffff"}}>
                    <Grid container direction="row" spacing={18}>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item>
                        {/*value={this.state.value} style={{color:primary}} indicatorColor={primary} fullWidth={false} onChange={this.handleChange}*/}
                            <Tabs style={{color:primary}} indicatorColor={primary} fullWidth={false}>
                                <Tab label="Home" style={{minWidth:0}} href="/"/>
                                <Tab label="Notifications" style={{minWidth:0}}/>
                                <Tab label="Messages" style={{minWidth:0}}/>
                            </Tabs>
                        </Grid>
                        <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px"}}>
                            </i>
                        </Grid>
                        <Grid item xs={2} className="search" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <input type="text" style={{backgroundColor: "#E8F5FD", border: "1px solid", borderRadius: "40px", minHeight: "30px"}}
                             placeholder="Search Twitter" spellCheck="false" autoComplete="false" contentEditable="false" onKeyPress={this.searchIt}
                              />
                            <span className="fa fa-search" aria-hidden="true">
                            </span>
                        </Grid>
                        <Grid item  xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Avatar size= {30} src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"/>
                            
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button  color="primary" style={{backgroundColor: "#1da1f2", border: "1px solid", borderRadius: "40px",minHeight: "38px"}}>
                                Tweet
                            </Button>
                        </Grid>
                    </Grid>
                </AppBar>
          </MuiThemeProvider>
        </div>
      );
    }
  }

  export default HomeNavbar;