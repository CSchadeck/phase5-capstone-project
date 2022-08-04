import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Requests from "./components/Requests";
import Members from './components/Members';
import Post from './components/Post';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "./components/UserProfile";




function App() {

  const env = `https://obscure-headland-31666.herokuapp.com`;
  //const env = `http://localhost:3000`;
  const [user, setUser] = useState({});

  //user authorization log in
  useEffect(() => {
    // auto-login
     fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} env={env} />
      <div className="container">
        {user ? (
          <Routes>
            <Route exact path="/" element={<Home user={user} env={env} />} />
            <Route path="/Requests" element={<Requests user={user} setUser={setUser} env={env} />} />
            <Route path="/Members" element={<Members setUser={setUser} env={env} />} />
            <Route path="/Post" element={<Post env={env} user={user}/>} />
            <Route path="/profile" element={<UserProfile user={user} setUser={setUser} env={env} />} />
          </Routes>

        ) : (
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} env={env} />} />
            <Route path="/signUp" element={<SignUp setUser={setUser} env={env} />} />
            <Route path="/" element={<Home />} env={env} />
          </Routes>
        )}

      </div>
    </>
  );
}

export default App;
