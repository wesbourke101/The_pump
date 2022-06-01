import React from "react";
import { Link } from "react-router-dom";
import Skull from '../images/skull.png';
import Arm from '../images/armPic.png';

function NavBar({handleLogOut, user, isAdmin}) {
  
  return (
    <div>  
        <nav className="navDiv">
        
          <ul>
            <li><Link id="link" to="/"> Map </Link></li>
            {user ? <li><Link id="link" to="/user_profile"> Profile </Link></li> : null}
            <li><Link id="link" to="/login"> Login </Link></li>
            {user ? (user.is_admin ? <li><Link id="link" to="/route_approval"> New routes </Link></li> : null): null}
            {user ? <li  style={{float: "right", marginTop: '.5em', marginRight: "1em"}}><button style={{width: "100%", height: "2.5em"}} onClick={handleLogOut}>Logout</button></li> : null}
            <li style={{float: "right"}}><img id="arm" style={{marginRight: "3em", marginTop: ".5em", width: "10em"}} src={Arm}/></li>
            <li style={{float: "right", marginRight: "2.5em", marginTop: "-1em", color: "#F6FAF7"}}><h1><strong>The Pump</strong></h1></li>
          </ul>
          
          <img id="skull" src={Skull} style={{height: '10em', width: "auto"}}/>  
          
        </nav> 
        
    </div>    
  );
}
export default NavBar;