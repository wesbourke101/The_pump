import React, {useState} from "react";
import IndividualClimbComments from "./IndividualClimbComments";

function RightInfoWindow({openRightWindow, user, isAdmin}) {
    // console.log(openRightWindow)
    const {longitude, latitude, approved, climb_id, description, directions, id, picture, route_name} = openRightWindow
    const [commentToggle, setCommentToggle] = useState(false);
    const climbs = openRightWindow.climbs;
    const [commentToPost, setCommentToPost] = useState({
        user_admin_id: user.id,
        route_id: id
    })

    const mappedClimbs = climbs.map((climb) => {
        return <IndividualClimbComments climb={climb}/>
    })
    function onChangeComment(e) {
        setCommentToPost({...commentToPost, [e.target.name]: e.target.value})
    }
    function addComment(e) {
        e.preventDefault()
        console.log(commentToPost)
       fetch(`/climbs`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(commentToPost)
       })
       .then( res => res.json())
       .then( data => console.log(data))
       .catch( error => console.log(error.message));
        setCommentToggle(false)
        setCommentToPost({})
    }
    function eraseRoute() {
        console.log("erased")
    }
    return (
        <div id="routeWindowCard" style={{padding: "1em"}}>
            {isAdmin ? <button onClick={eraseRoute}>Erace Route</button> : null}
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
            <h2>User Climbs:</h2>
            {user ? 
                <button onClick={() => {setCommentToggle(true)}}> Add your climb </button>
            : 
                null
            }
            
            {commentToggle ? 
            <div>
                <form onSubmit={addComment}>
                    <textarea name="comment" value={commentToPost.comment} onChange={onChangeComment}/>
                    <button type='submit'>Submit comment</button>
                    <button onClick={()=> { return setCommentToggle(false), setCommentToPost({})}}>Cancel</button>
                </form>
            </div>
            :
            null
            }
                <div id="commentDivs">
                    {mappedClimbs}
                </div>
        </div>  

    );
}
export default RightInfoWindow