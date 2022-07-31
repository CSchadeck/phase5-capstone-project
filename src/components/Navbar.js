import React from "react";
import { Link, useResolvedPath, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
    let navigate = useNavigate();
    function handleLogOut() {
      fetch("https://obscure-headland-31666.herokuapp.com//logout", { method: "DELETE" })
        .then((r) => {
          if (r.ok) {
            setUser()
            navigate("/")
          }
        })
    };


    return <>
        <nav className="navbar">
            <Link to="/" className="site_title">CondoPet🐾</Link>
            <ul>
                {user ? ( 
                    <div>
                <CustomLink  to="/Requests">Requests</CustomLink>
                <CustomLink  to="/Members">Members</CustomLink>
                <CustomLink to="/Post">Post</CustomLink>
                <CustomLink to="/Profile">Myprofile</CustomLink>
                <button onClick={handleLogOut}>Logout</button>
                </div>
              ) : (
                    <CustomLink to="/Login">Login</CustomLink>
                )}
            </ul>
        </nav>
    </>
    
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}> 
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
    }