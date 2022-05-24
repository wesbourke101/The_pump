import React, { useState } from "react";

function ClimbsReviews ({climb}) {
    function eraceComment(e) {
        console.log(e)
    }
    return (
     <div id="userCommentDiv" style={{backgroundColor: "#F6FAF7"}}>
         <h3>{climb.comment}</h3>
         <button onClick={eraceComment}>X</button>
     </div>

    );
}

export default ClimbsReviews;