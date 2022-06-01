import React, {useState} from "react";
import ClimbsReviews from "./ClimbsReviews";

import TradCard from "./TradCard";
import ModalGearPopUP from "./ModalGearPopUP";
import { useNavigate } from "react-router-dom";

function UserProfile({ setToggleDeleteClimb, ogClimbsFetch, ogGearFetch, user, appEraseFunction, deleteGearfetch, createGearFetch}) {
    const [modalGear, setModalGear] = useState(false);
    const [modalFromState, setModalFormState] = useState({
        number_cam: 0,
        brand_cam: "",
        cam: false,
        number_nut: 0,
        brand_nut: "",
        nut: false,
        user_admin_id: user.id
    })
    const {climbs, id, gears} = user;
    const [toggleClimbs, setToggleClimbs] = useState(false);
    const navigate = useNavigate();
    let userClimbById = ogClimbsFetch.filter((userClimbs) => userClimbs.user_admin_id == user.id)
    const mappedClimbs = userClimbById.map((climb) => {return <ClimbsReviews key={`${id}ClimbCard`} setToggleDeleteClimb={setToggleDeleteClimb}climb={climb} appEraseFunction={appEraseFunction}/>} )
////////////////////////////////////////////////////////////////////////////////////////////
    let userGearById = ogGearFetch.filter((usergear) => usergear.user_admin_id == user.id)
    let tradGearFilter = userGearById.filter((gear) => gear.cam == true)
    let mappedTradGear = tradGearFilter.map(tradGear => { return <TradCard deleteGearfetch={deleteGearfetch} key={tradGear.id} tradGear={tradGear}/> })
////////////////////////////////////////////////////////////////////////////////////////////
    let nutGearFilter = userGearById.filter((gear) => gear.nut == true)
    let mappedNutGear = nutGearFilter.map(tradGear => { return <TradCard deleteGearfetch={deleteGearfetch} key={tradGear.id} tradGear={tradGear}/> })

    function editProfileButton() {
        navigate('/edit_profile')
    }
 
    let camCount = mappedTradGear.length
    let nutCount = mappedNutGear.length
    return (
        <div id="columnDirection">
            {modalGear ? <ModalGearPopUP user={user} setModalGear={setModalGear} createGearFetch={createGearFetch} modalFromState={modalFromState} setModalFormState={setModalFormState}/> : <div>
                <div className="mainProfile" style={{marginLeft: "auto", marginRight: "auto", height: "5em", width: "30em"}}>
                    <h1 style={{backgroundColor: "rgba(48, 62, 39, .5)", textAlign: "center", margin: "auto", WebkitBoxShadow: "1px 2px 3px rgba(0,0,0,.5)"}}>{user.first_name} {user.last_name}</h1>
                </div>
                <div className="mainProfile" style={{display: "flex", backgroundColor: "#B4BB72"}}>
                    <div className="userCards" style={{backgroundColor: "#F6FAF7"}}>
                        <button onClick={editProfileButton}>Edit profile</button>
                        <h3>Profile</h3> 
                        <div className="profileInfoOutterDiv">
                            <h3>User name:</h3>
                                <div className="prettyTextDivs">
                                    <h3 style={{textDecoration: 'underline', textAlign: "center"}}>{user.user_name}</h3>
                                </div>
                        </div>   
                        <div className="profileInfoOutterDiv">
                            <h3>Climber name:</h3>
                                <div className="prettyTextDivs">
                                    <h3 style={{textDecoration: 'underline', textAlign: "center"}}>{user.first_name} {user.last_name}</h3>
                                </div>
                        </div>    
                        <div className="profileInfoOutterDiv">
                            <h3>Perferred climbing discipline:</h3>
                                <div className="prettyTextDivs">  
                                    <h3 style={{textDecoration: 'underline', textAlign: "center"}}>{user.preferred_climbing_style}</h3>
                                </div>
                        </div> 
                        <div className="profileInfoOutterDiv"> 
                            <h3>Total climbs logged:</h3>   
                                <div className="prettyTextDivs">
                                    <h3 style={{textDecoration: 'underline', textAlign: "center"}}>{userClimbById.length}</h3>
                                </div>
                        </div>
                        <div className="profileInfoOutterDiv">
                            <h3>Total cams: </h3>
                                <div className="prettyTextDivs">
                                    <h3 style={{textDecoration: 'underline', textAlign: "center"}}>{camCount}</h3>
                                </div>   
                        </div> 
                        <div className="profileInfoOutterDiv">
                            <h3>Total nuts: </h3>
                                <div className="prettyTextDivs">
                                <h3 style={{textDecoration: 'underline', textAlign: "center"}}>{nutCount}</h3>
                            </div>   
                        </div>                                  
                    </div>
                        <div className="userCards" style={{backgroundColor: "#F6FAF7"}}>
                            <button onClick={() => setModalGear(true)}>Add Gear</button>
                            <h3>Trad gear</h3>  
                            {mappedTradGear}
                            {mappedNutGear}
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
            </div>}        
        </div>
    );
}
export default UserProfile;