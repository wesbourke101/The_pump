import React, {useState} from "react";
import ClimbsReviews from "./ClimbsReviews";

function UserProfile({user, appEraseFunction}) {
    const {climbs, id} = user
    const [toggleClimbs, setToggleClimbs] = useState(false)
    const mappedClimbs = user.climbs.map((climb) => {return <ClimbsReviews key={`${id}ClimbCard`} climb={climb} appEraseFunction={appEraseFunction}/>} )
   
    return (
        <div id="columnDirection">
            <div>
                <div className="mainProfile" style={{display: "flex", backgroundColor: "#B4BB72"}}>
                    <div className="userCards" style={{backgroundColor: "#F6FAF7"}}>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <h3>{user.preferred_climbing_style}</h3>
                        <h4>Climbs completed: {climbs.length}</h4>
                    </div>
                    <div className="userCards" style={{backgroundColor: "#F6FAF7"}}>
                        Trad gear
                    </div>
                    <div className="userCards" style={{backgroundColor: "#F6FAF7"}}>
                        Sport gear
                    </div>
                </div>
                <div className="mainProfile" style={{display: "flex", backgroundColor: "#B4BB72"}}>
                    <div id="userClimbCardsDiv" style={{margin: "auto", backgroundColor: "#F6FAF7"}}>
                        {climbs[0] ? mappedClimbs : <h1>You have no logged climbs</h1>}
                            
                    </div>
                </div>    
            </div>
        </div>
    );
}
export default UserProfile;