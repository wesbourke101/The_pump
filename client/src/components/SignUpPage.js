import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage () {
    const navigate = useNavigate();
    const [newUserInfo, setNewUserInfo] = useState({
        first_name: "",
        last_name: "",
        preferred_climbing_style: "",
        user_name: "",
        password: "",
        password_confirmation: "",
        is_admin: false,
    })
    function newUserFormData(e) {
        e.preventDefault()
        setNewUserInfo({...newUserInfo, [e.target.name]: e.target.value})
    }
    function cancelAndReturn() {
        setNewUserInfo({
            first_name: "",
            last_name: "",
            preferred_climbing_style: "",
            user_name: "",
            password: "",
            password_confirmation: "",
            is_admin: false,
        })
        navigate('/')
    }
    function createNewUser(e) {
        e.preventDefault()
        fetch(`/user_admins`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
            },
            body: JSON.stringify(newUserInfo)
        })
        .then( res => res.json())
        .then( data => {console.log(data)})
        .catch( error => console.log(error.message));
        navigate('/')
    }

    return (
        <div id="signUpDiv">
            <form onSubmit={createNewUser} id="loginFrom">
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
                <label>Password</label>
                <input id="inputClass" name="password" type="password" onChange={newUserFormData} value={newUserInfo.password}/>
                <label>Confirm password</label>
                <input id="inputClass" name="password_confirmation" type="password" onChange={newUserFormData} value={newUserInfo.password_confirmation}/>
                <button type="submit">Create new profile</button>
                <button style={{marginLeft: ".5em"}} onClick={cancelAndReturn}>Cancel</button>
            </form>
        </div>
    );
}
export default SignUpPage;