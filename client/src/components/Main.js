import React from "react";
import Maps from "./Maps";

function Main({ogClimbsFetch, userAddRoute, routeData, user, isAdmin, postComments}) {
  return (
    <div>
      <Maps ogClimbsFetch={ogClimbsFetch} userAddRoute={userAddRoute} routeData={routeData} user={user} isAdmin={isAdmin} postComments={postComments}/>
    </div>
  );
}
export default Main;