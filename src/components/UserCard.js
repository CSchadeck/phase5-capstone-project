import React, { useState } from 'react';

function UserCard({ props, user }) {
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

    console.log('card props', props);
    const accepted = props.accepted ? 'request_card--accepted' : '';

    return (
        <div className={`request_card ${accepted}`}>
            <h3 className="request_card_name">{props.title}</h3>
            <div className="request_card_image">
                <img src={props.image}></img>
            </div>
            <div className="request_card_username">{user.username}</div>
            <div className="request_card_description">{props.description}</div>
            <div className="request_card_start_date">{new Date(props.start_date).toLocaleString()}</div>
            <div className="request_card_end_date">{new Date(props.end_date).toLocaleString()}</div>
            {/* <button className="accept_button" onClick={acceptHandler}>Can you help?🐾</button> */}
        </div>

    );
}

export default UserCard;
// <img src={image} className="request_card">Default pet</img> image issue ref