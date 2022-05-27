import React, { useState } from "react";

function ModalGearPopUP ({setModalGear, modalFromState, setModalFormState, createGearFetch, user}) {
    const [camToggleTernary, setCamToggleTernary] = useState(true)

    function setGearFormState(e) {
        setModalFormState({...modalFromState, [e.target.name]: e.target.value})
    }
    function postGearToDataBase(e) {
        e.preventDefault()
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
    return (
        <div>
            <div>
                <button onClick={() => setCamToggleTernary(!camToggleTernary)}> Add a Cam </button>
                {camToggleTernary ? 
                    null 
                : 
                    <div>
                        <form id="camForm1" onSubmit={postGearToDataBase} className="prettyTextDivs" style={{padding: ".5em", width: "19%", marginLeft: "auto", marginRight: "auto", marginTop: "2em"}}>
                            Cam Size: 
                            <select style={{margin: ".5em"}} onChange={setGearFormState} value={camToggleTernary.number_cam} name="number_cam" id="subject">
                                <option value={NaN}>Pick #</option>
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
                                <select style={{margin: ".5em"}} onChange={setGearFormState} value={camToggleTernary.brand_cam} name="brand_cam" id="subject">
                                    <option value={null}>Pick your brand</option>
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
                            <button onClick={() => setCamToggleTernary(true)}>Cancel</button>
                        </form>
                    </div>
                }
                {/* <form name="form1" id="form1" onSubmit={postGearToDataBase}>
                    Subjects: 
                        <select name="subject" id="subject">
                            <option value="" selected="selected">Select subject</option>
                        </select>
                    <br/>
                    Topics: 
                        <select name="topic" id="topic">
                            <option value="" selected="selected">Please select subject first</option>
                        </select>
                    <br/>
                    Chapters: 
                        <select name="chapter" id="chapter">
                            <option value="" selected="selected">Please select topic first</option>
                        </select>
                    <br/>
                        <input type="submit" value="Submit"/>
                    <button onClick={() => setModalGear(false)}>Cancel</button>
                </form>      */}
            </div>    
        </div>
        
    );
}

export default ModalGearPopUP;