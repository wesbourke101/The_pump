import React, { useState } from "react";
import Image from "../images/cam.png";

function TradCard ({tradGear, deleteGearfetch}) {
    const {brand_cam, number_cam, user_admin_id, cam, id} = tradGear
    function deleteGear(e) {
        let deleteVar = parseInt(e.target.name)
        console.log(typeof deleteVar)
        deleteGearfetch(deleteVar)
    }
    return (
        <div className="prettyTextDivs" style={{margin: ".5em"}}>
            <h3 style={{textDecoration: 'underline', textAlign: "left"}}>
                <img alt="cam" src={Image} style={{ width: "auto", height: "2.5em"}}/>
                {`Cam: ${number_cam} ${brand_cam}`} 
            </h3>
                <button name={id} onClick={deleteGear} style={{marginLeft: "40%", }}>Delete</button>
                
        </div>
    );
}

export default TradCard;