import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import IndividualClimbComments from "./IndividualClimbComments";

function RightInfoWindow({openRightWindow, user, isAdmin, postComments}) {
    const navigate = useNavigate();
    const {longitude, latitude, approved, climb_id, description, directions, id, picture, route_name} = openRightWindow
    const [commentToggle, setCommentToggle] = useState(false);
    const climbs = openRightWindow.climbs;
    const [commentToPost, setCommentToPost] = useState({
        user_admin_id: (user ? user.id : 0),
        route_id: id
    })

    const mappedClimbs = climbs.map((climb) => {
        return <IndividualClimbComments climb={climb}/>
    })
    function onChangeComment(e) {
        setCommentToPost({...commentToPost, [e.target.name]: e.target.value})
    }
    function addComment(e) {
        e.preventDefault();
        postComments(commentToPost);
        ///usenavigate
        // navigate('/')
    }
    function eraseRoute() {
        console.log("erased")
    }
    return (
        <div id="routeWindowCard" style={{padding: "1em"}}>
            <div style={{ borderStyle: 'solid', borderWidth: "medium", padding: ".3em", margin: "0"}}>
                {isAdmin ? <button onClick={eraseRoute}>Erace Route</button> : null}
                <div style={{display: "flex", flex_wrap: "row", marginLeft: ".2em" }}>
                    <text><strong>Route Name:</strong> {route_name}</text> 
                </div>
                <div style={{display: "flex", flex_wrap: "row", marginLeft: ".2em" }}>
                    <text><strong>Directions:</strong> {directions}</text>
                </div>
                <div style={{display: "flex", flex_wrap: "row", marginLeft: ".2em" }}>
                    <text><strong>Description:</strong> {description}</text>        
                </div>
            </div>
            <h2>User Climbs:</h2>
            {user ? 
                <button style={{marginBottom: ".5em"}} onClick={() => {setCommentToggle(true)}}> Add your climb </button>
            : 
                null
            }
            {commentToggle ? 
            <div>
                <form onSubmit={addComment} style={{border: "solid #303E27 4px"}}>
                    <label>Tips and tricks: </label>
                    <br/>
                    <textarea style={{marginTop: ".5em"}} name="comment" value={commentToPost.comment} onChange={onChangeComment}/>
                    <br/>
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