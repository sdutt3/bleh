import React, { Component, useEffect, useState } from 'react'
import './Style.css'
import {useSearchParams } from 'react-router-dom';
import {Grid, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './AppBar';
function Login() {
    const url = "http://localhost:8080/home";

    const navigate = () => {
        window.location.href = url;
    };
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Typography>Welcome to Leverage Technologies</Typography>
          <form>
          <Grid container spacing={0} justify="center" direction="row" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
          <Grid item>
              <div className='d-grid'>
                  {sessionStorage.getItem("Token") == null ? <Button variant="contained" color="primary" type="submit" className="button-block" onClick={(e) => {
                      e.preventDefault();
                      navigate();
                  }}>Sign In Using ms office</Button>: 
                  <div>
                    <p>User Logged In - Go to Profile page</p>
                  </div>}
              </div>
              </Grid>
          </Grid>
          </form> 
       </div>
    
  )
}

export default Login