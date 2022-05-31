import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function ModalGearPopUP ({setModalGear, modalFromState, setModalFormState, createGearFetch, user}) {
    const [camToggleTernary, setCamToggleTernary] = useState(true)
    const [nutToggleTernary, setNutToggleTernary] = useState(true)
    
    function setGearFormState(e) {
        setModalFormState({...modalFromState, [e.target.name]: e.target.value})
    }
    function postGearToDataBase(e) {
        e.preventDefault()
        if(camToggleTernary.number_cam !== "err" && camToggleTernary.brand_cam !== "err"){
            setModalFormState( modalFromState.cam = true)
            console.log(modalFromState)
            createGearFetch(modalFromState)
            setModalFormState({
                number_cam: 0,
                brand_cam: "",
                cam: false,
                number_nut: 0,
                brand_nut: "",
                nut: false,
                user_admin_id: user.id
            })
            setModalGear(false)
        }
        else {
            alert("Please enter all fields")
        }
    }
    function postNutToDataBase(e) {
        e.preventDefault()
        console.log('Made it here')
        setModalFormState( modalFromState.nut = true)
        createGearFetch(modalFromState)
        setModalFormState({
            number_cam: 0,
            brand_cam: "",
            cam: false,
            number_nut: 0,
            brand_nut: "",
            nut: false,
            user_admin_id: user.id
        })
        setModalGear(false)
    }
    function cancelButton() {
        setCamToggleTernary(true)
        setModalGear(false)
        setNutToggleTernary(false)
    }

    return (
        <div>
            <div>
                <button onClick={() => setCamToggleTernary(!camToggleTernary)}> Add a Cam </button>
                <button onClick={() => setNutToggleTernary(!nutToggleTernary)}> Add a HexNut </button>

                {camToggleTernary ? 
                    null 
                : 
                    <div>
                        <form id="camForm1" onSubmit={postGearToDataBase} className="prettyTextDivs" style={{padding: ".5em", width: "19%", marginLeft: "auto", marginRight: "auto", marginTop: "2em"}}>
                            Cam Size: 
                            <select style={{margin: ".5em"}} onChange={setGearFormState} value={camToggleTernary.number_cam} name="number_cam" id="subject">
                                <option value="err">Pick #</option>
                                <option value=".25">.25</option>
                                <option value=".5">.5</option>
                                <option value=".75">.75</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <br/>
                            Brand: 
                                <select style={{margin: ".5em"}} onChange={setGearFormState} value={camToggleTernary.brand_nut} name="brand_cam" id="subject">
                                    <option value="err">Pick your brand</option>
                                    <option value="Black Diamond">Black Diamond</option>
                                    <option value="DMM Dragon">DMM Dragon</option>
                                    <option value="Totem">Totem</option>
                                    <option value="FlexCam">FlexCam</option>
                                    <option value="Metolius">Metolius</option>
                                    <option value="Wild Country">Wild Country</option>
                                    <option value="Alien">Alien</option>
                                </select>
                                <br/>
                            <button type="submit">Sumbit</button>
                            <button onClick={cancelButton}>Cancel</button>
                        </form>
                    </div>
                }
                {nutToggleTernary ? 
                    null
                    :
                    <div>
                        <form id="camForm1" onSubmit={postNutToDataBase} className="prettyTextDivs" style={{padding: ".5em", width: "19%", marginLeft: "auto", marginRight: "auto", marginTop: "2em"}}>
                            Nut Size: 
                            <select style={{margin: ".5em"}}  onChange={setGearFormState} value={camToggleTernary.number_nut} name="number_nut">
                                <option value="err">Pick #</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <br/>
                            Brand: 
                            <select style={{margin: ".5em"}} onChange={setGearFormState} value={camToggleTernary.brand_nut} name="brand_nut"    >
                                <option value="err">Pick your brand</option>
                                <option value="Black Diamond">Black Diamond</option>
                                <option value="Metolius">Metolius</option>
                                <option value="Wild Country">Wild Country</option>
                            </select>
                            <br/>
                            <button type="submit">Sumbit</button>
                            <button onClick={cancelButton}>Cancel</button>       
                        </form> 
                    </div>                                     
            }             
            </div>    
        </div>
        
    );
}

export default ModalGearPopUP;