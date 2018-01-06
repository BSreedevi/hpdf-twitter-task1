import React, { Component } from 'react'
import Grid from 'material-ui-next/Grid'
import Avatar from 'material-ui-next/Avatar'
import Button from 'material-ui-next/Button'
import Typography from 'material-ui-next/Typography'
/* const styles = theme =>({
    followButton:{
        color: "#1da1f2",
        padding: 0,
        minHeight: "32px",
        border: "1px solid",
        borderRadius: "20px",
        border: "1px solid #69bdee",
        textTransform:"none",
        fontSize:"13px"
    }
}); */
class FollowSuggestions extends Component{
    render(){
        const classes = this.props;
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="title">
                                Who to follow
                            </Typography>
                        </Grid>
                        <Grid item style={{display:"flex",alignItems:"flex-end",paddingLeft:0}}>
                            <Typography type="caption">
                                <a>. Refresh </a>. <a>View all</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                      <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                          <Grid container>
                              <Grid item>
                                  <Avatar  src="https://pbs.twimg.com/profile_images/794285789240623104/Cyio02cd_normal.jpg" className={classes.avatar}>
                                  </Avatar>
                              </Grid>
                              <Grid item>
                                  <Grid container direction="column">
                                      <Grid item style={{paddingBottom:0}}>
                                          <Grid container>
                                              <Grid item>
                                                  <Typography type="body2" className="followMe">
                                                  Tanmai Gopal
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                  <Typography type="caption">
                                                  @tanmaigo
                                                  </Typography>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                      <Grid item style={{paddingTop:0,paddingLeft:0,alignItems:"left"}}>
                                          <Button style= {{ color: "#1da1f2", padding: 0, minHeight: "32px", border: "1px solid", borderRadius: "20px",
                                                         textTransform:"none", fontSize:"13px"}}>
                                              Follow
                                            </Button>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                            <Grid container>
                                <Grid item>
                                    <Avatar src= 'https://pbs.twimg.com/profile_images/881236265391325184/WffFVMgb_bigger.jpg'>                                       
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography type="body2" className="followMe">
                                                    PRIYANKA
                                                    </Typography>
                                                </Grid>
                                                <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                    <Typography type="caption">
                                                    @priyankachopra
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{paddingTop:0,paddingLeft:0, alignItems:"left"}}>
                                            <Button style= {{ color: "#1da1f2", padding: 0, minHeight: "32px", border: "1px solid", borderRadius: "20px",
                                                        textTransform:"none", fontSize:"13px"}} >
                                                Follow
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                            <Grid container>
                                <Grid item>
                                    <Avatar src= 'https://pbs.twimg.com/profile_images/882162695167819776/VvqvFoju_bigger.jpg'>
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column" >
                                        <Grid item style={{paddingBottom:0}}>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography type="body2" className="followMe">
                                                        Nptel
                                                    </Typography>
                                                </Grid>
                                                <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                    <Typography type="caption">
                                                        @nptelindia
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{paddingTop:0,paddingLeft:0,alignItems:"left"}}>
                                            <Button style= {{ color: "#1da1f2", padding: 0, minHeight: "32px", border: "1px solid", borderRadius: "20px",
                                                         textTransform:"none", fontSize:"13px"}}>
                                                Follow
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default FollowSuggestions;