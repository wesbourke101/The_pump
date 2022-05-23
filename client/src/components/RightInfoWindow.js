import React from "react";

function RightInfoWindow({openRightWindow}) {
    console.log(openRightWindow)
    const {longitude, latitude, approved, climb_id, description, directions, id, picture, route_name} = openRightWindow

    return (
        <div id="routeWindowCard">
            <div style={{display: "flex", flex_wrap: "row" }}>
                <label>Route name:__</label> 
                {route_name}
            </div>
            <div style={{display: "flex", flex_wrap: "row" }}>
                <label>Test:___</label>
                {approved}
            </div>
            <div style={{display: "flex", flex_wrap: "row" }}>
                <label>Test:___</label>        
                {description}
            </div>
        </div>  

    );
}
export default RightInfoWindow