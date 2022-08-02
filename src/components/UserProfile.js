import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserProfileUpdate from './UserProfileUpdate';


function UserProfile({ user, setUser, env }) {
    // const { id, username, email, bio } = user;
    //const history = userHistory();
    const [newUsername, setUsername] = useState("")
    const [newEmail, setEmail] = useState("")
    const [newBio, setBio] = useState("")

    // useEffect(() => {
    //     // auto-login
    //     fetch("/me").then((r) => {
    //         if (r.ok) {
    //             r.json().then((user) => setUser(user));
    //         }
    //     });
    // }, []);

    // console.log(newUsername)
    // console.log(newEmail)
    // console.log(newBio)

    function handleUpdateUser(e) {
        e.preventDefault();
        fetch(`/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
            body: JSON.stringify({
                username: newUsername,
                email: newEmail,
                bio: newBio,
            })
        })
            .then(r => r.json())
            .then((update) => {
                console.log(update);
                setUser(update);
            });
    };

    return (
        <div>
            <div key={user.id} className="user_card">
                <h3 className="user_card_username">Username: {user.username}</h3>
                <p className="user_card_email">Email: {user.email}</p>
                <p className="user_card_bio">Bio: {user.bio}</p>
                {/* <UserProfileUpdate handleUpdateUser={handleUpdateUser}/> */}
            </div>
            <div>
                <form onSubmit={(e) => handleUpdateUser(e)}>
                    <div className='form-block'>
                        <label htmlFor="newUsername">Username</label>
                        <input
                            value={newUsername}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form_field"
                            type="text"
                            placeholder="Update username"
                            name="newUsername"
                            id="newUsername"
                        />
                    </div>

                    <div className='form-block'>
                        <label htmlFor='newEmail'>Email</label>
                        <input
                            value={newEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form_field"
                            type="text"
                            placeholder="update email"
                            name="newEmail"
                            id="newEmail"
                        />
                    </div>
                    <div className='form-block'>
                        <label htmlFor='newBio'>Bio</label>
                        <input
                            value={newBio}
                            onChange={(e) => setBio(e.target.value)}
                            className="form_field"
                            type="text"
                            placeholder="Update"
                            name="newBio"
                            id="newBio"
                        />
                    </div>
                    <div className='form-block'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )


}

export default UserProfile