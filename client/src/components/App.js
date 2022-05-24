import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import UserProfile from "./UserProfile";
import Main from "./Main"
import Login from "./Login";
import SignUp from "./SignUp"
import '../styles/index.css';

function App() {
///////////////////////////////////////////////////////////////////////////////////  login/logout actions
  const [user, setUser] = useState(null);
  const [toggleAuth, setToggleAuth] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(NaN);
  function handleLogOut() {
    fetch(`/logout`, {
        method: "DELETE"
    })
    .then(setUser(null), setIsAdmin(false) )
    .catch( error => console.log(error.message));
  }
  function handleSubmit(userInfo) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((userLogin) => setToggleAuth(userLogin));
  }
  useEffect(() => {
    fetch("/auth")
    .then((response) => {
      if (response.ok) {
        response.json().then((userRes) => {
          setUser(userRes)
          setUserId(userRes.id)
          if (userRes.is_admin) {
            setIsAdmin(true)
          }
        });
      }
    });
  }, [toggleAuth]);
  
///////////////////////////////////////////////////////////////////////////////////  
/////////////////////////////////////////////////////////////////////////////////// posts  
  function userAddRoute(formAddNewRoute) {
    fetch('/routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formAddNewRoute),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////// 
  const [routeData, setRouteData] = useState([])
    useEffect(() => {
      fetch(`/routes`)
      .then( res => res.json())
      .then( data => setRouteData(data))
      .catch( error => console.log(error.message));
    }, [])
/////////////////////////////////////////////////////////////////////////////////// 

  return (
    <div>
      <div>
        <Header handleLogOut={handleLogOut} user={user}/>
      </div>
      <Routes>
        <Route path="/" element={ <Main userAddRoute={userAddRoute} routeData={routeData} user={user} isAdmin={isAdmin}/>} />
        {user ? <Route path="/user_profile" element={<UserProfile user={user}/>}/> : null}
        <Route path="/login" element={<Login handleSubmit={handleSubmit} handleLogOut={handleLogOut} user={user}/>}/>
        <Route path="/sign_up" element={<SignUp />}/>
      </Routes>
    </div> 
  );
}
export default App;
