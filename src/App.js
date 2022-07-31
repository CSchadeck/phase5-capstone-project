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

  const [postRequest, setPostRequest] = useState([])
  const [requestData, setRequestData] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  //request GET
  useEffect(() => {
    fetch("https://obscure-headland-31666.herokuapp.com/requests")
      .then((r) => r.json())
      .then((data) => {
        setRequestData(data);
        console.log(requestData)
      })
  }, [postRequest]);

  //user authorization log in
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container">
        {user ? (
          <Routes>
            <Route exact path="/" element={<Home user={user} />} />
            <Route path="/Requests" element={<Requests setUser={setUser} requestData={requestData} />} />
            <Route path="/Members" element={<Members setUser={setUser} />} />
            <Route path="/Post" element={<Post setUser={setUser} postRequest={postRequest} setPostRequest={setPostRequest} requestData={requestData} />} />
            <Route path="/profile" element={<UserProfile user={user} setUser={setUser} />}/>
             </Routes>
  
        ) : (
          <Routes>
            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/SignUp" element={<SignUp setUser={setUser} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}

      </div>
    </>
  );
}

export default App;
