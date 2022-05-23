import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import UserProfile from "./UserProfile";
import Main from "./Main"
import Login from "./Login";
import SignUp from "./SignUp"
import '../styles/index.css';

function App() {
///////////////////////////////////////////////////////////////////////////////////  
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
 console.log(user)
  function handleSubmit(userInfo) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => console.log(user));
  }
///////////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////////////////////////////////////////  
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
        <Header />
      </div>
      <Routes>
        <Route path="/" element={ <Main userAddRoute={userAddRoute} routeData={routeData}/>} />
        <Route path="/user_profile" element={<UserProfile />}/>
        <Route path="/login" element={<Login handleSubmit={handleSubmit}/>}/>
        <Route path="/sign_up" element={<SignUp />}/>
      </Routes>
    </div> 
  );
}
export default App;
