import React, { Component } from 'react'
//import {withStyles} from 'material-ui/styles'
import Tooltip from 'material-ui-next/Tooltip'
import Typography from 'material-ui-next/Typography'
import Button from 'material-ui-next/Button'
import Grid from 'material-ui-next/Grid'
import 'font-awesome/css/font-awesome.min.css'
const styles ={
};

class UserInfo extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column">
                <Grid item style={{display:"flex",justifyContent:"left",alignItems:"left", backgroundColor:"#1da1f2",height:"6em"}}>
                    <Tooltip id="tooltip-dp" title="Add A Profile Photo" placement="top">
                        <Button fab color="primary" style={{ marginTop:"4em","border": "3px solid",boxShadow:"none",width:"70px",height:"70px",backgroundColor:"rgb(29, 161, 242)"}}>
                            <i className="fa fa-2x fa-camera" aria-hidden="true">
                            </i>
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid item style={{backgroundColor:"#ffffff"}}>
                    <Grid container>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography type="title">
                                        <a href="#">Sreedevi</a>
                                    </Typography>
                                </Grid>
                                <Grid item style={{padding:0,paddingLeft:"8px"}}>
                                    <Typography type="caption" style={{color:"#657786"}}>
                                        <a href="#">@SreedeviBandaru</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container justify="center">
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{fontWeight:600}}
                                                        className="tweetStats">
                                                Tweets
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#1da1f2"}}>
                                                3
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{fontWeight:600}}
                                                        className="tweetStats">
                                                Following
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#1da1f2"}}>
                                                78
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{fontWeight:600}}
                                                        className="tweetStats">
                                                Followers
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#1da1f2"}}>
                                                1
                                            </Typography>
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
export default (UserInfo)