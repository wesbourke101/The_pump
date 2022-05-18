import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import UserProfile from "./UserProfile";
import Main from "./Main"
import '../styles/index.css';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/user_profile" element={<UserProfile />}/>
      </Routes>
    </div> 
  );
}
export default App;
