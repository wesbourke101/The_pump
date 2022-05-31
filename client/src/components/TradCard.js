import React, { useState } from "react";
import Cam from "../images/cam.png";
import Nut from "../images/climbingNuts.png";


function TradCard ({tradGear, deleteGearfetch}) {
    const {brand_cam, number_cam, user_admin_id, cam, id, nut, number_nut, brand_nut} = tradGear
    function deleteGear(e) {
        let deleteVar = parseInt(e.target.name)
        console.log(typeof deleteVar)
        deleteGearfetch(deleteVar)
    }
        return ( 
            <div>  
                {cam ? <div className="prettyTextDivs" style={{margin: ".5em"}}>
                    <h3 style={{textDecoration: 'underline', textAlign: "left"}}>
                        <img alt="cam" src={Cam} style={{ width: "auto", height: "2.5em"}}/>
                        {`Cam: ${number_cam} ${brand_cam}`} 
                    </h3>
                        <button name={id} onClick={deleteGear} style={{marginLeft: "40%", }}>Delete</button>   
                    </div>
                :
                    null
                }  
                {nut ? <div className="prettyTextDivs" style={{margin: ".5em"}}>
                    <h3 style={{textDecoration: 'underline', textAlign: "left"}}>
                        <img alt="cam" src={Nut} style={{ width: "auto", height: "2.5em"}}/>
                        {`Nut: ${number_nut} ${brand_nut}`} 
                    </h3>
                        <button name={id} onClick={deleteGear} style={{marginLeft: "40%", }}>Delete</button>   
                    </div>
                :
                    null
                }
            </div>  

        );
}

export default TradCard;