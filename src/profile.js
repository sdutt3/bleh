import React, { useEffect, useState } from 'react'
import {Grid, Typography} from '@mui/material';
import ResponsiveAppBar from './AppBar';
import '@fontsource/roboto/500.css';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {

  let [searchParams, setSearchParams] = useSearchParams();
  let [token, setToken] = useState(null);
  let [firstName, setFirstName] = useState(null);
  let [lastname, setLastName] = useState(null);
  let [email, setEmail] = useState(null);

  async function fillData(data) {
    if (data !== null) {
      console.log("Fill");
      var token = data['token'];
      var firstName = data['name'].split(" ")[0];
      var lastName = data['name'].split(" ")[1];
      var email = data["email"];
      fillSessionData(firstName, lastName, email, token);
      setToken(data['token']);
      setFirstName(data['name'].split(" ")[0]);
      setLastName(data['name'].split(" ")[1]);
      setEmail(data["email"]);
    }
  }

  function fillSessionData(firstName, lastName, email, token) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
      sessionStorage.setItem("email", email);
  }
  
  useEffect(() => {
    axios.get("/auth")
      .then((response) => {
        console.log(response);
        fillData(response.data);
      })
      .catch((error) => {
        console.log("User Not logged in");
        fillData(null);
      })
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