import React, { useState } from "react";
import RedMountain from '../images/redMountainPic.png';


function IndividualClimbComments({climb}) {
    
    const {route, user_admin} = climb

    console.log(user_admin)
    return (
        <div id="commentDivs">
            <img src={RedMountain} style={{width: "20em", height: "auto"}}/>
            <p><strong>Climbers name:</strong> <span>{user_admin.first_name}</span></p>
            <p><strong>Climbing tips:</strong> <span>{climb.comment}</span></p>
        </div>
    );
}

export default IndividualClimbComments;