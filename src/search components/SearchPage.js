import React, { Component } from 'react';
import Grid from 'material-ui-next/Grid'
import 'font-awesome/css/font-awesome.min.css'
import SearchPageContent from './SearchPageContent'
import SearchPageNavbar from './SearchPageNavbar'
/* const primary = blue[500]; // #F44336
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
}; */
class SearchPage extends Component {
    render() {
        //const classes = this.props;
        return(
            //nav bar
            <div>                
               
                <Grid container spacing={40}>
                    <Grid item xs={12} justify="center" >
                        <SearchPageNavbar />         
                    </Grid>
                    <Grid item xs={10}>
                        <SearchPageContent />                   
                    </Grid>
                </Grid>
                

            </div>
        )
    }
  }

  export default SearchPage;