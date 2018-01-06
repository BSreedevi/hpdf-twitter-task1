import React, { Component } from 'react'
import Grid from 'material-ui-next/Grid'
import TweetInput from './tweet-input'
import Feed from './feed'
class CenterPane extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item>
                    <TweetInput/>
                </Grid>
                <Grid item>
                    <Feed/>
                </Grid>
            </Grid>
        )
    }
}

export default CenterPane