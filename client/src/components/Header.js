import React from "react";
import NavBar from "./NavBar";

function Header({handleLogOut, user, isAdmin}) {
  return (
    <div>
      <NavBar handleLogOut={handleLogOut} user={user} isAdmin={isAdmin}/>
    </div>
  );
}
export default Header;