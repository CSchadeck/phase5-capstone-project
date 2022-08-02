import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserProfileUpdate from './UserProfileUpdate';
import UserCard from './UserCard';


function UserProfile({ user, setUser, env }) {
    // const { id, username, email, bio } = user;
    //const history = userHistory();
    const [newUsername, setUsername] = useState("")
    const [newEmail, setEmail] = useState("")
    const [newBio, setBio] = useState("")
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(user.requests);
    }, []);

    console.log('cards', cards);

    function handleUpdateUser(e) {
        e.preventDefault();
        fetch(`/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
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

    function handleUserCard(e) {
        e.preventDefault()
        // patch request
    }

    return (
        <>
            <h1>Profile Page</h1>

            <div>
                <div key={user.id} className="user_card">
                    <h2 className="user_card_username">{user.username}</h2>
                    <p className="user_card_email">Email: {user.email}</p>
                    <p className="user_card_bio">Bio: {user.bio}</p>
                    {/* <UserProfileUpdate handleUpdateUser={handleUpdateUser}/> */}
                </div>
                {/* <div>
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
            </div> */}

                <div className='user-cards'>
                    <h2>User Requests</h2>
                    <div className='user-cards__status'>
                        <div className='user-cards--accepted'>Accepted: {cards.filter((card) => card.accepted).length}</div>
                        <div className='user-cards--open'>Open: {cards.filter((card) => !card.accepted).length}</div>
                    </div>
                    {cards.length === 0 ? <div>No requests at this time.</div> : cards.map((card) =>
                        <UserCard key={card.id} props={card} user={user} />
                    )}
                </div>
            </div>
        </>
    )


}

export default UserProfile