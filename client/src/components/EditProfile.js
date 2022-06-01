import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

function EditProfile ({user, setToggleAuth}) {

    const navigate = useNavigate();
    const [newUserInfo, setNewUserInfo] = useState({})
    function newUserFormData(e) {
        e.preventDefault()
        setNewUserInfo({...newUserInfo, [e.target.name]: e.target.value})
    }
    function cancelAndReturn() {
        setNewUserInfo({})
        navigate('/user_profile')
    }
    function editUserProfile(e) {
        e.preventDefault()
        console.log(newUserInfo)
///////// patc
        fetch(`/user_admins/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newUserInfo)
        })
        .then( res => res.json())
        .then( data => setToggleAuth(data))
        .catch( error => console.log(error.message));
        setNewUserInfo({})
        navigate('/user_profile')
    }

    return (
        <div id="signUpDiv">
            <form onSubmit={editUserProfile} id="loginFrom">
                <label>Preferred climbing style</label>
                <select id="inputClass" onChange={newUserFormData} name="preferred_climbing_style" value={newUserInfo.preferred_climbing_style}>
                    <option value=''>select</option>
                    <option value='Bouldering'>Bouldering</option>
                    <option value='Sport'>Sport</option>
                    <option value='Traditional'>Traditional</option>
                </select>
                <label>First name</label>
                <input id="inputClass" name="first_name" type="type" onChange={newUserFormData} value={newUserInfo.first_name}/>
                <label>Last name</label>
                <input id="inputClass" name="last_name" type="type" onChange={newUserFormData} value={newUserInfo.last_name}/>
                <label>User name</label>
                <input id="inputClass" name="user_name" type="type" onChange={newUserFormData} value={newUserInfo.user_name}/>
                <button type="submit">Edit profile</button>
                <button style={{marginLeft: ".5em"}} onClick={cancelAndReturn}>Cancel</button>
            </form>
        </div>
    );
}


export default EditProfile;