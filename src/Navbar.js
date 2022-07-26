import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="navbar">
        <Link to="/" className="site_title">CondoPet</Link>
        <ul>
            <CustomLink  to="/Requests">Requests</CustomLink>
            <CustomLink  to="/Members">Members</CustomLink>
            <CustomLink to="/Post">Post</CustomLink>
            <CustomLink to="/Login">Login</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}> 
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
    }