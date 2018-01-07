import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
/* const styles ={
    tweetBar:{
        minHeight:"40px",
        display: "block",
        outline: 0,
        width: "200%",
        height: "65%",
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "5px",
        fontSize: "15px",
        fontFamily:"inherit",
        paddingTop: "8px",
        paddingLeft: "10px",
        transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    }
}; */
class TweetInput extends Component{

    constructor(props){
        super(props);
        this.state={
            resize:"none",
            minHeight:"0px",
            tweetOptions:"none"
        };
        this.expandArea = this.expandArea.bind(this);
        this.shrinkArea = this.shrinkArea.bind(this);
    };
    shrinkArea(){
        this.setState({resize:"none",tweetOptions:"none",minHeight:"0px"})
    }
    expandArea(){
        this.setState({resize:"vertical",tweetOptions:"block",minHeight:"4em"})
    };
    render(){
        const classes = this.props;
        return(
            <Grid container direction="column">
                <Grid item>
                    <Grid container  direction="row" style={{backgroundColor:"#E8F5FD"}} >
                        <Grid item xs >
                            <Avatar  src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
                            </Avatar>
                        </Grid>
                        <Grid item  style={{display:"flex",alignItems:"center"}}>
                            <textarea className={classes.tweetBar} placeholder="What's Happening" spellCheck="false" autoComplete="false"  style={{resize:this.state.resize,minHeight:this.state.minHeight,width :"330px"}}
                                  fullWidth onFocus={this.expandArea} onBlur={this.shrinkArea}/>
                        </Grid>
                        <Grid item xs={1} style={{display:this.state.tweetOptions}}>
                        </Grid>
                        <Grid item xs={11} style={{display:this.state.tweetOptions,alignItems:"center"}}>
                            <Grid container>
                                <Grid item xs={1}>
                                </Grid>
                                    <Grid item xs={1}>
                                        <Tooltip title="Add Photos or videos">
                                            <i className="fa fa-picture-o" aria-hidden="true" style={{cursor:"pointer"}}></i>
                                        </Tooltip>
                                    </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Add Poll">
                                        <i className="fa fa-bar-chart" aria-hidden="true" style={{cursor:"pointer"}}></i>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Add Location">
                                        <i className="fa fa-map-marker" aria-hidden="true" style={{cursor:"pointer"}}></i>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{display:"flex",justifyContent:"center"}} className="refContainer">
                    <Typography className="refreshTweets">
                        See 11 New Tweets
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default TweetInput