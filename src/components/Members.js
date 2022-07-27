import React, { useEffect, useState } from "react";



export default function Members() {
    const [id, username, email, bio] = useState("All")

    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch(`https://obscure-headland-31666.herokuapp.com/users/${id}`, {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify,
            username: username,
            email: email,
            bio: bio,

        }).then((r) => r.json())
        .then((members) => setMembers(members));
}, []);

return (
    <li>
        <div className="request-card">
            <h3 className="request-card__">{members.username}</h3>
            <p className="request-card__">{members.email}</p>
            <p className="request-card__">{members.bio}</p>
            <p>
                <button>🐾 </button>
            </p>
        </div>
    </li>
);

}