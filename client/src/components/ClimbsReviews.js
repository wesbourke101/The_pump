import React, { useState } from "react";

function ClimbsReviews ({climb, appEraseFunction}) {
    function eraceComment(e) {
        e.preventDefault();
        let newId = parseInt(e.target.name)
        appEraseFunction(newId)
    }
    return (
        <form onSubmit={eraceComment} name={climb.id} id="userCommentDiv" style={{backgroundColor: "#F6FAF7"}}>
            <h3>{climb.comment}</h3>
            <button type="sumbit"> X </button>
        </form>
    );
}
export default ClimbsReviews;