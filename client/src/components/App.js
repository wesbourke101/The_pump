import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import UserProfile from "./UserProfile";
import Main from "./Main"
import Login from "./Login";
import SignUp from "./SignUp"
import '../styles/index.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user)

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }



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

  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/user_profile" element={<UserProfile />}/>
        <Route path="/login" element={<Login handleSubmit={handleSubmit}/>}/>
        <Route path="/sign_up" element={<SignUp />}/>
      </Routes>
    </div> 
  );
}
export default App;
