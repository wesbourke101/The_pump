import React from "react";
import Maps from "./Maps";

function Main({userAddRoute, routeData, user, isAdmin}) {
  return (
    <div>
      <Maps userAddRoute={userAddRoute} routeData={routeData} user={user} isAdmin={isAdmin}/>
    </div>
  );
}
export default Main;