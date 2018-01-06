import React, { Component } from 'react'
import Grid from 'material-ui-next/Grid'

import UserInfo from './userInfo'
import Trends from './trends'

class PageLeft extends Component {
    render() {
        //const classes = this.props.classes;
        return(
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <UserInfo/>
                </Grid>
                <Grid item>
                    <Trends/>
                </Grid>
            </Grid>
        )
    }
}
export default (PageLeft)