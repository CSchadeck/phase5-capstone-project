import React, { useEffect, useState } from "react";



export default function Members() {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("https://obscure-headland-31666.herokuapp.com/users")
            .then(r => r.json())
            .then(data => setMembers(data))

    }, []);
    console.log(members)

    const membersArr = members.map((member) => (
        
        <div key={member.id} className="member_card">
            <h3 className="member_card_">Username: {member.username}</h3>
            <div className="member_card_">Email: {member.email}</div>
            <div className="member_card_">Bio: {member.bio}</div>
        </div>
        
    ))


    return (
        <div>
            {membersArr}
        </div>
    )

}