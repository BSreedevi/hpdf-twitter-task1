import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import FollowSuggestions from './follow-suggestions'
import SmallLinks from './small-links'

class RightPane extends Component{
    render() {
        return (
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <FollowSuggestions/>
                </Grid>
                <Grid item>
                    <SmallLinks/>
                </Grid>
            </Grid>
        )
    }
}

export default RightPane