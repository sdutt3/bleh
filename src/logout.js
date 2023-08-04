import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './AppBar';
function Logout() {

  function clearData() {
    console.log("Logging out");
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Name");
    sessionStorage.removeItem("Email");
  }

  useEffect(() => {
    clearData();
  }, [])
  return (
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* if no token found */}
        {sessionStorage.getItem("Token") == null ?
          <div>
            <p>Cannot Log Out. No User Found to Log out</p>
          </div> :
          <div>
            <p>You have successfully logged out</p>
          </div>
        }
        {/* if token found */}
         <Button component={Link} to="/" color="primary">
                Login Again
                </Button>
        </div>

  )
}

export default Logout