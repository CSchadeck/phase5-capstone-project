import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setUser, env }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("")
  let navigate = useNavigate();

  function handleSubmit(e) {
    console.log(e);

    const postBody = {
      username: username,
      password,
      password_confirmation: passwordConfirmation,
      bio,
      email
    };

    console.log(postBody);

    e.preventDefault();
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate('/')}
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label className="signup-label"  htmlFor="username">Username</label>
        <input
          className="signup-input"
          type="text"
          id="username"
          placeholder="Enter Username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="signup-label"  htmlFor="password">Password</label>
        <input
          className="signup-input"
          type="password"
          id="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label className="signup-label" htmlFor="password">Password Confirmation</label>
        <input
          className="signup-input"
          type="password"
          id="password_confirmation"
          placeholder="Re-Enter a password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label className="signup-label"  htmlFor="email">Email</label>
        <input
          className="signup-input"
          type="text"
          id="email"
          placeholder="your@emailaddress.com"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="signup-label"  htmlFor="Bio">Bio</label>
        <input
          className="signup-input"
          type="text"
          id="bio"
          placeholder="Tell us about yourself"
          autoComplete="off"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <div></div>
        <button className="signup-label button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
