import React from 'react'
import {Grid, Typography} from '@mui/material';
import ResponsiveAppBar from './AppBar';
import '@fontsource/roboto/500.css';
function  Profile() {
  console.log(sessionStorage.getItem("Name"));
  return (
    <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        <br></br>
        <Typography variant="h3"> User Profile</Typography>
        <br></br>
        <Grid container direction="column" spacing={5} >
            <Grid  item sm={6}> 
            <item>First Name: </item>
            <item>Data from token</item>
            </Grid>
            <Grid item sm={6}>
            <item>Family Name: </item>
            <item>Data from token</item>
            </Grid>
            <Grid item sm={6}>
            <item>Email : </item>
            <item>Data from token</item>
            </Grid>
        </Grid> 
        <p> {sessionStorage.getItem("Name")}</p>
    </div>
  )
}

export default Profile;