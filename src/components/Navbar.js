import React from "react";
import { Link, useResolvedPath, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser, env }) {
    let navigate = useNavigate();
    function handleLogOut() {
        fetch(`/logout`, { method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    setUser()
                    localStorage.removeItem('condoPetID');
                    navigate("/")
                }
            })
    };

    console.log('nav:', user)

    return <>
        <nav className="navbar">
            <Link to="/" className="site_title">CondoPet🐾</Link>
            <ul>
                {user ? (<>
                    <CustomLink to="/Requests">Requests</CustomLink>
                    <CustomLink to="/Members">Members</CustomLink>
                    <CustomLink to="/Post">Post</CustomLink>
                    <CustomLink to="/Profile">My Profile</CustomLink>
                    <CustomLink to="/logout" onClick={handleLogOut}>Logout</CustomLink>
                </>
                   // removed for custom link.  <button className="logout" onClick={handleLogOut}>Logout</button>
                ) : (
                    <CustomLink to="/Login">Login</CustomLink>
                )}
            </ul>
        </nav>
    </>

}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}