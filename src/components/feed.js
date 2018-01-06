import React, { Component } from 'react'
import Divider from 'material-ui/Divider';
import 'font-awesome/css/font-awesome.min.css'
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui-next/Grid'
import Tooltip from 'material-ui-next/Tooltip'
import Avatar from 'material-ui-next/Avatar'
import Typography from 'material-ui-next/Typography'

class Feed extends Component{
    render(){
        return(
            <Grid container direction="column" style={{backgroundColor:"#ffffff"}}>
                <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar src= "https://pbs.twimg.com/profile_images/946674580965416960/gEyf43ds_bigger.jpg">
                                
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography type="body2" className="feedAuthor">
                                            Hasura 
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption">
                                            @HasuraHQ &nbsp;.16m
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1" >
                                    Get your #AngularJS app running on Hasura cluster in 3 simple steps! Check out our starter project with a ready-to-deploy #webapp - http://bit.ly/2lp2Ekj  #Angular #javascript #HowTo #webdev #appdev #tech @angular @AngularJS_News @angularjs_io
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"300px"}}>
                                        <CardMedia align ='center' >
                                        <img src= 'https://pbs.twimg.com/media/DSY2-6kW4AA8jcP.png' />
                                        </CardMedia>

                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Reply">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;1
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Retweet">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;1
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Like">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;4
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
                    <Divider inset />
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar src='https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_bigger.jpg'>
                                
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography type="body2" className="feedAuthor">
                                            Narendra Modi
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption">
                                            @narendramodi &nbsp;.8h8 hours ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
                                    Wishing you all a happy 2018! I pray that this year brings joy, prosperity and good health in everyone's lives.
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
                                                        &nbsp;&nbsp;6.6K
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Retweet">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;9.4K
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Like">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;45K
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
        )
    }
}

export default Feed;