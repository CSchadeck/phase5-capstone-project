import React, { useState } from 'react';


function RequestCard({ title, username, image, description, start_date, end_date }) {
   // const { id, title, user_id, image, description, start_date, end_date, accepted } = request;

   


    return (
        <div className="request_card">
            <h3 className="request_card_name">{title}</h3>
            <div className="request_card_image">
                <img src={image}></img>
            </div>
            <div className="request_card_username">{username}</div>
            <div className="request_card_description">{description}</div>
            <div className="request_card_start_date">{start_date}</div>
            <div className="request_card_end_date">{end_date}</div>
           <button className="accept_button" onClick={thankYou}>Can you help?🐾</button> 
        </div>
        
    );
}
function thankYou(){
    alert('Thank you for volenteering. The poster will confirm with you via email.')
}

export default RequestCard;
// <img src={image} className="request_card">Default pet</img> image issue ref