import React, { useState } from "react";

function ClimbsReviews ({climb, appEraseFunction, setToggleDeleteClimb, setOgClimbsFetch, ogClimbsFetch}) {
    const {id, comment, star_rating} =climb;
    const [toggleEditComment, setToggleEditComment] = useState(true);
    const [editCommentState, setEditCommentState] = useState({
        id: id,
        comment: comment,
        star_rating: star_rating
    });
    console.log(climb)
    function eraceComment(e) {
        e.preventDefault();
        let newId = parseInt(e.target.name)
        appEraseFunction(newId)
    }
    function changeState(e) {
        setEditCommentState({...editCommentState, [e.target.name]: e.target.value})        
    }
    function updateComments(e) {
        e.preventDefault()
        console.log(editCommentState)
        fetch(`climbs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(editCommentState)
        })
        .then( res => res.json())
        .then( data => {
            const updatedMappedClimbs = ogClimbsFetch.map((climbs) => {
                if(id !== ogClimbsFetch.id) {
                    return (climbs)
                } else {
                    return (data)
                }
            })
            setOgClimbsFetch(updatedMappedClimbs)
        })
        .catch( error => console.log(error.message));
        setToggleEditComment(!toggleEditComment)
    
    }
    return (
        <div>
            {toggleEditComment ? 
                <div>
                    <div style={{padding: "1em"}} onSubmit={eraceComment} name={climb.id} id="userCommentDiv" className="prettyTextDivs">
                        {/* <h3 style={{marginTop: "-.5em"}}>Route Name: <span style={{color:'green'}}>{climb.route.route_name}</span></h3> */}
                        <h3>Comment: <span style={{color:'green'}}>{climb.comment}</span></h3>
                        <h3>Star rating: <span style={{color:'green'}}>{climb.star_rating}</span></h3>
                        <button onClick={() => setToggleEditComment(!toggleEditComment)}>Edit</button>
                        <button type="sumbit"> Delete </button>
                    </div>
                </div>
            :
                <form style={{padding: "1em"}} onSubmit={updateComments} id="userCommentDiv" className="prettyTextDivs">
                    <label>Edit Comment: </label>
                    <textarea style={{ width: "100%"}} name="comment" onChange={changeState} value={editCommentState.comment}></textarea>
                    <label>Edit star rating: </label>
                    <select style={{width: "100%"}} onChange={changeState} name="star_rating" value={editCommentState.star_rating}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <button type="sumbit"> Submit </button>
                    <button onClick={() => setToggleEditComment(!toggleEditComment)}>Cancel</button>
                    {/* <button onClick={editComment}>Edit</button> */}
                </form>
            }
        </div>
    );
}
export default ClimbsReviews;