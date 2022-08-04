import React, { useEffect, useState } from "react";



export default function Members({ env }) {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch(`/users`)
            .then(r => r.json())
            .then(data => setMembers(data))

    }, []);
    //console.log(members)

    const membersArr = members.map((member) => (

        <div key={member.id} className="member_card">
            <h3 className="member_card_username">Username: {member.username}</h3>
            {/* <div className="member_card_email">Email: {member.email}</div> */}
            <div className="member_card_bio">Bio: {member.bio}</div>
        </div>

    ))


    return (
        <div>
            <h1 className="text-center">Members</h1>

            {membersArr}
        </div>
    )

}