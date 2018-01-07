import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
//import {withStyles} from 'material-ui/styles'
//import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Tabs, { Tab } from 'material-ui/Tabs';
import {blue} from 'material-ui/colors';
import 'font-awesome/css/font-awesome.min.css'

/* const styles={
    tweetButton:{
        backgroundColor: "#1da1f2",
        color:"#ffffff",
        padding: 0,
        minHeight: "38px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px"
    },
    title: {
      cursor: 'pointer',
      color: '#212121',
    },
}; */

const primary = blue[500]; // #F44336

class SearchPageNavbar extends Component {
    render() {
        //const classes = this.props;
        return(
            <div>
                <AppBar position="static" style={{backgroundColor:"#ffffff"}}>
                <Grid container direction="row" spacing={18}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item>
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
                        placeholder="Search Twitter" spellCheck="false" autoComplete="false" contentEditable="false" 
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
            <Grid container style={{height:"4em",backgroundColor:"#1DA1F2",marginTop:"1px"}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{display:"flex",alignItems:"center"}}>
                    <Typography type="display1" style={{color:"#ffffff"}}>
                       #Aadhaar
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{backgroundColor:"#ffffff",paddingBottom:0}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{display:"flex",alignItems:"center",paddingBottom:0}}>
                
                    <Tabs style={{color:primary}} indicatorColor={primary} fullWidth={false}>
                        <Tab label="Top" style={{minWidth:0}}/>
                        <Tab label="Latest" style={{minWidth:0}}/>
                        <Tab label="People" style={{minWidth:0}}/>
                        <Tab label="Photos" style={{minWidth:0}}/>
                        <Tab label="Videos" style={{minWidth:0}}/>
                        <Tab label="News" style={{minWidth:0}}/>
                        <Tab label="Broadcasts" style={{minWidth:0}}/>
                    </Tabs>
                </Grid>
            </Grid>
            </div>
        )
    }
  }

  export default SearchPageNavbar;