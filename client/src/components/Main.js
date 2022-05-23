import React from "react";
import Maps from "./Maps";

function Main({userAddRoute, routeData}) {
  return (
    <div>
      <Maps userAddRoute={userAddRoute} routeData={routeData}/>
    </div>
  );
}
export default Main;