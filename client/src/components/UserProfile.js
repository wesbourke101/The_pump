import React from "react";

function UserProfile() {
  return (
    <div id="columnDirection">
        <div className="mainProfile" style={{display: "flex"}}>
            <div className="userCards">
                User Profile info
            </div>
            <div className="userCards">
                Trad gear
            </div>
            <div className="userCards">
                Sport gear
            </div>
            <div>
                Routes Climbed
            </div>
        </div>
    </div>
  );
}
export default UserProfile;