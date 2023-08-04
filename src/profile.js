import React, { useEffect, useState } from 'react'
import {Grid, Typography} from '@mui/material';
import ResponsiveAppBar from './AppBar';
import '@fontsource/roboto/500.css';
import { useSearchParams } from 'react-router-dom';
function Profile() {

  let [searchParams, setSearchParams] = useSearchParams();
  let [token, setToken] = useState(null);
  let [firstName, setFirstName] = useState(null);
  let [lastname, setLastName] = useState(null);
  let [email, setEmail] = useState(null);

  function storeSessionInfo() {

    if (searchParams.get("token") != null) {
      console.log("UseEffect running Profile");
      sessionStorage.setItem("Token", searchParams.get("token"));
      sessionStorage.setItem("Name", searchParams.get("name"));
      sessionStorage.setItem("Email", searchParams.get("email"));
      setToken(searchParams.get("token"));
      setFirstName(searchParams.get("name").split(" ")[0]);
      setLastName(searchParams.get("name").split(" ")[1]);
      setEmail(searchParams.get("email"));
    }
  };
  
  useEffect(() => {
    storeSessionInfo();
  }, []);
  return (
    <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        {token != null ? 
          <div>
              <br></br>
          <Typography variant="h3"> User Profile</Typography>
          <br></br>
          <Grid container direction="column" spacing={5} >
              <Grid  item sm={6}> 
              <item>First Name: </item>
              <item>{firstName}</item>
              </Grid>
              <Grid item sm={6}>
              <item>Family Name: </item>
              <item>{lastname}</item>
              </Grid>
              <Grid item sm={6}>
              <item>Email : </item>
              <item>{email}</item>
              </Grid>
          </Grid> 
          </div> : <p>Login Please</p>
        }
    </div>
  )
}

export default Profile;