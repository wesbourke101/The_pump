import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import IndividualClimbComments from "./IndividualClimbComments";

function RightInfoWindow({ogClimbsFetch, openRightWindow, user, isAdmin, postComments}) {
    const navigate = useNavigate();
    const {longitude, latitude, approved, climb_id, description, directions, id, picture, route_name} = openRightWindow
    const [commentToggle, setCommentToggle] = useState(false);
    // const climbs = openRightWindow.climbs;
    const [commentToPost, setCommentToPost] = useState({
        user_admin_id: (user ? user.id : 0),
        route_id: id
    })
    
    const filteredClimbs = ogClimbsFetch.filter(climb => openRightWindow.id === climb.route_id)
    console.log(filteredClimbs)
    console.log(commentToPost)
    console.log(filteredClimbs)
    console.log(ogClimbsFetch)
   
    const mappedClimbs = filteredClimbs.map((climb) => {
        return <IndividualClimbComments key={climb.id} climb={climb}/>
    })
    function onChangeComment(e) {
        setCommentToPost({...commentToPost, [e.target.name]: e.target.value})
    }
    function addComment(e) {
        e.preventDefault();
        postComments(commentToPost);
        setCommentToggle(false);
        setCommentToPost({
            user_admin_id: (user ? user.id : 0),
            route_id: id
        });
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
            <h2>Tips for climb:</h2>
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
                    {mappedClimbs}
        </div>  

    );
}
export default RightInfoWindow