import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setUser, env }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    function handleSubmit(e) {
        console.log(e);
        console.table({ username, password });

        e.preventDefault();
        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            console.log('response', r)
            if (r.ok) {
                r.json().then((user) => {
                    console.log('user', user);
                    setUser(user)
                    navigate('/');
                    localStorage.setItem('condoPetID', user.id);
                });
            } else {
                alert('Invalid Username or Password');
                
            }
        });
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label  className="login-label" htmlFor="username">Username</label>
                <input
                className="login-input"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="enter username"
                />
                <label  className="login-label" htmlFor="password">Password</label>
                <input
                className="login-input"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="enter password"
                />
                <button className="login-label button"  type="submit">Login</button>
                <div><></></div>
                <Link to="/SignUp">Not a member? Click here to sign up!</Link>
            </form>
        </div>

    );


}