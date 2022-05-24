import React from "react";
import NavBar from "./NavBar";

function Header({handleLogOut, user}) {
  return (
    <div>
      <NavBar handleLogOut={handleLogOut} user={user}/>
    </div>
  );
}
export default Header;