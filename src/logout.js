import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './AppBar';
function Logout() {
  return (
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* if no token found */}
        <p>You have successfully logged out</p>
        {/* if token found */}
         <Button component={Link} to="/" color="primary">
                Login Again
                </Button>
        </div>

  )
}

export default Logout