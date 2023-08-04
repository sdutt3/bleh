import React from 'react'
// import Grid from '@material-ui/core/Grid'
import ResponsiveAppBar from './AppBar';
function  Profile() {
  return (
    <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* <Grid container>
            <Grid item xs={6}> 
            <p>First Name: </p>
            </Grid>
            <Grid item xs={6}>
            Family Name: 
            </Grid>
            <Grid>
            Email : 
            </Grid>
        </Grid> */}
        <p> This is the user profile page</p>
    </div>
  )
}

export default Profile;