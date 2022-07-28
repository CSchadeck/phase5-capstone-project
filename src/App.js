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

  const [ postRequest, setPostRequest] = useState ([])
  const [requestData, setRequestData] = useState([]);
    
    useEffect(() => {
        fetch("https://obscure-headland-31666.herokuapp.com/requests")
        .then((r) => r.json())
        .then((data) => {
            setRequestData(data);
            console.log(requestData)
        })
    }, [postRequest]);
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Requests" element={<Requests requestData={requestData}/>} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Post" element={<Post postRequest={postRequest} setPostRequest={setPostRequest} requestData={requestData}/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
