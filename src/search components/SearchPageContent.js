import React, { Component } from 'react';
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {blue} from 'material-ui/colors';
import 'font-awesome/css/font-awesome.min.css'
import FollowSuggestions from '././../components/follow-suggestions'
import Trends from '././../components/trends'

//const primary = blue[500]; // #F44336
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
    }
}; */

class SearchPageContent extends Component {
    render() {
        const classes = this.props;
        return(
            
            <div>               
                <Grid item xs={24}>
                {/*Content*/}
                    <Grid container justify="center" spacing={12} direction="row" >
                    <Grid item xs={0} >        
                        </Grid>
                        <Grid item xs={3} className={classes.dummyHeight}>
                        {/*<LeftPane/>*/}
                            <Grid container direction="row" style={{marginTop:"1em"}}>
                                <Grid item xs={12} style={{backgroundColor:"#ffffff",height:"4em",display:"flex",alignItems:"center"}}>
                                    <Typography type="title">
                                        Search Filters
                                    </Typography>
                                </Grid>                                
                            </Grid>
                            <Grid container style={{marginTop:"1em"}}>
                                <Grid xs={12} item style={{backgroundColor:"#ffffff",height:"4em",display:"flex",alignItems:"center"}}>
                                    <Typography type="title">
                                        Related Searches
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container style={{marginTop:"1em"}}>
                                <Grid xs={12} item>
                                    <FollowSuggestions/>
                                </Grid>
                            </Grid>
                            <Grid container style={{marginTop:"1em"}}>
                                <Grid xs={12} item>
                                    <Trends/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className={classes.dummyHeight} />
                        <Grid item xs={6} className={classes.dummyHeight}  >
                       {/* <CenterPane/>*/}
                            <Grid container style={{marginTop:"1em"}}>                            
                                <Grid item xs style={{paddingTop:16, display:"flex",justifyContent:"center",backgroundColor:"#ffffff"}} className="refContainer">
                                    <Typography className="refreshTweets">
                                        982 new results
                                    </Typography>
                                </Grid>
                                <Grid item xs={0} className={classes.dummyHeight} />
                            </Grid>
                            <Grid container  direction="column" style={{marginTop:"2em",backgroundColor:"#ffffff"}}>
                                <Grid item style={{paddingTop:16}} style={{borderBottom:"1px solid #efe6e6"}}>
                
                                    <Grid container className="feedGrid">
                                    <Grid item>
                                         <Avatar src= "https://pbs.twimg.com/profile_images/596097409467420672/YX1CS3oB_bigger.jpg" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Grid container direction="column">
                                            <Grid item style={{paddingBottom:0}}>
                                                <Grid container>
                                                    <Grid item>
                                                        <Typography type="body2" className="feedAuthor">
                                                        Raj Redij-Gill 
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                        <Typography type="caption">
                                                        @boredknees  Jan 1
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{paddingTop:0}}>
                                                <Typography type="body1" >
                                                    Did you know? #Aadhaar
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Card style={{boxShadow:"none",width:"300px"}}>
                                                    <CardMedia align ='center' >
                                                        <img width="300px"src= 'https://pbs.twimg.com/media/DSdabT_W0AAX90Q.jpg' />
                                                    </CardMedia>
                                                    <CardActions>
                                                        <Grid container>
                                                            <Grid item xs={2}>
                                                                <Tooltip title="Reply">
                                                                    <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                                    </i>
                                                                </Tooltip>
                                                                <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                                 &nbsp;&nbsp;9
                                                                </span>
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <Tooltip title="Retweet">
                                                                 <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                                 </i>
                                                                </Tooltip>
                                                                <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                                 &nbsp;&nbsp;152
                                                                </span>
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <Tooltip title="Like">
                                                                    <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                                    </i>
                                                                </Tooltip>
                                                                <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                                    &nbsp;&nbsp;132
                                                                </span>
                                                            </Grid>
                                                                <Grid item xs={2}>
                                                                    <Tooltip title="Direct Message">
                                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                                        </i>
                                                                    </Tooltip>
                                                                    <span style={{ fontSize: "12px", color: "grey", fontWeight: 600 }} className="cardAction">
                                                                        &nbsp;&nbsp;
                                                                     </span>
                                                            </Grid> 
                                                        </Grid>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <i className="fa fa-chevron-down" aria-hidden="true">
                                        </i>
                                    </Grid>
                                </Grid>
                                <Divider inset />
                                <Grid container className="feedGrid">
                                    <Grid item>
                                        <Avatar src='https://pbs.twimg.com/profile_images/767973606047395840/clbzJBSI_bigger.jpg' />
                            
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Grid container direction="column">
                                            <Grid item style={{paddingBottom:0}}>
                                                <Grid container>
                                                    <Grid item>
                                                        <Typography type="body2" className="feedAuthor">
                                                        AFPOH
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                        <Typography type="caption">
                                                        @afpohindia 30 Dec 2017
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{paddingTop:0}}>
                                                <Typography type="body1">
                                                    The More We Fear From #Aadhaar More We Would Be Oppressed And Suppressed. A Time Would Come When Even Death Of Our Co Indians Would Not Shake Us https://perry4lawblogs.wordpress.com/2017/12/24/aadhaar-monster-is-feeding-upon-the-fears-and-cowardice-of-majority-of-indians-but-the-few-brave-indians-must-fight-to-scrap-aadhaar-opines-praveen-dalal/ …
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Card style={{boxShadow:"none",width:"345px"}}>
                                        {/*<CardMedia image={dummy} style={{height:"300px"}}/>*/}
                                                <CardActions>
                                                    <Grid container>
                                                        <Grid item xs={2}>
                                                             <Tooltip title="Reply">
                                                                 <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                                 </i>
                                                             </Tooltip>
                                                             <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                                &nbsp;&nbsp;2
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Tooltip title="Retweet">
                                                                <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                                 </i>
                                                            </Tooltip>
                                                            <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                            &nbsp;&nbsp;24
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Tooltip title="Like">
                                                              <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                              </i>
                                                             </Tooltip>
                                                                <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                                &nbsp;&nbsp;18
                                                                </span>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                             <Tooltip title="Direct Message">
                                                                 <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                                 </i>
                                                            </Tooltip>
                                                            <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                                 &nbsp;&nbsp;
                                                             </span>
                                                        </Grid>
                                                    </Grid>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <i className="fa fa-chevron-down" aria-hidden="true">
                                         </i>
                                </Grid>
                    
                            </Grid>
                        </Grid>                    
                    </Grid>
                </Grid> 
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
  }

  export default SearchPageContent;