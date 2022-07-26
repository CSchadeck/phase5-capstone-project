import React from 'react';
import Navbar from "./Navbar";
import Home from "./components/Home";
import Requests from "./components/Requests";
import Members from './components/Members';
import Post from './components/Post';
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
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
        </Routes>
      </div> </>
  )
}

export default App;
