import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>  
        <nav>
          <ul>
            <li><Link id="link" to="/"> Map </Link></li>
            <li><Link id="link" to="/user_profile"> Profile </Link></li>
          </ul>  
        </nav>
    </div>    
  );
}
export default NavBar;