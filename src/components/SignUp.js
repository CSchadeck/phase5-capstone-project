import React, { useState } from "react";

export default function SignUp({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("https://obscure-headland-31666.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => console.log(user));
        }
      });
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username" 
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter a password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            placeholder="Re-Enter a password" 
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
             />
               <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="your@emailaddress.com" 
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            <label htmlFor="Bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Tell us about yourself" 
            autoComplete="off"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }