import React, { useState } from 'react';


function RequestCard({ title, user_id, image, description, start_date, end_date }) {
   // const { id, title, user_id, image, description, start_date, end_date, accepted } = request;




    return (
        <div className="request-card">
            <h3 className="request-card__">{title}</h3>
            <div className="request-card__">{user_id}</div>
            <div className="request-card__">{description}</div>
            <div className="request-card__">{start_date}</div>
            <div className="request-card__">{end_date}</div>
           <button className="accept-button">Can you help?🐾</button> 
        </div>
        
    );
}


export default RequestCard;