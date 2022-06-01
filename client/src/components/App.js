import React, {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header"
import UserProfile from "./UserProfile";
import Main from "./Main"
import Login from "./Login";
import EditProfile from "./EditProfile";
import Loading from "./Loading";
import RouteApproval from "./RouteApproval";
import SignUpPage from "./SignUpPage";
import '../styles/index.css';

function App() {
  let filteredDeletedGear = [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [rerenderComment, setRerenderComment] = useState([])
  const [ogGearFetch, setOgGearFetch] = useState([])
  const [ogClimbsFetch, setOgClimbsFetch] = useState([])
  const [toggleAuth, setToggleAuth] = useState(null);
  const [toggleDeleteClimb, setToggleDeleteClimb] = useState([])
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(NaN);

  function handleLogOut() {
    fetch(`/logout`, {
        method: "DELETE"
    })
    .then(setUser(null), setIsAdmin(false) )
    .catch( error => console.log(error.message));
    navigate('/')
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
      navigate('/')
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
  useEffect(() => {
    fetch(`/gears`)
    .then( res => res.json())
    .then( data => setOgGearFetch(data))
    .catch( error => console.log(error.message));
  }, [toggleAuth])
  useEffect(() => {
    fetch(`/climbs`)
    .then( res => res.json())
    .then( data => setOgClimbsFetch(data))
    .catch( error => console.log(error.message));
  }, [toggleDeleteClimb])
  function userAddRoute(formAddNewRoute) {
    fetch('/routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formAddNewRoute),
    })
    .then(response => response.json())
    .then(data => {console.log('Success:', data);
    })
    //////////////////////////
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  const [routeData, setRouteData] = useState([])
    useEffect(() => {
      fetch(`/routes`)
      .then( res => res.json())
      .then( data => setRouteData(data))
      .catch( error => console.log(error.message));
    }, [toggleAuth])
  function postComments(commentToPost) { 
      fetch(`/climbs`, {
      method: "POST",
      headers: {  
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(commentToPost)
    })
    .then( res => res.json())
    .then( data => setOgClimbsFetch([...ogClimbsFetch, data]))
    .catch( error => console.log(error.message));
  }
  function appEraseFunction(id) {
    fetch(`/climbs/${id}`, {
        method: "DELETE"
    })
    .then( res => res.json())
    .then(data => setToggleDeleteClimb(data))
    .catch( error => console.log(error.message));
  }
  function deleteGearfetch(id) {
    fetch(`/gears/${id}`, {
        method: "DELETE"
    })
    .then( res => res.json())
    .then( data => setToggleAuth(data))
    .catch( error => console.log(error.message));
  }
  function createGearFetch(newGear) {
    fetch(`/gears`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newGear)
    })
    .then( res => res.json())
    .then( data => setOgGearFetch([...ogGearFetch, data]))
    .catch( error => console.log(error.message));
  }
  return (
    <div>
      <div>
        <Header handleLogOut={handleLogOut} user={user} isAdmin={isAdmin}/>
      </div>
      <Routes>
        <Route path="/" element={ <Main ogClimbsFetch={ogClimbsFetch} userAddRoute={userAddRoute} routeData={routeData} user={user} isAdmin={isAdmin} postComments={postComments}/>} />
        {user ? <Route path="/user_profile" element={<UserProfile setToggleDeleteClimb={setToggleDeleteClimb} ogClimbsFetch={ogClimbsFetch} ogGearFetch={ogGearFetch} createGearFetch={createGearFetch} deleteGearfetch={deleteGearfetch} appEraseFunction={appEraseFunction} user={user}/>}/> : null}
        <Route path="/login" element={<Login handleSubmit={handleSubmit} handleLogOut={handleLogOut} user={user}/>}/>
        <Route path="/route_approval" element={<RouteApproval />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/edit_profile" element={<EditProfile setToggleAuth={setToggleAuth} user={user} />} />
      </Routes>
    </div> 
  );
}
export default App;
