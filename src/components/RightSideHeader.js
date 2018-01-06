import React from 'react';
import Button from 'material-ui-next/Button';
import Avatar from 'material-ui/Avatar'
//import RaisedButton from 'material-ui/RaisedButton';
//import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
//import { blue300, indigo900, orange200, deepOrange300, pink400, purple500} from 'material-ui/styles/colors';
//import SearchBar from 'material-ui-search-bar';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui-next/Grid';
//import deepOrange from 'material-ui-next/colors/deepOrange';
//import deepPurple from 'material-ui-next/colors/deepPurple';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const style = {
    margin: 12,
    color: '#212121'
  };
  const styles={
    tweetButton:{
        backgroundColor: "#1da1f2",
        color:"#ffffff",
        padding: 0,
        minHeight: "38px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px"
    }
};

const RightSideHeader = () => (
  
    <div align = 'center'>
     <Grid container direction="row" spacing={24}>
    <Grid item xs={6} className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <input type="text" className="navSearch" placeholder="Search Twitter" spellCheck="false" autoComplete="false" contentEditable="false" onKeyPress={this.searchIt} onChange={evt=>this.updateInputVal(evt)}
        style={styles.tweetButton} />
          <span className="fa fa-search" aria-hidden="true" color="primary">
          </span> 
    </Grid>
    <Grid item xs={2} className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Avatar  size= {30} src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" >
          </Avatar>
    </Grid>
    <Grid item className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <Button  color="primary" style={styles.tweetButton}>Tweet
      </Button> 
    </Grid>
    </Grid>
  </div>
);

export default RightSideHeader;