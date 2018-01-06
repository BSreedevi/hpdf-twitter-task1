import React, { Component } from 'react'
import Grid from 'material-ui-next/Grid'
import Typography from 'material-ui-next/Typography'

class SmallLinks extends Component{
    render(){
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item xs={12} style={{padding:0}}>
                    <Typography type="caption" style={{lineHeight:1.6}}>
                    © 2017 Twitter  About  Help Center  Terms  Privacy policy  Cookies  Ads info  Brand  Blog  Status  Apps  Jobs  Marketing  Businesses Developers
                        {/*<ul style={{listStyle:"none"}}>
                            <li className="smallLinks">© 2017 Twitter</li>
                            <li className="smallLinks">&nbsp;About</li>
                            <li className="smallLinks">&nbsp;Help Center</li>
                            <li className="smallLinks">&nbsp;Terms</li>
                            <li className="smallLinks">&nbsp;Privacy Policy</li>
                            <li className="smallLinks">&nbsp;Cookies</li>
                            <li className="smallLinks">&nbsp;Ads info</li>
                            <li className="smallLinks">&nbsp;Brand</li>
                            <li className="smallLinks">&nbsp;Blog</li>
                            <li className="smallLinks">&nbsp;Status</li>
                            <li className="smallLinks">&nbsp;Apps</li>
                            <li className="smallLinks">&nbsp;Jobs</li>
                            <li className="smallLinks">&nbsp;Marketing</li>
                            <li className="smallLinks">&nbsp;Businesses</li>
                            <li className="smallLinks">&nbsp;Developers</li>
        </ul>*/}
                    </Typography>
                </Grid>
                <Grid item style={{padding:"20px"}}>
                    <Typography type="caption" className="advertiseLink">
                        Advertise with Twitter
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default SmallLinks;