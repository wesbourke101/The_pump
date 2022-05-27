import React, { useState } from "react";

function ClimbsReviews ({climb, appEraseFunction}) {
    function eraceComment(e) {
        e.preventDefault();
        let newId = parseInt(e.target.name)
        appEraseFunction(newId)
    }
    return (
        <form onSubmit={eraceComment} name={climb.id} id="userCommentDiv" className="prettyTextDivs">
            <h3>{climb.comment}</h3>
            <button type="sumbit"> X </button>
        </form>
    );
}
export default ClimbsReviews;