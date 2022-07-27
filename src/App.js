import Navbar from "./Navbar";
import Home from "./components/Home";
import Requests from "./components/Requests";
import Members from './components/Members';
import Post from './components/Post';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ users: [] });



  useEffect(() => {
    fetchUsers()
  }, []);


  function fetchUsers() {
    return fetch('https://obscure-headland-31666.herokuapp.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setUserData(data);
      })
  }



  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Requests" element={<Requests />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div> </>
  )
}

export default App;
