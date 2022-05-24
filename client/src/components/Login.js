import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/index.css"

function Login({handleSubmit, user}) {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    });
    function userFunction(e) {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    };
    function loginFunction(e) {
      e.preventDefault()
      console.log(userInfo)
      handleSubmit(userInfo)
    };

    return ( 
        <div>
            {user ? "Successfully logged in" : null}
            <div id="loginDiv">
                <form id="loginFrom" onSubmit={loginFunction}>
                    <label>Username:</label>
                    <input id="inputClass" name="username" type="type" onChange={userFunction} value={userInfo.username}/>

                    <label>Password:</label>
                    <input id="inputClass" name="password" type="type" onChange={userFunction} value={userInfo.password}/>

                    <button id="loginButton" type="submit"> Login </button>
                </form>
                <form>
                    <button id="signUpButton" type="submit"> Sign Up</button>
                </form>
            
            </div>
        </div>
    );
}
export default Login