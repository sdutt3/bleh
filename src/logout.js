import React from 'react'
import Login from './Login'
function Logout() {
  return (
    <div>
        <p>You have successfully logged out</p>
        <p>Login again? 
            <Login></Login>
        </p>
        </div>

  )
}

export default Logout