import React, { useState } from 'react';

function UserCard({ props, user, members }) {
    // const { id, title, user_id, image, description, start_date, end_date, accepted } = props;

    function deleteHandler(e) {
        // fetch(`/requests/${props.id}`, {
        //     method: "DELETE",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         accepted: true,
        //         accepted_by: localStorage.getItem('condoPetID')
        //     })
        // })
        // .then(res => res.json())
        // .then((data) => {
        //     console.log(data);
        //     handleUpdatedRequest(data)
        //     alert('Thank you for volunteering.')
        // });
    }

    console.log('inside card', props)

    const accepted = props.accepted ? 'user-request_card--accepted' : '';
    const acceptedName = accepted ? members.filter(m => m.id == props.accepted_by)[0].username : 'nope';

    return (
        <div className={`user-request_card ${accepted}`}>
            <h3 className="user-request_card--title">{props.title}</h3>
            <div className="user-request_card--image">
                <img className='post-image' src={props.image}></img>
            </div>
            <div className="user-request_card--owner">{user.username}</div>
            <div className="user-request_card--description">{props.description}</div>
            <div className="user-request_card--start">{new Date(props.start_date).toLocaleString()}</div>
            <div className="user-request_card--end">{new Date(props.end_date).toLocaleString()}</div>
            {accepted ? <div className='user-request_card--status'>Request accepted by: {acceptedName}</div> : <div className='user-request_card--status'>Request still open</div>}
        </div>

    );
}

export default UserCard;
