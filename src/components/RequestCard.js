import React, { useState } from 'react'
import Requests from './Requests';



function RequestCard({ requests, handleUpdateRequest }) {
    const { id, title, user_id, image, description, start_date, end_date, accepted } = requests;

    function likeHandler() {
        fetch(`https://obscure-headland-31666.herokuapp.com/requests/${id}`, {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ accepted: Requests.accepted + 1 }),
            title: title,
            user_id: user_id,
            image: image,
            description: description,
            start_date: start_date,
            end_date: end_date,
        }).then(r => r.json())
            .then((data) => {

                handleUpdateRequest(data)
            })
    }

    return (
        <div className="request-card">
            <h3 className="request-card__">{requests.title}</h3>
            <p className="request-card__">{requests.user_id}</p>
            <p className="request-card__">{requests.description}</p>
            <p className="request-card__">{requests.start_date}</p>
            <p className="request-card__">{requests.end_date}</p>
            <p>
                <button className="accept-button" onClick={likeHandler}>🐾: {accepted} </button>
            </p>
        </div>
    );
}


export default RequestCard;