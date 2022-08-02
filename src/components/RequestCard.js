import React, { useState } from 'react';

function RequestCard({ props, env }) {
    // const { id, title, user_id, image, description, start_date, end_date, accepted } = props;

    console.log('card props', props);

    return (
        <div className="request_card">
            <h3 className="request_card_name">{props.title}</h3>
            <div className="request_card_image">
                <img src={props.image}></img>
            </div>
            <div className="request_card_username">{props.user.username}</div>
            <div className="request_card_description">{props.description}</div>
            <div className="request_card_start_date">{new Date(props.start_date).toLocaleString()}</div>
            <div className="request_card_end_date">{new Date(props.end_date).toLocaleString()}</div>
            <button className="accept_button" onClick={thankYou}>Can you help?🐾</button>
        </div>

    );
}

function thankYou() {

    alert('Thank you for volunteering.')
}

// function acceptHandler(e) {
//     fetch(`${env}/requests/${props.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             ikes: feeling.likes + 1
//         })
//     }).then(r => r.json())
//         .then((data) => {
//             console.log(data);
//             handleUpdateFeeling(data)
//         })
// }

export default RequestCard;
// <img src={image} className="request_card">Default pet</img> image issue ref