import React from "react";
import { Link } from "react-router-dom";

function NavBar({handleLogOut, user, isAdmin}) {
  
  return (
    <div>  
        <nav>
          <ul>
            <li><Link id="link" to="/"> Map </Link></li>
            {user ? <li><Link id="link" to="/user_profile"> Profile </Link></li> : null}
            <li><Link id="link" to="/login"> Login </Link></li>
            {user ? (user.is_admin ? <li><Link id="link" to="/route_approval"> New routes </Link></li> : null): null}
            {user ? <li  style={{float: "right", marginTop: '.5em', marginRight: "1em"}}><button style={{width: "100%", height: "2.5em"}} onClick={handleLogOut}>Logout</button></li> : null}
          </ul>  
        </nav>
        
        
    </div>    
  );
}
export default NavBar;