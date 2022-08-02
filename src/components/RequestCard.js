import React, { useState } from 'react';

function RequestCard({ props, env, handleUpdatedRequest }) {
    // const { id, title, user_id, image, description, start_date, end_date, accepted } = props;

    function acceptHandler(e) {
        fetch(`/requests/${props.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                accepted: true,
                accepted_by: localStorage.getItem('condoPetID')
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                handleUpdatedRequest(data)
                alert('Thank you for volunteering.')
            });
    }

    console.log('card props', props);
    const visible = props.accepted ? 'hide' : '';

    return (
        <div className={`request_card ${visible}`}>
            <h3 >{props.title}</h3>
            <div>
                <div > <img className='post-image' src={props.image}></img></div>
         
            </div>
            <div >{props.user.username}</div>
            <div >{props.description}</div>
            <div >{new Date(props.start_date).toLocaleString()}</div>
            <div >{new Date(props.end_date).toLocaleString()}</div>
            <button className="button" onClick={acceptHandler}>Can you help?🐾</button>
        </div>

    );
}

export default RequestCard;
// <img src={image} className="request_card">Default pet</img> image issue ref